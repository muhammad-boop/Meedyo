import "./Work.css";
import arrow from "../../assets/Images/arrow2.svg";
import action from "../../assets/Images/action.svg";

const Work = () => {
  return (
    <div className="work-section-main">
      <div className="frame-work-section-main">
        <div className="work-section-frame-42">
          <div className="main-text-heading-work">
            <div className="btn-features">
              <div className="btn-features-main">
                <p>Features</p>
              </div>
            </div>
            <h3>Meedyo is your all-in-one solution</h3>
            <p>
              effortlessly plan, post, and analyze your social media platform.
              From scheduling posts to <br /> deep-diving into analytics, we
              give you the tools to enhance your <br /> workflow, boost your
              engagement and grow your brand.
            </p>
          </div>

          {/* ---------------- Infinite Scrollable Cards ---------------- */}
          <div className="work-section-cards">
            <div className="work-section-cards-track">
              {/* CARD 1 */}
              <div className="work-section-card01">
                <div className="text-card-1-work">
                  <div className="text-card01-heading">
                    <div className="text-card01-heading-main-text">
                      <div className="heading-main01-text-container01">
                        <h3>AI Tools</h3>
                        <p>
                          AI-generated post content based on topic or prompt.
                          Hashtag suggestions. Best time to post
                          recommendations. Image caption suggestions.
                        </p>
                      </div>
                    </div>
                    <div className="btn-card01-main-card-1">
                      <p>Learn More</p>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                  <img src={action} alt="action" className="action-img" />
                </div>
              </div>

              {/* CARD 2 */}
              <div className="work-section-card01">
                <div className="text-card-1-work">
                  <div className="text-card01-heading">
                    <div className="text-card01-heading-main-text">
                      <div className="heading-main01-text-container01">
                        <h3>Multi-Platform Posting</h3>
                        <p>
                          Post once and publish to multiple platforms. Select
                          specific platforms for each post. Customize
                          platform-specific content (e.g., hashtags, captions).
                        </p>
                      </div>
                    </div>
                    <div className="btn-card01-main-card-1">
                      <p>Learn More</p>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                  <img src={action} alt="action" className="action-img" />
                </div>
              </div>

              {/* CARD 3 */}
              <div className="work-section-card01">
                <div className="text-card-1-work">
                  <div className="text-card01-heading">
                    <div className="text-card01-heading-main-text">
                      <div className="heading-main01-text-container01">
                        <h3>Post Scheduling</h3>
                        <p>
                          Visual calendar to schedule and manage posts Set
                          specific date and time for each post Support for
                          different time zones Draft saving and editing
                          Auto-rescheduling for failed posts
                        </p>
                      </div>
                    </div>
                    <div className="btn-card01-main-card-1">
                      <p>Learn More</p>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                  <img src={action} alt="action" className="action-img" />
                </div>
              </div>

              {/* CARD 4 */}
              <div className="work-section-card01">
                <div className="text-card-1-work">
                  <div className="text-card01-heading">
                    <div className="text-card01-heading-main-text">
                      <div className="heading-main01-text-container01">
                        <h3>Analytics and Reporting</h3>
                        <p>
                          View post performance per platform Metrics include
                          engagement, reach, impressions, clicks Exportable
                          reports and charts
                        </p>
                      </div>
                    </div>
                    <div className="btn-card01-main-card-1">
                      <p>Learn More</p>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                  <img src={action} alt="action" className="action-img" />
                </div>
              </div>

              {/* Duplicate cards for seamless infinite scroll */}
              <div className="work-section-card01">
                <div className="text-card-1-work">
                  <div className="text-card01-heading">
                    <div className="text-card01-heading-main-text">
                      <div className="heading-main01-text-container01">
                        <h3>AI Tools</h3>
                        <p>
                          AI-generated post content based on topic or prompt.
                          Hashtag suggestions. Best time to post
                          recommendations. Image caption suggestions.
                        </p>
                      </div>
                    </div>
                    <div className="btn-card01-main-card-1">
                      <p>Learn More</p>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                  <img src={action} alt="action" className="action-img" />
                </div>
              </div>

              {/* Add more duplicates if needed for smooth loop */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
