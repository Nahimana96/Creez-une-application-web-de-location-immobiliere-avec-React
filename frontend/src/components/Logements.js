import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
const Logements = ({ logements }) => {
  return (
    <div className="grid-logements">
      <ul>
        {logements.map((logement) => (
          <Link
            key={logement.id}
            to={`/ficheLogement/${logement.id}`}
            state={logement}
          >
            <Card logement={logement} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Logements;
