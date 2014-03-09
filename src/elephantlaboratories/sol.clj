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

(defn signup
  [request]
  (let [test (-> request :params :signup-test)
        person {:name (-> request :params :signup-name)
                :email (-> request :params :signup-email)
                :message (-> request :params :signup-message)}]
    (if (= test "1")
      (do
        (println (str person))
        (j/insert! db :person person)
        ((page/page "sol-thanks") person)))))

(def sol-routes
  ["/sol" :sol-home (page/page "sol-story") 
   [["/story" :sol-story (page/page "sol-story")]
    ["/game" :sol-game (page/page "sol-game")]
    ["/images" :sol-images (page/page "sol-images")]
    ["/about" :sol-about (page/page "sol-about")]
    ["/contact" :sol-contact (page/page "sol-contact")]
    ["/signup" :sol-signup {:POST #'signup}]]])
