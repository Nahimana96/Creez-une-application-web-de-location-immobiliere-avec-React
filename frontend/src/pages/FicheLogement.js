import Navigation from "../components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import { useEffect } from "react";

const FicheLogement = ({ logements }) => {
  const { logementId } = useParams();
  const navigate = useNavigate();
  const detailDuLogement = logements.find(
    (logement) => logement.id === logementId
  );
  useEffect(() => {
    detailDuLogement === undefined && navigate("/404");
  });
  if (detailDuLogement !== undefined) {
    return (
      <>
        <Navigation />;
        <Carousel images={detailDuLogement.pictures} />
        <Details details={detailDuLogement} />
        <Footer />
      </>
    );
  }
};

export default FicheLogement;
