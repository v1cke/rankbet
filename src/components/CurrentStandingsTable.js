const CurrentStandingsTable = ({ standings }) => {
  return (
    <div>
      <h3>Aktuelle Tabelle</h3>
      {standings.map((club, index) => (
        <div
          key={index}
          style={{
            padding: "8px",
            border: "1px solid black",
            marginBottom: "4px",
          }}
        >
          {club.team.name}
        </div>
      ))}
    </div>
  );
};

export default CurrentStandingsTable;
