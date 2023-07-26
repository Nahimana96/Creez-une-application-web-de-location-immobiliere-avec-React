import Navigation from "../components/Navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import { useEffect } from "react";

const FicheLogement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    data === null && navigate("/404");
  });
  if (data !== null) {
    return (
      <>
        <Navigation />;
        <Carousel images={data.pictures} />
        <Details details={data} />
        <Footer />
      </>
    );
  }
};

export default FicheLogement;
