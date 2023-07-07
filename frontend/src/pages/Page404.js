import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Page404 = () => {
  return (
    <div>
      <Navigation />
      <div className="not-found">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <NavLink to="/">
          <h3>Retourner sur la page d'accueil</h3>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
