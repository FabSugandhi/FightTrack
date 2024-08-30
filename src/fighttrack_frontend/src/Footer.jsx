import React from "react";
import { Link } from "react-router-dom";

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
            <p>Monday-Thursday</p>
            <p>5.00am - 8.00am</p>
            <p>4.00pm - 8.00pm</p>
            <br></br>
            <p>Friday</p>
            <p>5.00am - 8.00am</p>
            <p>4.00pm - 7.00pm</p>
            <br></br>
            <p>Saturday</p>
            <p>7.00am - 9.00am</p>
          </div>
          
          <div className="column">
            <h3 className="title is-size-5">Address</h3>
            <p>520 Kessels Road</p>
            <p>Macgregor QLD 4109</p>
            <p>info@fighttrack.com</p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
          </div>
          
          <div className="column">
            <h3 className="title is-size-5">Find Us</h3>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.077341105599!2d153.06553227546206!3d-27.560110076267286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9144d359fe2749%3A0x10dd479033a90df5!2s520%20Kessels%20Rd%2C%20Macgregor%20QLD%204109!5e0!3m2!1sen!2sau!4v1724727759678!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <p className="has-text-centered mt-6">© 2024 by FightTrack ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
