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
            [elephantlaboratories.page :as page]))

(def db
  {:subprotocol "postgresql"
   :subname "//127.0.0.1:5432/sol"
   :user (System/getenv "SOL_USER")
   :password (System/getenv "SOL_PASSWORD")})

(def stripe
  {:test
   {:secret (System/getenv "STRIPE_TEST_SECRET")
    :public (System/getenv "STRIPE_TEST_PUBLIC")}
   :live
   {:secret (System/getenv "STRIPE_LIVE_SECRET")
    :public (System/getenv "STRIPE_LIVE_PUBLIC")}})

(def easypost
  {:test
   {:secret (System/getenv "EASYPOST_SECRET")}})

(defn confirm
  [request]
  (let [test (-> request :params :signup-test)
        person {:name (-> request :params :signup-name)
                :email (-> request :params :signup-email)
                :message (-> request :params :signup-message)}]
    (if (= test "1")
      (do
        (println (str person))
        (j/insert! db :person person)
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
        out {:url "/sol-new/confirm" :name (get-in response [:source :name])}]
    (log/info (keys request))
    (store-charge token amount params response)
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string out)}))

(defn sol-routes
  []
  ["/sol-new" :sol-new-home (page/page "sol-home")
   [["/story" :sol-play (page/page "sol-play")]
    ["/worlds" :sol-new-worlds (page/page "sol-worlds")]
    ["/background" :sol-background (page/page "sol-background")]
    ["/buy" :sol-buy (page/page "sol-buy")]
    ["/thanks" :sol-thanks (page/page "sol-thanks")]
    ["/confirm" :sol-confirm (page/page "sol-confirm")]
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
