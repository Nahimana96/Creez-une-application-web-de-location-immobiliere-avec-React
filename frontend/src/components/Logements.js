import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
const Logements = () => {
  const [logements, setlogements] = useState([]);
  useEffect(() => {
    fetch("listLogements.json")
      .then((res) => res.json())
      .then((data) => setlogements(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="grid-logements">
      <ul>
        {logements.map((logement) => (
          <Link to={`/ficheLogement/${logement.id}`} state={{ logement }}>
            <Card key={logement.id} logement={logement} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Logements;
