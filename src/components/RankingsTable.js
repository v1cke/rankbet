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

      // Sortiere die Daten nach Punkten (aufsteigend)
      const sortedData = newData.sort((a, b) => a.points - b.points);
      setData(sortedData);
    };

    calculatePoints();
  }, [players, standings]);

  return (
    <div className="table">
      <h3>Aktueller Stand</h3>
      {data.map((player, index) => (
        <div key={player.name} className="table-row">
          {index + 1}. {player.name}: {player.points} points
        </div>
      ))}
    </div>
  );
};

export default RankingsTable;
