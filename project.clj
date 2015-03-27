(defproject elephantlaboratories "0.0.5"
  :description "Website for Elephant Laboratories and Sol"
  :url "http://elephantlaboratories.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/java.jdbc "0.3.3"]
                 [postgresql/postgresql "8.4-702.jdbc4"]
                 [http-kit "2.1.12"]
                 [polaris "0.0.4"]
                 [ring "1.2.1"]
                 [caribou/antlers "0.6.1"]
                 [cryogen-markdown "0.1.1"]
                 [cryogen-core "0.1.20"]]
  :main elephantlaboratories.server)
