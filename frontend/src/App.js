import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Page404 from "./pages/Page404";
import FicheLogement from "./pages/FicheLogement";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/" element={<Accueil />} />
        <Route
          path={`/ficheLogement/:logementId`}
          element={<FicheLogement />}
        />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
