import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Facilities = () => {
  return (
    <div className="container mt-5">
      <section className="section">
        <div className="box">
          <h2 className="title is-2">Our Facilities</h2>
          <p>
            Welcome to FightTrack! We take pride in offering top-notch facilities designed to meet all your fitness needs. Our amenities provide a comfortable and motivating environment, ensuring that every visit is enjoyable and productive.
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
                At FightTrack, we offer a wide range of classes designed to cater to all fitness levels and interests. Whether you're looking to improve your boxing skills, enhance your cardio, or find a fun way to stay in shape, our expert trainers have crafted programs that are perfect for you. From beginner-friendly sessions to advanced training, we provide a supportive environment where you can challenge yourself and achieve your fitness goals.
              </p>
              <Link to="/class">
                <button className="button is-primary mt-5">
                  Explore Classes &gt;
                </button>
              </Link>
            </div>
          </div>

          <div className="columns mt-4">
            <div className="column is-half">
              <p>
                Our state-of-the-art equipment and well-maintained facilities are designed to enhance your workout experience. We offer modern workout areas, relaxing lounges, and clean, spacious locker rooms to ensure that you feel comfortable and motivated during every visit.
              </p>
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
                Our highly skilled trainers are here to support you throughout your fitness journey. With expertise in various aspects of boxing and wellness, they provide personalized coaching to ensure you get the most out of each workout. Their commitment to your progress and well-being ensures that every training session is effective, motivating, and tailored to your individual goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
