import { React } from "react";

const Card = ({ logement }) => {
  return (
    <li>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.title}</p>
    </li>
  );
};

export default Card;
