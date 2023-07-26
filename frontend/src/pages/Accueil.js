import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Logements from "../components/Logements";
const Accueil = () => {
  const [logements, setlogements] = useState([]);
  useEffect(() => {
    fetch("listLogements.json")
      .then((res) => res.json())
      .then((data) => setlogements(data))
      .catch((err) => console.error(err));
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
