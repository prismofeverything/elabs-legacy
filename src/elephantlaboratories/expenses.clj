(ns elephantlaboratories.expenses
  (:require
   [clojure.data.csv :as csv]
   [clojure.java.io :as io]))

(def debit-column 4)
(def credit-column 5)

(defn parse-double
  [s]
  (try
    (Double/parseDouble s)
    (catch Exception e 0.0)))

(defn process-line
  [line]
  (-> line
      (update debit-column parse-double)
      (update credit-column parse-double)))

(defn read-transactions
  [path]
  (with-open [reader (io/reader path)]
    (doall
     (map
      process-line
      (csv/read-csv reader)))))




;; 23449.81
