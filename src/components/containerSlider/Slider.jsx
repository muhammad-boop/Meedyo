import "./Slider.css";
import ruby from "../../assets/Images/ruby.svg";
import sha from "../../assets/Images/sha.svg";
import studio from "../../assets/Images/studio.svg";
import movers from "../../assets/Images/movers.svg";
import hadi from "../../assets/Images/hadi.svg";
import fog from "../../assets/Images/fog.svg";

const Slider = () => {
  const icons = [ruby, sha, studio, movers, hadi, fog];

  return (
    <div className="slider-container-main">
      <div className="slider-track">
        {/* First Set of Icons */}
        {icons.map((icon, index) => (
          <div className="icon-1-main-slider" key={index}>
            <img src={icon} alt={`icon-${index}`} />
          </div>
        ))}
        {icons.map((icon, index) => (
          <div className="icon-1-main-slider" key={`dup-${index}`}>
            <img src={icon} alt={`icon-dup-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
