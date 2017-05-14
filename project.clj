(defproject elephantlaboratories "0.0.6"
  :description "Website for Elephant Laboratories and Sol"
  :url "http://elephantlaboratories.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/java.jdbc "0.7.0-alpha3"]
                 [org.postgresql/postgresql "9.4.1212"]
                 [cheshire "5.7.1"]
                 [polaris "0.0.17"]
                 [aleph "0.4.3"]
                 [com.taoensso/timbre "4.10.0"]
                 [ring "1.6.0-RC3"]
                 [com.novemberain/monger "3.1.0"]
                 [com.draines/postal "2.0.2"]
                 ;; [http-kit "2.1.12"]
                 ;; [cryogen-markdown "0.1.1"]
                 ;; [cryogen-core "0.1.20"]
                 [caribou/antlers "0.6.1"]]
  :main elephantlaboratories.server)
