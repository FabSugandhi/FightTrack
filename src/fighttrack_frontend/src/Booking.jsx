import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Booking = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Booking Page</h1>
        <p className="has-text-centered">This is a dummy booking page.</p>
        <Link to="/calendar" className="button is-link">Back to Calendar</Link>
      </div>
    </section>
  );
};

export default Booking;
