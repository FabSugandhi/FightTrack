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
              src="https://images.unsplash.com/photo-1555661530-68c8e98db4e6?q=80&w=800&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              style={{ 
                display: "block", 
                margin: "0 auto", 
                width: "100%", 
                maxWidth: "800px", 
                height: "auto", 
                aspectRatio: "2 / 1" 
              }} 
            />
            <h2 className="title is-size-4 mt-4">
             FUEL THE FIGHTER WITHIN
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
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1593234270323-0414ec1574e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
