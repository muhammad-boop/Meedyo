import "./Review.css";
import star from "../../assets/Images/star.svg";

const Review = () => {
  const cards = [
    {
      text: "Lectus pulvinar diam et felis sed integer. Duis non quis vitae donec diam nunc tristique sit.",
      name: "Morris Ferguson",
    },
    {
      text: "Lectus pulvinar diam et felis sed integer. Duis non quis vitae donec diam nunc tristique sit.",
      name: "Morris Ferguson",
    },
    {
      text: "Lectus pulvinar diam et felis sed integer. Duis non quis vitae donec diam nunc tristique sit.",
      name: "Morris Ferguson",
    },
    {
      text: "Lectus pulvinar diam et felis sed integer. Duis non quis vitae donec diam nunc tristique sit.",
      name: "Morris Ferguson",
    },
  ];

  return (
    <div className="review-container">
      <div className="main-review-container">
        <div className="review-2nd-container">
          <div className="frame-85-2nd-main">
            {/* Left Column */}
            <div className="cards-slider-main-85">
              <div className="left-container-85-main">
                <div className="main-cards-85-container">
                  {[...cards, ...cards].map((card, index) => (
                    <div className="first-card-85" key={`left-${index}`}>
                      <div className="background-85">
                        <img src={star} alt="" className="start-container" />
                        <div className="desc-main-85">
                          <p>{card.text}</p>
                        </div>
                        <h3>{card.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="cards-slider-main-85">
              <div className="right-container-85-main">
                <div className="main-cards-85-container">
                  {[...cards, ...cards].map((card, index) => (
                    <div className="first-card-85" key={`right-${index}`}>
                      <div className="background-85">
                        <img src={star} alt="" className="start-container" />
                        <div className="desc-main-85">
                          <p>{card.text}</p>
                        </div>
                        <h3>{card.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="text-container-main-heading-desc-85">
              <div className="farme-84-main-heading">
                <div className="farme-83-main-heading-description">
                  <div className="frame-83-main-btn-upper">
                    <div className="background-frame-83-main">
                      <p>Review</p>
                    </div>
                  </div>
                  <div className="heading-desc-text-83">
                    <h3>We get nothing but love from our customers.</h3>
                  </div>
                  <div className="main-btn-bottom-83">
                    <p>
                      Real voices, real results. See how creators thrive with
                      our platform.
                    </p>
                  </div>
                  <div className="main-bottom-btn-main-command">
                    <p>Button 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
