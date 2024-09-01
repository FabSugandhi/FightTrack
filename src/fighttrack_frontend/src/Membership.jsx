import React from "react";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="container mt-5">
      <section className="section">
        <div className="box">
          <h2 className="title is-2">Membership</h2>
          <p>
            Discover the benefits of being a member at our Boxing Club, where we offer a range of membership options tailored to fit your lifestyle and goals. Our memberships are designed to provide you with the flexibility, value, and access to all our top-notch facilities and classes. Whether you're looking for a short-term commitment or a long-term investment in your fitness journey, we have the perfect plan to suit your needs. Join us and experience the best in boxing and wellness with our exclusive membership benefits.
          </p>

          <div className="columns mt-4">
            <div className="column is-half">
              <img 
                alt="Person wrapping hands with boxing wraps" 
                className="image is-4by3" 
                src="https://placehold.co/320x240" 
              />
            </div>
            <div className="column is-half">
              <p>
                Our membership plans are designed to fit your needs and budget. Whether you're looking for a flexible membership or a long-term commitment, we have options for you.
              </p>
              <ul>
                <li>Monthly Membership</li>
                <li>Quarterly Membership</li>
                <li>Annual Membership</li>
              </ul>
              <p>
                Check the button below to learn more about our membership benefits and pricing.
              </p>
              <Link to="/pricing">
                <button className="button is-primary mt-5">
                    Membership Options &gt;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
