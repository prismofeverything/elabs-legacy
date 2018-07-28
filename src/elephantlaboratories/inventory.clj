(ns elephantlaboratories.inventory
  (:require
   [clojure.string :as string]
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
  ["name"
   "name"
   "company"
   "address1"
   "address2"
   "city"
   "state"
   "zip"
   "country"
   "email"
   "phone"])

(defn maps->rows
  ([maps] (maps->rows maps (keys (first maps))))
  ([maps order]
   (let [header funagain-header ;; (map name order)
         lines (map (partial extract order) maps)]
     (cons header lines))))

(defn maps->csv
  ([maps] (maps->csv maps (keys (first maps))))
  ([maps order]
   (let [data (maps->rows maps order)
         writer (java.io.StringWriter.)
         csv (csv/write-csv writer data)]
     (.toString writer))))

(defn mark-shipped
  [db]
  (db/update db :charges {} {:$set {:shipped true}}))

(defn parse-value
  [raw]
  (try
    (let [trim (string/trim raw)
          expense? (or (= (first trim) \() (and (= (first trim) \") (= (second trim) \()))
          clean (string/replace trim #"[()$, \"]" "")
          decimal (Double/parseDouble clean)]
      (if expense?
        (* -1 decimal)
        decimal))
    (catch Exception e
      (println "failed on" raw)
      0)))

(defn read-expenses
  [path column]
  (let [file (slurp path)
        lines (string/split file #"\n")
        parts (map #(string/split % #",") (rest lines))
        values (map #(nth % column) parts)
        decimals (map parse-value values)]
    (reduce + 0 decimals)))
