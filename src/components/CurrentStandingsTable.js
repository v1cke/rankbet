import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrentStandingsTable = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

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
    console.log("standings", standings);

    fetchStandings();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Current Placings</h3>
      {standings.map((team, index) => (
        <div
          key={index}
          style={{
            padding: "8px",
            border: "1px solid black",
            marginBottom: "4px",
          }}
        >
          {team.team.name}
        </div>
      ))}
    </div>
  );
};

export default CurrentStandingsTable;
