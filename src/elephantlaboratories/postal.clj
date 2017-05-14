(ns elephantlaboratories.postal
  (:require
   [postal.core :as postal]))

(defn send-email!
  [{:keys [from to subject body]}]
  (postal/send-message
   {:host "smtp.mandrillapp.com"
    :port 587
    :user "Elephant Laboratories"
    :pass (System/getenv "MANDRILL_KEY")}
   {:from (or from "Elephant Laboratories <mothership@elephantlaboratories.com>")
    :to (or to "mothership@elephantlaboratories.com")
    :subject (or subject "A message from the mothership")
    :body (or body "Welcome to the mothership!")}))
