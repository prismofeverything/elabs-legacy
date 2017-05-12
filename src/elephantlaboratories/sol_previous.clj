(ns elephantlaboratories.sol-previous
  (:require [clojure.string :as string] 
            [clojure.java.jdbc :as j]
            [antlers.core :as antlers]
            [polaris.core :as polaris]
            [elephantlaboratories.db :as db]
            [elephantlaboratories.page :as page]))

(defn signup
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

(def sol-routes
  ["/sol-previous" :sol-home (page/page "solprevious-story") 
   [["/story" :sol-story (page/page "solprevious-story")]
    ["/game" :sol-game (page/page "solprevious-game")]
    ["/worlds" :sol-worlds (page/page "solprevious-worlds")]
    ["/images" :sol-images (page/page "solprevious-images")]
    ["/about" :sol-about (page/page "solprevious-about")]
    ["/contact" :sol-contact (page/page "solprevious-contact")]
    ["/signup" :sol-signup {:POST #'signup}]]])

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
