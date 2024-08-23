import React from "react";

const Membership = () => {
  return (
    <div className="container mt-5">
      <section className="section">
        <div className="box">
          <h2 className="title is-2">Membership</h2>
          <p>
            Welcome to our Boxing Club! We take pride in offering top-notch facilities to meet all your needs. Our facilities are designed to provide you with comfort, convenience, and a great experience. Whether you are here for work or leisure, we have everything you need to make your stay enjoyable.
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
                Contact us to learn more about our membership benefits and pricing.
              </p>
              <button className="button is-primary mt-5">
                  Get Started &gt;
              </button>
            </div>
          </div>

          <div className="columns mt-4">
            <div className="column is-half">
              <p>
                At our Boxing Club, we understand the importance of well-equipped event spaces for hosting successful gatherings. Our versatile facilities can accommodate a wide range of events, from corporate meetings to social celebrations. We provide personalized support to ensure that every event is a memorable and seamless experience for our clients and their guests.
              </p>
              <button className="button is-primary mt-5">
                  Get Started &gt;
              </button>
            </div>
            <div className="column is-half">
              <img 
                alt="Boxing ring with punching bags" 
                className="image is-4by3" 
                src="https://placehold.co/320x240" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
