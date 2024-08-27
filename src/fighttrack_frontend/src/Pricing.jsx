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
        <h2 className="title is-2 has-text-centered has-text-weight-bold">
          Casual Session Pass
        </h2>
        <div className="columns">
          <div className="column is-one-third has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">Free Trial</h2>
            <p className="has-text-weight-light plan_subtitle">Free trial to any class of your choice</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$0</h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>First time at our gym?</p>
              <p>Try any one of our classes for free</p>
              <p>No commitment required</p>
              <p>Only one use per customer</p>
              <p>Visit our gym reception to claim your free trial</p>
              <p>and start your fitness journey today!</p>
              <br></br>
            </div>
            <div className="spacer"></div>
          </div>
          <div className="column is-one-third has-text-centered best_selling">
            <h2 className="title is-4 plan_title has-text-white has-text-weight-bold">Day Pass</h2>
            <p className="has-text-weight-light plan_subtitle">Casual single entry to any of our boxing classes</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$29.95</h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Valid for 1 session</p>
              <p>Does not expire</p>
              <p>Access to all classes</p>
              <p>No access to events</p>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary best_selling_btn">Get Started Now</Link>
          </div>
          <div className="column is-one-third has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">10 Credit Pack</h2>
            <p className="has-text-weight-light plan_subtitle">Credit packs to access any of our boxing classes</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$239.95</h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Valid for 10 sessions</p>
              <p>3 Month Expiry</p>
              <p>Access to all classes</p>
              <p>No access to events</p>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary">Get Started Now</Link>
          </div>
        </div>

        <div className="spacer"></div>
        <h2 className="title is-2 has-text-centered has-text-weight-bold">
          Unlimited Membership
        </h2>
        <div className="columns">
          <div className="column is-one-quarter has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">Cardi Box</h2>
            <p className="has-text-weight-light plan_subtitle">Direct Debit - BEST VALUE</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$79.90<span className="has-text-weight-light">/fortnight</span></h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Unlimited sessions</p>
              <p>Auto-renewal</p>
              <p>Billed fortnightly</p>
              <p>Minimum term 6 months</p>
              <p>Access to sparring (booking required)</p>
              <p>Excludes Fighters Academy Training</p>
              <p>No access to events</p>
              <p>Cancellation Policy: 30 days notice</p>
            </div>
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary">Get Started Now</Link>
          </div>
          <div className="column is-one-quarter has-text-centered best_selling">
            <h2 className="title is-4 plan_title has-text-white has-text-weight-bold">Cardi Box</h2>
            <p className="has-text-weight-light plan_subtitle">Direct Debit - BE FREE</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$99.90<span className="has-text-weight-light">/fortnight</span></h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Unlimited sessions</p>
              <p>Auto-renewal</p>
              <p>Billed fortnightly</p>
              <p>NO minimum term</p>
              <p>Access to sparring (booking required)</p>
              <p>Excludes Fighters Academy Training</p>
              <p>No access to events</p>
              <p>Cancellation Policy: 30 days notice</p>
            </div>
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary best_selling_btn">Get Started Now</Link>
          </div>
          <div className="column is-one-quarter has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">Fighters Academy</h2>
            <p className="has-text-weight-light plan_subtitle">Direct Debit - BEST VALUE</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$79.90<span className="has-text-weight-light">/fortnight</span></h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Unlimited sessions</p>
              <p>Auto-renewal</p>
              <p>Billed fortnightly</p>
              <p>Minimum term 6 months</p>
              <p>Access to sparring (booking required)</p>
              <p>Excludes Cardi Box access</p>
              <p>No access to events</p>
              <p>Cancellation Policy: 30 days notice</p>
            </div>
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary">Get Started Now</Link>
          </div>
          <div className="column is-one-quarter has-text-centered best_selling">
            <h2 className="title is-4 plan_title has-text-white has-text-weight-bold">Cardi Box</h2>
            <p className="has-text-weight-light plan_subtitle">BE FREE</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$99.90<span className="has-text-weight-light">/fortnight</span></h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Unlimited sessions</p>
              <p>Auto-renewal</p>
              <p>Billed fortnightly</p>
              <p>NO minimum term</p>
              <p>Access to sparring (booking required)</p>
              <p>Excludes Cardi Box access</p>
              <p>No access to events</p>
              <p>Cancellation Policy: 30 days notice</p>
            </div>
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary best_selling_btn">Get Started Now</Link>
          </div>
        </div>

        <div className="spacer"></div>
        <h2 className="title is-2 has-text-centered has-text-weight-bold">
          Special Passes
        </h2>
        <div className="columns">
          <div className="column is-one-third has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">Kids Boxing</h2>
            <p className="has-text-weight-light plan_subtitle">Ages 6-12 years</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$39.95<span className="has-text-weight-light">/fortnight</span></h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Unlimited sessions</p>
              <p>Auto-renewal</p>
              <p>Billed fortnightly</p>
              <p>NO minimum term</p>
              <p>Strict age limit</p>
              <p>No access to events</p>
              <p>Cancellation Policy: 30 days notice</p>
              <div className="spacer"></div>
              <Link to="/purchase" className="button is-primary">Get Started Now</Link>
            </div>
            <div className="spacer"></div>
          </div>
          <div className="column is-one-third has-text-centered best_selling">
            <h2 className="title is-4 plan_title has-text-white has-text-weight-bold">Open Gym Pass</h2>
            <p className="has-text-weight-light plan_subtitle">Direct Debit - FLEXI</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">$13.90<span className="has-text-weight-light">/fortnight</span></h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Unlimited access to weights area</p>
              <p>Auto-renewal</p>
              <p>Billed fortnightly</p>
              <p>NO minimum term</p>
              <p>No access to events</p>
              <p>Cancellation Policy: 14 days notice</p>
              <br></br>
            </div>
            <div className="spacer"></div>
            <Link to="/purchase" className="button is-primary best_selling_btn">Get Started Now</Link>
          </div>
          <div className="column is-one-third has-text-centered has-background-dark">
            <h2 className="title is-4 plan_title has-text-weight-bold">Personal Training</h2>
            <p className="has-text-weight-light plan_subtitle">Tailored sessions with one of our trainers</p>
            <div className="price">
              <h2 className="title is-2 has-text-weight-bold">Price Available upon Request</h2>
            </div>
            <div className="spacer"></div>
            <div className="features has-text-white">
              <p>Valid for 10 sessions</p>
              <p>3 Month Expiry</p>
              <p>Access to all classes</p>
              <p>No access to events</p>
              <br></br>
            </div>
            <div className="spacer"></div>
            <Link to="/contact" className="button is-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
