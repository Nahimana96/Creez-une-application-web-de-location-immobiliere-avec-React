import React from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
const Apropos = () => {
  const fiabilité =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const respect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoie ou de perturbation du visionage entraînera une exclusion de notre plateforme.";
  const securite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logemnt correspond aux critères de sécurité établis pas nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  return (
    <div>
      <Navigation />
      <div className="presentation mob-version">
        <img src="./background2.png" alt="paysage" />
      </div>
      <Collapse title="Fiabilité" content={<p>{fiabilité}</p>} />
      <Collapse title="Respect" content={<p>{respect}</p>} />
      <Collapse title="Service" content={<p>{respect}</p>} />
      <Collapse title="Sécurité" content={<p>{securite}</p>} />
      <Footer />
    </div>
  );
};

export default Apropos;
