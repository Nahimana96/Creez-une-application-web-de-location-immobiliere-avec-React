import React from "react";
import Collapse from "./Collapse";

const Details = ({ details }) => {
  return (
    <div className="details">
      <h1>{details.title}</h1>
      <p>{details.location}</p>
      <div className="host">
        <p>{details.host.name}</p>
        <div className="host-picture">
          <img src={details.host.picture} alt={` ${details.host.name}`} />
        </div>
      </div>
      <div className="tags">
        <ul>
          {details.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="collapse">
        <Collapse title="Description" content={<p>{details.description}</p>} />
        <Collapse
          title="Equipements"
          content={
            <ul>
              {details.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Details;
