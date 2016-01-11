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
            [ring.util.response :refer [redirect]]
            [antlers.core :as antlers]
            [polaris.core :as polaris]
            [cryogen-core.watcher :as cryo-watcher]
            [cryogen-core.plugins :as cryo-plugins]
            [cryogen-core.compiler :as cryo-compiler]
            [elephantlaboratories.page :as page]
            [elephantlaboratories.sol :as sol]
            [elephantlaboratories.lastdays :as lastdays]
            [elephantlaboratories.think :as think]))

(defn wrap-route-for
  [handler routes]
  (fn [request]
    (handler
     (assoc request
       :route-for
       (fn [key params]
         (polaris/reverse-route routes key params))))))

(defn chronicle
  [request]
  (redirect "/chronicle/index.html"))

(def routes
  (polaris/build-routes
   [["/" :home (page/page "home")]
    ["/games" :games (page/page "games")]
    ["/about" :about (page/page "about")]
    ["/chronicle" :chronicle chronicle]
    sol/sol-routes
    lastdays/lastdays-routes
    think/think-routes]))

(def app
  (-> (polaris/router routes)
      (wrap-route-for routes)
      (wrap-resource "communal")
      (wrap-resource "public")
      (wrap-reload)
      (wrap-keyword-params)
      (wrap-multipart-params)
      (wrap-params)))
   
(defn init-cryo
  []
  (cryo-plugins/load-plugins)
  (cryo-compiler/compile-assets-timed)
  (let [ignored-files (-> (cryo-compiler/read-config) :ignored-files)]
    (cryo-watcher/start-watcher!
     "resources/templates"
     ignored-files
     cryo-compiler/compile-assets-timed)))

(defn -main 
  [& args]
  (init-cryo)
  (println "^^^ elephant laboratories up ^^^")
  (httpkit/run-server #'app {:port 21112}))
