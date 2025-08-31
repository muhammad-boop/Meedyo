import "./Manage.css";
import fb from "../../assets/Images/fb.svg";
import insta from "../../assets/Images/insta.svg";
import twiter from "../../assets/Images/twiter.svg";
import tik from "../../assets/Images/tik.svg";
import pin from "../../assets/Images/pin.svg";
import thread from "../../assets/Images/thread.svg";
import link from "../../assets/Images/linkdin.svg";
import yt from "../../assets/Images/yt.svg";
import telagram from "../../assets/Images/telagram.svg";
import q from "../../assets/Images/q.svg";

const Manage = () => {
  return (
    <div className="manage-container">
      <div className="manage-container-main">
        <div className="frame-49">
          <div className="btn-manage-1">
            <p>Social Media Integration</p>
            <div className="line01"></div>
          </div>
          <div className="btn-manage-1 btn-manager-2">
            <p>All-in-one dashboard</p>
            <div className="line02"></div>
          </div>
          <div className="btn-manage-1 btn-manager-2">
            <p>Unified Engagement</p>
            <div className="line02"></div>
          </div>
        </div>
        <h1>Connect & manage multiple accounts </h1>
      </div>
      <div className="frame-73">
        <div className="upper-icon">
          <div className="frame-73-icon-1">
            <div className="frame-73-icon-1-img">
              <img src={fb} alt="" className="fb-img" />
            </div>
            <p>Facebook</p>
          </div>
          {/* icon-2 */}
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={insta} alt="" className="insta-icon" />
            </div>
            <p>Instagram</p>
          </div>
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={twiter} alt="" className="insta-icon" />
            </div>
            <p>Twitter</p>
          </div>
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={tik} alt="" className="insta-icon" />
            </div>
            <p>TikTok</p>
          </div>
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={pin} alt="" className="insta-icon" />
            </div>
            <p>Pinterest</p>
          </div>
        </div>
        <div className="upper-icon">
          <div className="frame-73-icon-1">
            <div className="frame-73-icon-1-img">
              <img src={thread} alt="" className="fb-img" />
            </div>
            <p>Threads</p>
          </div>
          {/* icon-2 */}
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={link} alt="" className="insta-icon" />
            </div>
            <p>LinkedIn</p>
          </div>
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={yt} alt="" className="insta-icon" />
            </div>
            <p>YouTube</p>
          </div>
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={telagram} alt="" className="insta-icon" />
            </div>
            <p>Telagram</p>
          </div>
          <div className="frame-73-icon-2">
            <div className="frame-73-icon-2-img">
              <img src={q} alt="" className="insta-icon" />
            </div>
            <p>Quora</p>
          </div>
        </div>
      </div>
      {/* btn */}
      <div className="btn-component-08">
        <div className="btn-component-08-text">
          <p>See how it works</p>
        </div>
        <div className="btn-icon-component">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M6.5 1C7.07143 1.85714 9.07143 3.65714 12.5 4"
              stroke="white"
              stroke-linecap="round"
            />
            <path
              d="M6.5 7C7.07143 6.14286 9.07143 4.34286 12.5 4"
              stroke="white"
              stroke-linecap="round"
            />
            <line
              x1="10.2857"
              y1="4.07153"
              x2="0.999991"
              y2="4.07153"
              stroke="white"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Manage;
