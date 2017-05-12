(ns elephantlaboratories.server
  ;; (:use [ring.middleware.resource :only (wrap-resource)]
  ;;       [ring.middleware.reload :only (wrap-reload)]
  ;;       [ring.middleware.params :only (wrap-params)]
  ;;       [ring.middleware.keyword-params :only (wrap-keyword-params)]
  ;;       [ring.middleware.multipart-params :only (wrap-multipart-params)])
  (:require
   [clojure.edn :as edn] 
   [clojure.java.io :as io]
   [clojure.string :as string]
   [clojure.pprint :as pprint]
   [clojure.java.jdbc :as j]
   [manifold.stream :as stream]
   [aleph.http :as http]
   [ring.middleware.resource :as resource]
   [ring.middleware.content-type :as content-type]
   [ring.middleware.reload :as reload]
   ;; [org.httpkit.server :as httpkit] 
   ;; [ring.util.response :refer [redirect]]
   [taoensso.timbre :as log]
   [antlers.core :as antlers]
   [polaris.core :as polaris]
   ;; [cryogen-core.watcher :as cryo-watcher]
   ;; [cryogen-core.plugins :as cryo-plugins]
   ;; [cryogen-core.compiler :as cryo-compiler]
   [elephantlaboratories.page :as page]
   [elephantlaboratories.sol :as sol]
   [elephantlaboratories.sol-previous :as sol-previous]
   ;; [elephantlaboratories.lastdays :as lastdays]
   [elephantlaboratories.think :as think]))

(defn wrap-route-for
  [handler routes]
  (fn [request]
    (handler
     (assoc request
       :route-for
       (fn [key params]
         (polaris/reverse-route routes key params))))))

;; (defn chronicle

;;   (redirect "/chronicle/index.html"))

(defn base-routes
  []
  [["/" :home (page/page "index" {:title "Elephant Laboratories"})]
   ;; ["/games" :games (page/page "games")]
   ;; ["/about" :about (page/page "about")]
   (sol/sol-routes)
   sol-previous/sol-routes
   ;; ["/chronicle" :chronicle chronicle]
   ;; lastdays/lastdays-routes
   think/think-routes])

(defn app
  [routes]
  (let [built (polaris/build-routes routes)]
    (-> (polaris/router built)
        (wrap-route-for built)
        (resource/wrap-resource "communal")
        (resource/wrap-resource "public")
        (content-type/wrap-content-type)
        (reload/wrap-reload))))

      ;; (ring.middleware.keyword-params/wrap-keyword-params)
      ;; (ring.middleware.multipart-params/wrap-multipart-params)
      ;; (ring.middleware.params/wrap-params)))


;; (defn init-cryo
;;   []
;;   (cryo-plugins/load-plugins)
;;   (cryo-compiler/compile-assets-timed)
;;   (let [ignored-files (-> (cryo-compiler/read-config) :ignored-files)]
;;     (cryo-watcher/start-watcher!
;;      "resources/templates"
;;      ignored-files
;;      cryo-compiler/compile-assets-timed)))

(defn start
  [config]
  (http/start-server (app (base-routes)) {:port (or (:port config) 21112)}))

(defn -main 
  [& args]
  ;; (init-cryo)
  (println "^^^ elephant laboratories up ^^^")
  ;; (httpkit/run-server #'app {:port 21112})
  (start {})
  (while true
    (Thread/sleep 1111)))
