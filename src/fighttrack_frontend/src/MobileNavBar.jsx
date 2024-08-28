import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded={isActive ? "true" : "false"}
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <span className="navbar-item navbar-title">Navigate Website</span>
      </div>
      <div id="mobileNavbar" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item is-size-5" to="/">
            Home
          </Link>
          <Link className="navbar-item is-size-5" to="/facilities">
            Facilities
          </Link>
          <Link className="navbar-item is-size-5" to="/membership">
            Membership
          </Link>
          <Link className="navbar-item is-size-5" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
