import Navigation from "../components/Navigation";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Page404 from "./Page404";
import Carousel from "../components/Carousel";
import Details from "../components/Details";

const FicheLogement = () => {
  // const { logementId } = useParams();
  const { state } = useLocation();
  const detailDuLogement = state.logement || {};

  return detailDuLogement.id !== undefined ? (
    <>
      {console.log(detailDuLogement)} <Navigation />
      <Carousel images={detailDuLogement.pictures} />
      <Details details={detailDuLogement} />
      <Footer />
    </>
  ) : (
    <Page404 />
  );
};

export default FicheLogement;
