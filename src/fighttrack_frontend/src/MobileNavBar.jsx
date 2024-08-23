import React from "react";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  return (
    <nav className="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="is-size-4 has-text-weight-bold">FightTrack</h1>
        </Link>
        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mobileNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div id="mobileNavbar" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item is-size-5" to="/">
            Home
          </Link>
          <Link className="navbar-item is-size-5" to="/about">
            About Us
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
