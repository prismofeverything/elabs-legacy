(ns elephantlaboratories.sol
  (:require [clojure.set :as set]
            [clojure.string :as string]
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
            [elephantlaboratories.db :as db]
            [elephantlaboratories.page :as page]))

(def stripe
  {:test
   {:secret (System/getenv "STRIPE_TEST_SECRET")
    :public (System/getenv "STRIPE_TEST_PUBLIC")}
   :live
   {:secret (System/getenv "STRIPE_LIVE_SECRET")
    :public (System/getenv "STRIPE_LIVE_PUBLIC")}})

(defn confirm
  [request]
  (let [test (-> request :params :signup-test)
        person {:name (-> request :params :signup-name)
                :email (-> request :params :signup-email)
                :message (-> request :params :signup-message)}]
    (if (= test "1")
      (do
        (println (str person))
        (j/insert! db/db :person person)
        ((page/page "sol-thanks") (merge request person))))))

(defn charge!
  [secret token amount]
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
     bytes/to-string))

(defn store-charge
  [token amount params response]
  (log/info token)
  (log/info amount)
  (log/info params)
  (log/info response))

(defn charge-handler
  [request]
  (let [body (bytes/to-string (:body request))
        params (codec/form-decode body "UTF-8")
        _ (log/info (keys params))
        secret (get-in stripe [:test :secret])
        token (get params "token[id]")
        amount 70
        raw (charge! secret token amount)
        response (json/parse-string raw true)
        out {:url "/sol/confirm" :name (get-in response [:source :name])}]
    (log/info (keys request))
    (store-charge token amount params response)
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string out)}))

(defn sol-routes
  []
  ["/sol" :sol-new-home (page/page "sol-home" {:title "Sol"})
   [["/story" :sol-play (page/page "sol-play" {:title "Gameplay"})]
    ["/worlds" :sol-new-worlds (page/page "sol-worlds" {:title "Mythos"})]
    ["/background" :sol-background (page/page "sol-background" {:title "Media"})]
    ["/buy" :sol-buy (page/page "sol-buy" {:title "Buy"})]
    ["/thanks" :sol-thanks (page/page "sol-thanks" {:title "Thank You"})]
    ["/confirm" :sol-confirm (page/page "sol-confirm" {:title "Thanks!"})]
    ["/charge" :sol-charge {:POST #'charge-handler}]]])

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
