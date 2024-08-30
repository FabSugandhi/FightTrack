import React from 'react';
import { Link } from 'react-router-dom';

const Class = () => {
  return (
    <div className="container mt-5">
      <section className="section">
        <div className="box">
          <h1 className="title is-2">Our Classes</h1>
          <p className="mb-4">
            Discover our diverse range of classes designed to suit different fitness levels and goals. Each class offers unique benefits to help you stay motivated and reach your full potential. 
            Explore our offerings to find the perfect fit for your fitness journey. 
            <br /><br />
            For more details on our class schedules, please check out our calendar to see the available slots and plan your visits accordingly.
          </p>
          <Link to="/calendar">
            <button className="button is-primary mt-5">
              View Class Schedule &gt;
            </button>
          </Link>

          <div className="columns mt-4 is-reverse-on-mobile">
            <div className="column is-half">
              <h2 className="title is-size-4">Cardi Box</h2>
              <p>
                A high-intensity cardio workout incorporating boxing techniques to help you burn calories and build endurance.
              </p>
            </div>
            <div className="column is-half">
              <img 
                alt="Cardi Box" 
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1651707999611-b3d3b849b8f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ 
                  width: "100%", 
                  maxWidth: "320px"  
                }} 
              />
            </div>
          </div>

          <div className="columns mt-4">
            <div className="column is-half">
              <img 
                alt="Fighters Academy" 
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1615117079816-077715446270?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                style={{ 
                  width: "100%", 
                  maxWidth: "320px"  
                }} 
              />
            </div>
            <div className="column is-half">
              <h2 className="title is-size-4">Fighters Academy</h2>
              <p>
                Learn the fundamentals of boxing in a structured program designed for both beginners and experienced fighters.
              </p>
            </div>
          </div>

          <div className="columns mt-4 is-reverse-on-mobile">
            <div className="column is-half">
              <h2 className="title is-size-4">Open Gym</h2>
              <p>
                Enjoy flexible training time with access to all gym equipment and facilities to work on your boxing skills.
              </p>
            </div>
            <div className="column is-half">
              <img 
                alt="Open Gym" 
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1514994444123-10094655bdb5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ 
                  width: "100%", 
                  maxWidth: "320px"  
                }} 
              />
            </div>
          </div>

          <div className="columns mt-4">
            <div className="column is-half">
              <img 
                alt="Kids Boxing" 
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1522187030730-5485088c6bfd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                style={{ 
                  width: "100%", 
                  maxWidth: "320px"  
                }} 
              />
            </div>
            <div className="column is-half">
              <h2 className="title is-size-4">Kids Boxing (6-12 years)</h2>
              <p>
                A fun and safe environment where kids can learn boxing basics, improve coordination, and build confidence.
              </p>
            </div>
          </div>

          <div className="columns mt-4 is-reverse-on-mobile">
            <div className="column is-half">
              <h2 className="title is-size-4">Personal Training</h2>
              <p>
                Tailored one-on-one sessions with our expert trainers to help you achieve your fitness goals.
              </p>
            </div>
            <div className="column is-half">
              <img 
                alt="Personal Training" 
                className="image is-4by3" 
                src="https://images.unsplash.com/photo-1636581563711-cd454f1bf99a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                style={{ 
                  width: "100%", 
                  maxWidth: "320px"  
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class;
