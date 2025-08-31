import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/Images/logo.svg";
import down from "../../assets/Images/down.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="frame-17">
        <img src={logo} alt="Logo" className="nav-logo" />

        {/* Hamburger Icon - Visible on Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <div className={`container-nav-links ${isMenuOpen ? "open" : ""}`}>
          <div className="navigation">
            <div className="link-1">
              <p>Features</p>
              <img src={down} alt="" />
            </div>
            <div className="link-1">
              <p>Integrations</p>
              <img src={down} alt="" />
            </div>
            <div className="link-1">
              <p>Resources</p>
              <img src={down} alt="" />
            </div>
            <div className="link-1">
              <p>Pricing</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="container-btn-nav">
          <div className="main-nav-btns">
            <div className="login-btn">
              <p>Login</p>
            </div>
            <div className="free-trial-btn">
              <p>Start Free Trial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
