import React from "react";

const Home = ({ entries }) => {
  return (
    <div className="container">
      <main>
        <section className="section mb-6">
          <div className="box has-text-centered">
            <img 
              alt="Boxing Image" 
              className="image is-4by3" 
              src="https://placehold.co/800x400/000000/FFFFFF?text=Boxing+Image" 
            />
            <h2 className="title is-size-4 mt-4">
              Discover a New Way to Improve Your Well-Being
            </h2>
            <p className="mt-2">
              Contact Our Team Now and Revitalize Your Lifestyle!
            </p>
            <button className="button is-primary mt-4">
              Explore More
            </button>
          </div>
        </section>
        
        <section className="columns is-multiline">
          <div className="column is-one-third">
            <div className="box has-text-centered">
              <h2 className="title is-size-4 mb-3">10-Day Wellness Challenge</h2>
              <p className="mb-3">Start Your Journey</p>
              <button className="button is-primary">
                Get Started &gt;
              </button>
            </div>
          </div>
          
          <div className="column is-one-third">
            <div className="box">
              <img 
                alt="Workshop Image" 
                className="image" 
                src="https://placehold.co/400x300/000000/FFFFFF?text=Workshop+Image" 
              />
              <h2 className="title is-size-4 mt-4">Workshops & Events</h2>
              <p className="mt-2">&gt; Transform Your Routine</p>
            </div>
          </div>
          
          <div className="column is-one-third">
            <div className="box">
              <img 
                alt="Mindfulness Image" 
                className="image" 
                src="https://placehold.co/400x300/000000/FFFFFF?text=Mindfulness+Image" 
              />
              <h2 className="title is-size-4 mt-4">Mindfulness Sessions</h2>
              <p className="mt-2">&gt; Join the Experience!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
