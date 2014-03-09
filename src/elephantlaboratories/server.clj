(ns elephantlaboratories.server
  (:use [ring.middleware.resource :only (wrap-resource)]
        [ring.middleware.reload :only (wrap-reload)]
        [ring.middleware.params :only (wrap-params)]
        [ring.middleware.keyword-params :only (wrap-keyword-params)]
        [ring.middleware.multipart-params :only (wrap-multipart-params)])
  (:require [clojure.edn :as edn] 
            [clojure.java.io :as io]
            [clojure.string :as string]
            [clojure.pprint :as pprint]
            [clojure.java.jdbc :as j]
            [org.httpkit.server :as httpkit] 
            [antlers.core :as antlers]
            [polaris.core :as polaris]
            [elephantlaboratories.page :as page]
            [elephantlaboratories.sol :as sol]))

(defn wrap-route-for
  [handler routes]
  (fn [request]
    (handler 
     (assoc request 
       :route-for 
       (fn [key params] 
         (polaris/reverse-route routes key params))))))

(def routes
  (polaris/build-routes
   [["/" :home (page/page "home")]
    ["/games" :games (page/page "games")]
    ["/about" :about (page/page "about")]
    sol/sol-routes]))

(def app
  (-> (polaris/router routes)
      (wrap-route-for routes)
      (wrap-resource "public")
      (wrap-reload)
      (wrap-keyword-params)
      (wrap-multipart-params)
      (wrap-params)))
   
(defn -main 
  [& args]
  (httpkit/run-server #'app {:port 21112}))
