import React, { useState } from "react";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ priceId }) => {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: name,
        email: email,
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // Here you would typically send the paymentMethod.id to your server
      console.log("[PaymentMethod]", paymentMethod);
      setError(null);
      setProcessing(false);
      alert("Payment successful!");
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <div className="box">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds-tablet is-half-desktop px-5">
            <h2 className="title is-4">Payment Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Name on Card</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Card Number</label>
                <div className="control">
                  <CardNumberElement options={cardElementOptions} className="input" />
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label">Expiry Date</label>
                    <div className="control">
                      <CardExpiryElement options={cardElementOptions} className="input" />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label">CVC</label>
                    <div className="control">
                      <CardCvcElement options={cardElementOptions} className="input" />
                    </div>
                  </div>
                </div>
              </div>
              
              {error && <p className="help is-danger">{error}</p>}
              
              <div className="field">
                <div className="control">
                  <button
                    className={`button is-primary is-fullwidth ${processing ? 'is-loading' : ''}`}
                    type="submit"
                    disabled={!stripe || processing}
                  >
                    {processing ? "Processing..." : "Pay Now"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;