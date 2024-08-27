import React from "react";
import { Link } from "react-router-dom";
import "./Purchase.css"; // Import the CSS file if you have any specific styles

const Purchase = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered has-text-weight-bold">
          Purchase Page
        </h1>
        <p className="has-text-centered mt-4">
          Thank you for your interest in our services! You are about to make a purchase. Please follow the instructions below to complete your transaction.
        </p>
        <div className="spacer"></div>
        <div className="has-text-centered">
          <p className="mt-4">
            This is a dummy purchase page for demonstration purposes. In a real application, this page would include a payment form and other necessary details.
          </p>
          <div className="spacer"></div>
          <Link to="/pricing" className="button is-primary">Back to Pricing</Link>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
