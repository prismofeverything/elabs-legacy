(ns elephantlaboratories.sol
  (:require
   [clojure.set :as set]
   [clojure.string :as string]
   [clojure.pprint :as pprint]
   [clojure.java.jdbc :as j]
   [byte-streams :as bytes]
   [cheshire.core :as json]
   [manifold.deferred :as defer]
   [aleph.http :as http]
   [aleph.http.server :as server]
   [antlers.core :as antlers]
   [polaris.core :as polaris]
   [taoensso.timbre :as log]
   [ring.util.codec :as codec]
   [ring.util.response :as response]
   [elephantlaboratories.page :as page]
   [elephantlaboratories.mongo :as db]
   [elephantlaboratories.postal :as postal]
   [elephantlaboratories.shipping :as shipping]))

(def stripe
  {:test
   {:secret (System/getenv "STRIPE_TEST_SECRET")
    :public (System/getenv "STRIPE_TEST_PUBLIC")}
   :live
   {:secret (System/getenv "STRIPE_LIVE_SECRET")
    :public (System/getenv "STRIPE_LIVE_PUBLIC")}})

(defn charge!
  [secret token amount]
  (when (and secret token amount)
    (log/info secret token amount)
    @(defer/chain
       (http/post
        "https://api.stripe.com/v1/charges"
        {:basic-auth [secret ""]
         :form-params
         {:amount amount
          :currency "usd"
          :description "test!"
          :source token}})
       :body
       bytes/to-string)))

(defn extract-person
  [params response]
  (pprint/pprint params)
  (pprint/pprint response)
  params)

(defn pull-key
  [key]
  (map
   (comp keyword last)
   (re-seq #"\[?([^]\[]+)\]?" key)))

(defn embed-keys
  [m]
  (reduce
   (fn [embed [k v]]
     (assoc-in embed (pull-key k) v))
   {} m))

(defn calculate-shipping
  [{:keys [country]}]
  (if-let [tier (first
                 (filter
                  (fn [[_ tier]]
                    (log/info tier country)
                    ((:set tier) country))
                  (:tiers shipping/shipping-matrix)))]
    (:cost (last tier))
    (:rest-of-the-world shipping/shipping-matrix)))

(defn store-charge!
  [db token total person stripe]
  (log/info token)
  (log/info total)
  (log/info (with-out-str (pprint/pprint person)))
  (db/insert!
   db "charges"
   {:token token
    :total total
    :person person
    :stripe stripe}))

(defn email-confirmation!
  [{:keys [email name shipping total-cost]}]
  (let [to (str name " <" email ">")
        subject "Your order for Sol: Last Days of a Star"
        body (str
              "Dear " name ",\n"
              "Thank you for your order of Sol: Last Days of a Star!\n"
              "Your total with the game and shipping together comes to "
              total-cost ".\n"
              "We will ship it to this address:\n"
              (:address1 shipping) "\n"
              (:address2 shipping) "\n"
              (:city shipping) "\n"
              (:state shipping) "\n"
              (:country shipping) "\n"
              (:zip shipping) "\n"
              "Let us know if you have any questions!\n"
              "With great gratitude,\n"
              "Elephant Laboratories\n"
              "Ryan, Sean and Jodi")]
    (postal/send-email!
     {:to to
      :subject subject
      :body body})))

(def base-game-cost 60)

(defn load-matrix
  [request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string shipping/shipping-matrix)})

(defn charge-handler
  [db request]
  (log/info db)
  (let [body (bytes/to-string (:body request))
        flat (codec/form-decode body "UTF-8")
        params (embed-keys flat)
        _ (log/info params)
        secret (get-in stripe [:test :secret])
        token (get-in params [:token :id])
        shipping-cost (calculate-shipping (:shipping params))
        total-cost (+ base-game-cost shipping-cost)
        raw (charge! secret token total-cost)
        response (json/parse-string raw true)
        out {:url "/sol/confirm" :name (get-in response [:source :name])}]
    (store-charge! db token total-cost params response)
    (email-confirmation! (assoc params :total-cost total-cost))
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string out)}))

(defn sol-routes
  [config]
  ["/sol" :sol-new-home (page/page "sol-home" {:title "Sol"})
   [["/story" :sol-play (page/page "sol-play" {:title "Gameplay"})]
    ["/worlds" :sol-new-worlds (page/page "sol-worlds" {:title "Mythos"})]
    ["/background" :sol-background (page/page "sol-background" {:title "Media"})]
    ["/matrix" :sol-matrix {:GET #'load-matrix}]
    ["/buy" :sol-buy (page/page "sol-buy" {:title "Buy"})]
    ["/thanks" :sol-thanks (page/page "sol-thanks" {:title "Thank You"})]
    ["/confirm" :sol-confirm (page/page "sol-confirm" {:title "Thanks!"})]
    ["/charge" :sol-charge {:POST (fn [request]
                                    (#'charge-handler (:mongo config) request))}]]])

(defn minimum-level
  [printing freight shipping pledge]
  (let [base (+ printing freight)
        outwards (map
                  (fn [copies]
                    (let [cost (+ base (* shipping copies))
                          income (* pledge copies)]
                      {:cost cost :income income :copies copies}))
                  (range))]
    (drop-while
     (fn [{:keys [cost income]}]
       (> cost (* 0.85 income)))
     outwards)))
