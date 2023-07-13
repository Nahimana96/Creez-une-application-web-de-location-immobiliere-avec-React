import React from "react";
import Collapse from "./Collapse";

const Details = ({ details }) => {
  return (
    <div className="details">
      <h1>{details.title}</h1>
      <p>{details.location}</p>
      <div className="host">
        <p>{details.host.name}</p>
        <img src={details.host.picture} alt={`photo de ${details.host.name}`} />
        <div className="tags">
          <ul>
            <li>{details.tags}</li>
          </ul>
        </div>
        <div className="collapse">
          <Collapse title="Description" content={details.description} />
          <Collapse title="Equipements" content={details.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Details;
