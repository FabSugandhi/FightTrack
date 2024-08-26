import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer mt-6 pb-6">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="title is-size-5">Terms and Conditions</h3>
            <Link to="/terms-of-service" className="has-text-link">Terms of Service</Link>
            <br />
            <Link to="/privacy-policy" className="has-text-link">Privacy Policy</Link>
          </div>
          <div className="column">
            <h3 className="title is-size-5">Opening Hours</h3>
            <p>Monday-Friday</p>
            <p>7.00am - 10.00pm</p>
          </div>
          
          <div className="column">
            <h3 className="title is-size-5">Address</h3>
            <p>500 Terry Crews St.</p>
            <p>San Francisco, CA 12345</p>
            <p>info@fighttrack.com</p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
          </div>
          
          <div className="column">
            <h3 className="title is-size-5">Find Us</h3>
            <img 
              alt="Map Image" 
              className="image" 
              src="https://placehold.co/400x300/000000/FFFFFF?text=Map+Image" 
            />
          </div>
        </div>
        <p className="has-text-centered mt-6">© 2024 by FightTrack ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
