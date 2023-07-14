import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Page404 from "./pages/Page404";
import FicheLogement from "./pages/FicheLogement";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route
          path={`/fichelogement/:logementId`}
          element={<FicheLogement />}
        />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
