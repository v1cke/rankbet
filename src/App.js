import React, { useEffect, useState } from "react";
import axios from "axios";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import PlayerTable from "./components/PlayerTable";
import CurrentStandingsTable from "./components/CurrentStandingsTable";
import RankingsTable from "./components/RankingsTable";

const App = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(""); // State für den ausgewählten Spieler

  useEffect(() => {
    const fetchStandings = async () => {
      const options = {
        method: "GET",
        url: "https://bundesliga-standings.p.rapidapi.com/",
        headers: {
          "x-rapidapi-key":
            "576b8619ccmsh8194636abb97867p1cd04ejsn76b6371afe4e",
          "x-rapidapi-host": "bundesliga-standings.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setStandings(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const ladderPlayer1 = [
    "Borussia Dortmund",
    "RB Leipzig",
    "Bayer Leverkusen",
    "Bayern Munich",
    "Eintracht Frankfurt",
    "VfB Stuttgart",
    "VfL Wolfsburg",
    "1. FC Union Berlin",
    "SC Freiburg",
    "Borussia Monchengladbach",
    "TSG Hoffenheim",
    "Werder Bremen",
    "FC Augsburg",
    "Mainz",
    "VfL Bochum",
    "1. FC Heidenheim 1846",
    "Holstein Kiel",
    "St. Pauli",
  ];
  const ladderPlayer2 = [
    "Bayern Munich",
    "Bayer Leverkusen",
    "Borussia Dortmund",
    "RB Leipzig",
    "Eintracht Frankfurt",
    "VfB Stuttgart",
    "TSG Hoffenheim",
    "VfL Wolfsburg",
    "Werder Bremen",
    "SC Freiburg",
    "Mainz",
    "Borussia Monchengladbach",
    "1. FC Union Berlin",
    "VfL Bochum",
    "FC Augsburg",
    "1. FC Heidenheim 1846",
    "St. Pauli",
    "Holstein Kiel",
  ];
  const ladderPlayer3 = [
    "Bayern Munich",
    "Bayer Leverkusen",
    "Borussia Dortmund",
    "RB Leipzig",
    "Eintracht Frankfurt",
    "VfL Wolfsburg",
    "TSG Hoffenheim",
    "VfB Stuttgart",
    "SC Freiburg",
    "Mainz",
    "Werder Bremen",
    "Borussia Monchengladbach",
    "FC Augsburg",
    "1. FC Union Berlin",
    "1. FC Heidenheim 1846",
    "St. Pauli",
    "VfL Bochum",
    "Holstein Kiel",
  ];

  const players = [
    { name: "Happy", initialTeams: ladderPlayer1 },
    { name: "Peter", initialTeams: ladderPlayer2 },
    { name: "Vicke", initialTeams: ladderPlayer3 },
  ];

  const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value); // Ausgewählten Spieler setzen
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ justifyContent: "center", padding: 20 }}>
        <div
          style={{
            alignItems: "center",
            gap: "20px", // Abstand zwischen Dropdown und Tabelle
          }}
        >
          {/* Dropdown-Auswahlfeld */}
          <select
            value={selectedPlayer}
            onChange={handlePlayerChange}
            style={{
              padding: "10px",
              fontSize: "16px",
              background: "white", // Hintergrundfarbe
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer", // Stil für bessere UX
            }}
          >
            <option value="">Spielertipps wählen</option>
            {players.map((player) => (
              <option key={player.name} value={player.name}>
                {player.name}
              </option>
            ))}
          </select>

          {/* Zeige die Tabelle nur an, wenn ein Spieler ausgewählt ist */}
          {selectedPlayer && (
            <div style={{ width: "300px" }}>
              {players
                .filter((player) => player.name === selectedPlayer)
                .map((player) => (
                  <PlayerTable
                    key={player.name}
                    player={player.name}
                    initialTeams={player.initialTeams}
                  />
                ))}
            </div>
          )}

          {/* Aktuelle Tabelle und Rangliste */}
          <div style={{ gap: "20px" }}>
            <div style={{ width: "300px" }}>
              {standings && <CurrentStandingsTable standings={standings} />}
            </div>
            <div style={{ width: "300px" }}>
              {standings && (
                <RankingsTable players={players} standings={standings} />
              )}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
