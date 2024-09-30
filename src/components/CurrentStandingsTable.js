const CurrentStandingsTable = ({ standings }) => {
  return (
    <div className="table" style={{ flexDirection: "column" }}>
      <h3>Aktuelle Tabelle</h3>
      {standings.map((club, index) => (
        <div key={index} className="table-row">
          {index + 1}. {club.teamName}
        </div>
      ))}
    </div>
  );
};

export default CurrentStandingsTable;
