const CurrentStandingsTable = ({ standings }) => {
  return (
    <div className="table">
      <h3>Aktuelle Tabelle</h3>
      {standings.map((club, index) => (
        <div key={index} className="table-row">
          {index + 1}. {club.team.name}
        </div>
      ))}
    </div>
  );
};

export default CurrentStandingsTable;
