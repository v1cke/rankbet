import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import PlayerTable from "./components/PlayerTable";
import CurrentStandingsTable from "./components/CurrentStandingsTable";
import RankingsTable from "./components/RankingsTable";

const App = () => {
  const initialTeams = [
    "Bayern Munich",
    "Bayer Leverkusen",
    "VFB Stuttgart",
    "RB Leipzig",
    "Borussia Dortmund",
    "Eintracht Frankfurt",
    "TSG Hoffenheim",
    "1. FC Heidenheim 1846",
    "Werder Bremen",
    "SC Freiburg",
    "FC Augsburg",
    "Vfl Wolfsburg",
    "Mainz",
    "Borussia Mönchengladbach",
    "1. FC Union Berlin",
    "Vfl Bochum",
    "FC Cologne",
    "SV Darmstadt 98",
  ];

  const players = [
    { name: "player 1", points: 37, initialTeams },
    { name: "player 2", points: 45, initialTeams },
    { name: "player 3", points: 23, initialTeams },
    { name: "player 4", points: 27, initialTeams },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 1500,
            gap: 20,
          }}
        >
          <PlayerTable player="Player 1" initialTeams={initialTeams} />
          <PlayerTable player="Player 2" initialTeams={initialTeams} />
          <PlayerTable player="Player 3" initialTeams={initialTeams} />
          <PlayerTable player="Player 4" initialTeams={initialTeams} />
          <CurrentStandingsTable />
          <RankingsTable players={players} initialTeams={initialTeams} />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
