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
  [db collection what]
  (mongo/insert db collection what))

(defn find
  [db collection id]
  (mongo/find-one-as-map db collection {:_id (ObjectId. id)}))

(defn query
  [db collection where]
  (mongo/find-maps db collection where))

(defn update
  [db collection where values]
  (mongo/update db collection where values {:upsert true}))

(defn find-all
  [db collection]
  (mongo/find-maps db collection))

(defn timestamp
  [record]
  (.getTimestamp (:_id record)))
