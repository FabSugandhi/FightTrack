import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="tabs is-centered mb-6">
      <ul>
        <li><Link className="is-active" to="/">Home</Link></li>
        <li><Link to="/facilities">Facilities</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
