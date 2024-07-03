import React, { useState, useEffect } from "react";

const RankingsTable = ({ players, currentStandings }) => {
  console.log("RankingsTable  rankings", players);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("RankingsTable  data", data);

  useEffect(() => {
    const calculatePoints = () => {
      const newData = players.map((player) => {
        console.log("player", player);
        let points = 0;
        player.initialTeams.forEach((prediction, index) => {
          const actualPosition = currentStandings.findIndex(
            (team) => team === prediction
          );
          if (actualPosition !== -1) {
            const positionDifference = Math.abs(index - actualPosition) + 1;
            points += positionDifference;
          }
        });
        return { ...player, points };
      });
      setData(newData);
      setLoading(false);
    };

    calculatePoints();
  }, [players, currentStandings]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Rankings</h3>
      {data.map((player, index) => (
        <div
          key={player.name}
          style={{
            padding: "8px",
            border: "1px solid black",
            marginBottom: "4px",
          }}
        >
          {player.name}: {player.points} points
        </div>
      ))}
    </div>
  );
};

export default RankingsTable;
