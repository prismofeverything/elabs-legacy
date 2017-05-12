(ns elephantlaboratories.think
  (:require [clojure.string :as string] 
            [clojure.java.jdbc :as j]
            [antlers.core :as antlers]
            [polaris.core :as polaris]
            [elephantlaboratories.db :as db]
            [elephantlaboratories.page :as page]))

(defn insert-newlines
  [thought]
  (update-in thought [:words] string/replace #"\n" "<br />"))

(defn read-id
  [request]
  (try
    (Integer/parseInt
     (-> request :params :thought))
    (catch Exception e)))

(defn think
  [request]
  (let [thought (first (j/query db/db ["select * from thought order by random() limit 1"]))]
    ((page/page "think-thought")
     (assoc request :thought (insert-newlines thought)))))

(defn thought
  [request]
  (let [id (or (read-id request) 1)
        thought (first (j/query db/db ["select * from thought where id = ?" id]))]
    ((page/page "think-thought")
     (assoc request :thought (insert-newlines thought) :id id))))

(defn all
  [request]
  (let [thoughts (j/query db/db ["select * from thought order by id"])]
    ((page/page "think-all")
     (assoc request :thoughts (map insert-newlines thoughts)))))

(defn read-thought
  [request]
  (if-let [id (read-id request)]
    (first (j/query db/db ["select * from thought where id = ?" id]))))

(defn expand
  [request]
  (let [thought (read-thought request)]
    ((page/page "think-expand")
     (assoc request :expanding? true :thought thought))))

(defn mark
  [request]
  (if-let [words (-> request :params :words)]
    (let [thought {:words words}
          id (read-id request)
          mark (if id
                 (j/update! db/db :thought thought ["id = ?" id])
                 (first (j/insert! db/db :thought thought)))]
      {:status 302
       :headers {"Location" (str "/think/" (or id (:id mark)))}
       :body ""})))

(def think-routes
  ["/think" :think-home #'think
   [["/all" :think-all #'all]
    ["/mark" :think-mark {:POST #'mark}]
    ["/expand" :think-expand #'expand]
    ["/expand/:thought" :think-enhance #'expand]
    ["/:thought" :think-thought #'thought]]])
