(ns elephantlaboratories.db)

(def db
  {:subprotocol "postgresql"
   :subname (str "//127.0.0.1:5432/" (System/getenv "SOL_DB"))
   :user (System/getenv "SOL_USER")
   :password (System/getenv "SOL_PASSWORD")})

