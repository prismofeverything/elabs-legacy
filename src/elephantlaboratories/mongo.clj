(ns elephantlaboratories.mongo
  (:require
   [monger.core :as db]
   [monger.collection :as mongo])
  (:import
   [org.bson.types ObjectId]))

(defn connect!
  [config]
  (let [connection (db/connect)]
    (db/get-db connection (:database config))))

(defn insert!
  [db where what]
  (mongo/insert db where what))

(defn find
  [db where id]
  (mongo/find-one-as-map db where {:_id (ObjectId. id)}))

(defn find-all
  [db where]
  (mongo/find-maps db where))

(defn timestamp
  [record]
  (.getTimestamp (:_id record)))
