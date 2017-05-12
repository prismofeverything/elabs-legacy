(ns elephantlaboratories.page
  (:require [clojure.string :as string]
            [antlers.core :as antlers]))

(defn template-for
  [slug]
  (let [path (string/replace slug #"-" "/")]
    (str "templates/" path ".html")))

(defn page
  ([slug] (page slug {}))
  ([slug env]
   (fn [request]
     (let [template (template-for slug)]
       {:status 200 
        :headers {"Content-Type" "text/html"}
        :body (antlers/render-file 
               template
               (merge request env {:page slug (keyword slug) true}))}))))

