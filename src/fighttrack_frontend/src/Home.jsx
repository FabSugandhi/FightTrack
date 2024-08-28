import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="container">
      <main>
        <section className="section mb-6">
          <div className="box has-text-centered">
            <img 
              alt="Boxing Image" 
              className="image is-4by3" 
              src="https://placehold.co/800x400/000000/FFFFFF?text=Boxing+Image" 
              style={{ display: "block", margin: "0 auto" }} // Centering the image
            />
            <h2 className="title is-size-4 mt-4">
              Discover a New Way to Improve Your Well-Being
            </h2>
            <p className="mt-2">
              Contact Our Team Now and Revitalize Your Lifestyle!
            </p>
            <Link to="/contact" className="button is-primary mt-4">
              Get in Touch &gt;
            </Link>
          </div>
        </section>
        
        <section className="columns is-multiline">
          <div className="column is-one-third">
            <div className="box has-text-centered">
              <img 
                alt="Workshop Image" 
                className="image" 
                src="https://placehold.co/400x300/000000/FFFFFF?text=Workshop+Image" 
              />
              <h2 className="title is-size-4 mb-3 mt-4">Join the Experience</h2>
              <p className="mb-3">Multiple Membership Options - Free Trial Available!</p>
              <Link to="/pricing" className="button is-primary">
                Membership Packages &gt;
              </Link>
            </div>
          </div>
          
          <div className="column is-one-third">
            <div className="box has-text-centered">
              <img 
                alt="Workshop Image" 
                className="image" 
                src="https://placehold.co/400x300/000000/FFFFFF?text=Workshop+Image" 
              />
              <h2 className="title is-size-4 mb-3 mt-4">Explore Our Facilities</h2>
              <p className="mb-3">State-of-the-Art Equipment & Expert Trainers for All Your Fitness Needs</p>
              <Link to="/facilities" className="button is-primary">
                Learn More &gt;
              </Link>
            </div>
          </div>
          
          <div className="column is-one-third">
            <div className="box has-text-centered">
              <img 
                alt="Mindfulness Image" 
                className="image" 
                src="https://placehold.co/400x300/000000/FFFFFF?text=Mindfulness+Image" 
              />
              <h2 className="title is-size-4 mb-3 mt-4">Discover Our Classes</h2>
              <p className="mb-3">Varied Training Sessions - Suitable for All Levels</p>
              <Link to="/class" className="button is-primary">
                Explore Classes &gt;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
