(ns elephantlaboratories.inventory
  (:require
   [elephantlaboratories.mongo :as db]))

(defn all-inventory
  "inventory is defined by a key for each
   location inventory is held, whose value is
   a map containing a key for each product whose
   value is a count remaining."
  [db]
  (db/find-all db :inventory))

(defn get-inventory
  [db location product]
  (let [inventory (first (db/query db :inventory {:location (name location)}))]
    (get inventory (keyword product))))

(defn add-inventory!
  [db location product count]
  (db/update
   db :inventory
   {:location (name location)}
   {:$set {product count}}))

(defn claim-inventory!
  ([db location product] (claim-inventory! db location product 1))
  ([db location product times]
   (db/update
    db :inventory
    {:location (name location)}
    {:$inc {product (- 0 times)}})))

(defn available?
  [inventory product]
  (into
   {}
   (reduce
    (fn [available location]
      (assoc
       available
       (:location location)
       (< 0 (get location (keyword product)))))
    {} inventory)))
