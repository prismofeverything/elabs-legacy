(ns elephantlaboratories.think
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

(defn insert-newlines
  [thought]
  (update-in thought [:words] string/replace #"\n" "<br />"))

(defn think
  [request]
  (let [thought (first (j/query db ["select * from thought order by random() limit 1"]))]
    ((page/page "think-thought")
     (assoc request :thought (insert-newlines thought)))))

(defn thought
  [request]
  (let [id (try (Integer/parseInt (-> request :params :thought)) (catch Exception e 1))
        thought (first (j/query db ["select * from thought where id = ?" id]))]
    ((page/page "think-thought")
     (assoc request :thought (insert-newlines thought)))))

(defn expand
  [request]
  ((page/page "think-expand")
   (assoc request :expanding? true)))

(defn mark
  [request]
  (let [words (-> request :params :words)
        thought {:words words}
        mark (first (j/insert! db :thought thought))]
    {:status 302
     :headers {"Location" (str "/think/" (:id mark))}
     :body ""}))

(def think-routes
  ["/think" :think-home #'think
   [["/expand" :think-expand #'expand]
    ["/mark" :think-mark {:POST #'mark}]
    ["/:thought" :think-thought #'thought]]])
