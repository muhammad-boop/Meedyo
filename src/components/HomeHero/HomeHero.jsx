import "./HomeHero.css";
import Navbar from "../../components/Navbar/Nav";
import herobg from "../../assets/Images/herobg.svg";
import tick from "../../assets/Images/tick.svg";
import Slider from "../../components/containerSlider/Slider";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <header>
        <Navbar />
      </header>

      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "auto 945.156px",
        }}
      >
        <div className="hero-text">
          <h1>All your socials, one powerful hub</h1>
          <p>Connect, post, and engage everywhere</p>

          <div className="hero-features">
            <div className="feature-item">
              <img src={tick} alt="tick" className="check-img" />
              <p>Manage all social platforms</p>
            </div>
            <div className="feature-item">
              <img src={tick} alt="tick" className="check-img" />
              <p>Track growth at one place</p>
            </div>
            <div className="feature-item">
              <img src={tick} alt="tick" className="check-img" />
              <p>Reply to every comment</p>
            </div>
            <div className="feature-item">
              <img src={tick} alt="tick" className="check-img" />
              <p>Easy-to-use dashboard</p>
            </div>
          </div>

          <div className="hero-btn">
            <span>Try Free</span>
          </div>
        </div>
      </div>
      {/* Slider */}
      <Slider />
    </div>
  );
};

export default HomeHero;
