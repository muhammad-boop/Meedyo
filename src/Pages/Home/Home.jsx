import HomeHero from "../../components/HomeHero/HomeHero";
import Work from "../../components/Work/Work";
import Manage from "../../components/Manage/Manage";
import Trust from "../../components/Trust/Trust";
import Review from "../../components/Review/Review";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Work />
      <Manage />
      <Trust />
      <Review />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
