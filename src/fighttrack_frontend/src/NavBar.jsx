import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="tabs is-centered mb-6">
      <ul>
        <li><Link className="is-active is-size-5" to="/">Home</Link></li>
        <li><Link className="is-size-5" to="/facilities">Facilities</Link></li>
        <li><Link className="is-size-5" to="/membership">Membership</Link></li>
        <li><Link className="is-size-5" to="/contact">Contact Us</Link></li>
        <li><Link className="is-size-5" to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
