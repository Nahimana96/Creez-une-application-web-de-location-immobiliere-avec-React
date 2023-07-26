import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Logements from "../components/Logements";
import { annonces } from "../assets/data/listLogements";
const Accueil = () => {
  const [logements, setlogements] = useState([]);
  useEffect(() => {
    setlogements(annonces);
  }, []);
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
