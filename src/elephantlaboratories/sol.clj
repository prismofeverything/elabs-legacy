(ns elephantlaboratories.sol
  (:require [clojure.string :as string] 
            [clojure.java.jdbc :as j]
            [byte-streams :as bytes]
            [manifold.deferred :as defer]
            [aleph.http :as http]
            [antlers.core :as antlers]
            [polaris.core :as polaris]
            [taoensso.timbre :as log]
            [ring.util.codec :as codec]
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

(defn charge
  [request]
  (let [body (bytes/to-string (:body request))
        params (codec/form-decode body "UTF-8")
        token (get params "token[id]")
        response @(defer/chain
                    (http/post
                     "https://api.stripe.com/v1/charges"
                     {:basic-auth [(get-in stripe [:test :secret]) ""]
                      :form-params
                      {:amount 70
                       :currency "usd"
                       :description "test!"
                       :source token}})
                    :body
                    bytes/to-string)]
    (log/info (keys request))
    (log/info body)
    (log/info params)
    (log/info (get params "token[id]"))
    (log/info response)))

(defn sol-routes
  []
  ["/sol-new" :sol-new-home (page/page "sol-home")
   [["/story" :sol-play (page/page "sol-play")]
    ["/worlds" :sol-new-worlds (page/page "sol-worlds")]
    ["/background" :sol-background (page/page "sol-background")]
    ["/buy" :sol-buy (page/page "sol-buy")]
    ["/thanks" :sol-thanks (page/page "sol-thanks")]
    ["/confirm" :sol-confirm (page/page "sol-confirm")]
    ["/charge" :sol-charge {:POST #'charge}]]])

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
