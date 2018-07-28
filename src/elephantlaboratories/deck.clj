(ns elephantlaboratories.deck
  (:require
   [clojure.java.io :as io]
   [clojure.data.csv :as csv]
   [cheshire.core :as json]))

;; every card must have a unique :id, even if there are multiple cards
;; that are functionally the same

(defn csv->maps
  [csv]
  (let [header (repeat (map keyword (first csv)))]
    (map zipmap header (rest csv))))

(defn read-csv
  [path]
  (let [reader (io/reader path)
        csv (csv/read-csv reader)]
    (csv->maps csv)))

(defn build-deck
  [cards]
  (let [deck (into {} (map (juxt :id identity) cards))]
    {:deck deck
     :dealt {}
     :discards {}}))

(defn draw-card
  "returns a card and the modified deck"
  [{:keys [deck dealt discards]}]
  (let [shuffle-discards? (empty? deck)
        deck (if shuffle-discards? discards deck)
        drawn (first (shuffle (keys deck)))
        card (get deck drawn)]
    {:drawn card
     :deck
     {:deck (dissoc deck drawn)
      :dealt (assoc dealt drawn card)
      :discards (if shuffle-discards? {} discards)}}))

(defn discard-card
  [{:keys [deck dealt discards]} id]
  (let [card (get dealt id)]
    {:deck deck
     :dealt (dissoc dealt id)
     :discards (assoc discards id card)}))

(defn reset-deck
  [{:keys [deck dealt discards]}]
  {:deck (merge deck dealt discards)
   :dealt {}
   :discards {}})

(defn partition-decks
  ([cards] (partition-decks cards :deck))
  ([cards deck-key]
   (let [decks (group-by deck-key cards)]
     (into
      {}
      (map
       (fn [[deck cards]]
         [deck (build-deck cards)])
       decks)))))

(defn draw-from-deck
  [decks deck-key]
  (let [{:keys [drawn deck]} (draw-card (get decks deck-key))]
    {:drawn drawn
     :decks (assoc decks deck-key deck)}))

(defn discard-from-deck
  [decks deck-key id]
  (update decks deck-key discard-card id))

(defn reset-decks
  [decks]
  (into
   {}
   (map
    (fn [[key deck]]
      [key (reset-deck deck)])
    decks)))

(defn load-game
  [game]
  (let [cards (read-csv (str "resources/games/" game ".csv"))]
    (partition-decks cards)))

(defn load-games
  [games]
  (into
   {}
   (map
    (juxt identity (comp atom load-game))
    games)))

(defn deck-handler
  [handler]
  (fn [request]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string (handler request))}))

(defn all-game-routes
  [game-keys]
  (let [all-games (load-games (map name game-keys))]
    ["/games" :games (deck-handler (fn [request] (keys all-games)))
     [["/:game/decks" :decks
       (deck-handler
        (fn [request]
          (keys @(get all-games (get-in request [:params :game])))))

       [["/reset" :reset
         (deck-handler
          (fn [request]
            (let [game (get-in request [:params :game])
                  decks (get all-games game)]
              (swap! decks reset-decks)
              (str game " reset"))))]

        ["/:deck" :deck
         (deck-handler
          (fn [request]
            (let [{:keys [game deck]} (get request :params)
                  decks @(get all-games game)
                  deck (get decks deck)]
              deck)))

         [["/draw" :draw
           (deck-handler
            (fn [request]
              (let [{:keys [game deck]} (get request :params)
                    decks-store (get all-games game)
                    {:keys [drawn decks]} (draw-from-deck @decks-store deck)]
                (reset! decks-store decks)
                drawn)))]

          ["/discard/:id" :discard
           (deck-handler
            (fn [request]
              (let [{:keys [game deck id]} (get request :params)
                    decks-store (get all-games game)]
                (swap! decks-store discard-from-deck deck id)
                (get-in @decks-store [deck :discards id]))))]]]]]]]))
