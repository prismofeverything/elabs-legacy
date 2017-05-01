(ns elephantlaboratories.sol
  (:require [clojure.string :as string] 
            [clojure.java.jdbc :as j]
            [antlers.core :as antlers]
            [polaris.core :as polaris]
            [elephantlaboratories.page :as page]))

(def db
  {:subprotocol "postgresql"
   :subname "//127.0.0.1:5432/sol"
   :user (System/getenv "SOL_USER")
   :password (System/getenv "SOL_PASSWORD")})

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

(defn sol-routes
  []
  ["/sol" :sol-home (page/page "sol-home")
   [["/story" :sol-play (page/page "sol-play")]
    ["/worlds" :sol-worlds (page/page "sol-worlds")]
    ["/background" :sol-background (page/page "sol-background")]
    ["/buy" :sol-buy (page/page "sol-buy")]
    ["/thanks" :sol-thanks (page/page "sol-thanks")]
    ["/confirm" :sol-confirm (page/page "sol-confirm")]]])

;; {:POST #'confirm}

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
