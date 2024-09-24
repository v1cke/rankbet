import React, { useState, useEffect } from "react";

const RankingsTable = ({ players, standings }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const calculatePoints = () => {
      const newData = players.map((player) => {
        let points = 0;
        player.initialTeams.forEach((prediction, index) => {
          const actualPosition = standings.findIndex(
            (club) => club.team.name === prediction
          );
          if (actualPosition !== -1) {
            const positionDifference = Math.abs(index - actualPosition);
            points += positionDifference;
          }
        });
        return { ...player, points };
      });
      setData(newData);
    };

    calculatePoints();
  }, [players, standings]);

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
