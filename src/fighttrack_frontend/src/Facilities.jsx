import React from 'react';

const Facilities = () => {
  return (
    <div className="container mt-5">
      <section className="section">
        <div className="box">
          <h2 className="title is-2">Our Facilities</h2>
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
                From state-of-the-art fitness centers to relaxing spa facilities, we have it all. Our goal is to ensure that our guests have access to the best amenities during their visit. We are dedicated to maintaining high standards of cleanliness and functionality in all our facilities, so you can relax and focus on what matters most to you.
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

          <div className="columns mt-4">
            <div className="column is-half">
              <img 
                alt="Row of red boxing gloves hanging" 
                className="image is-4by3" 
                src="https://placehold.co/320x240" 
              />
            </div>
            <div className="column is-half">
              <p>
                Explore our diverse range of facilities that are tailored to enhance your lifestyle. Whether you are seeking a sophisticated dining experience or a vibrant entertainment venue, we have carefully curated our facilities to cater to your preferences. Join us at our Boxing Club and discover a world of exceptional amenities designed with your satisfaction in mind.
              </p>
              <button className="button is-primary mt-5">
                  Get Started &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
