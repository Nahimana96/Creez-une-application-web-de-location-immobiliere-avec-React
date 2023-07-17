import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Logements from "../components/Logements";
const Accueil = ({ logements }) => {
  return (
    <div>
      <Navigation />
      <Presentation />
      <Logements logements={logements} />
      <Footer />
    </div>
  );
};

export default Accueil;
