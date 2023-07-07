import React, { useEffect, useState } from "react";
import axios from "axios";
const Logements = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    axios
      .get("logements.json")
      .then((res) => setLogements(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="grid-logements">
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>
            <p>{logement.title}</p>
            <img src={logement.cover} alt="couverture" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logements;
