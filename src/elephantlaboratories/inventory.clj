(ns elephantlaboratories.inventory
  (:require
   [clojure.data.csv :as csv]
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

(defn flatten-charge
  [{:keys [person total stripe] :as charge}]
  (let [{:keys [name email phone shipping]} person]
    (merge
     shipping
     {:name name
      :email email
      :phone phone
      :total total})))

(defn extract
  [order m]
  (map (partial get m) order))

(def funagain-header
  [:name
   :name
   :company
   :address1
   :address2
   :city
   :state
   :zip
   :country
   :email
   :phone])

(defn maps->rows
  ([maps] (maps->rows maps (keys (first maps))))
  ([maps order]
   (let [header (map name order)
         lines (map (partial extract order) maps)]
     (cons header lines))))

(defn maps->csv
  ([maps] (maps->csv maps (keys (first maps))))
  ([maps order]
   (let [data (maps->rows maps order)
         writer (java.io.StringWriter.)
         csv (csv/write-csv writer data)]
     (.toString writer))))

(defn emit-orders
  [db from to]
  (let [charges (db/find-all db :charges)
        latest (drop from charges)
        flat (map flatten-charge latest)
        csv (maps->csv flat funagain-header)]
    (spit to csv)))

(defn mark-shipped
  [db]
  (db/update db :charges {} {:$set {:shipped true}}))
