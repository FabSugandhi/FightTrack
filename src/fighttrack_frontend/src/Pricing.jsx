import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Pricing.css"; // Import the CSS file

const Pricing = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered has-text-weight-bold">
          Membership Pricing
        </h1>
        <p className="has-text-centered mt-4">
          Explore our flexible membership options designed to suit a variety of fitness goals and schedules. From monthly plans to annual commitments, we offer a range of choices to fit your lifestyle. New to our gym? Take advantage of our free single pass trial, perfect for those trying us out for the first time. Discover the best plan for you and start your fitness journey today!
        </p>
        <div className="spacer"></div>
        <div className="columns">
          <div className="column is-one-third has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">Free Trial</h2>
            <p className="has-text-weight-light plan_subtitle">Free trial to any class of your choice</p>
            <div className="spacer"></div>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$0</h2>
            </div>
            <div className="spacer"></div>
            {/* <div className="features has-text-white">
              <p>First time at our gym?</p>
              <p>Try any one of our classes for free</p>
              <p>No commitment required</p>
              <p>Only one use per customer</p>
              <p>Visit our gym reception to claim your free trial</p>
              <p>and start your fitness journey today!</p>
              <br></br>
            </div> */}
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary">Get Started Now</Link>
          </div>
          <div className="column is-one-third has-text-centered best_selling">
            <h2 className="title is-4 plan_title has-text-white has-text-weight-bold">6 Month Membership</h2>
            <p className="has-text-weight-light plan_subtitle">6 Month Contract - 15% off</p>
            <div className="spacer"></div>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$79</h2>
            </div>
            <div className="spacer"></div>
            {/* <div className="features has-text-white">
              <p>Valid for 1 session</p>
              <p>Does not expire</p>
              <p>Access to all classes</p>
              <p>No access to events</p>
              <br></br>
              <br></br>
              <br></br>
            </div> */}
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary best_selling_btn">Get Started Now</Link>
          </div>
          <div className="column is-one-third has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">Monthly Membership</h2>
            <p className="has-text-weight-light plan_subtitle">Pay Monthly Cancel Anytime</p>
            <div className="spacer"></div>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$99</h2>
            </div>
            <div className="spacer"></div>
            {/* <div className="features has-text-white">
              <p>Valid for 10 sessions</p>
              <p>3 Month Expiry</p>
              <p>Access to all classes</p>
              <p>No access to events</p>
              <br></br>
              <br></br>
              <br></br>
            </div> */}
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary">Get Started Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
