import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/LOGO.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="le logo du site KASA" />
      </div>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/apropos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
