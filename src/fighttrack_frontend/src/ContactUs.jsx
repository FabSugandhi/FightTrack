import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiries, setEnquiries] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, phone, enquiries };

    try {
      const response = await fetch('https://fighttrack-abws.onrender.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (!response.ok) {
        // Handle error response
        const errorData = await response.json();
        if (errorData.errors) {
          const errorMessages = errorData.errors.map(error => error.msg).join(", ");
          setErrorMessage(errorMessages);
        } else {
          setErrorMessage(errorData.message || 'Form submission failed');
        }
      } else {
        // Handle successful response
        console.log('Form submitted successfully');
        setErrorMessage(''); // Clear any previous error messages
      }
    } catch (error) {
      // Handle network error
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <section className="section">
        <div className="box">
          <h2 className="title is-2">Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have questions about our classes, facilities, or membership options, feel free to reach out to us.
          </p>
          
          <div className="columns mt-4">
            <div className="column is-one-third">
              <h3 className="title is-4">Locations</h3>
              <p><strong>Brisbane Boxing - Mt Gravatt</strong></p>
              <p>520 Kessels Road</p>
              <p>Macgregor QLD 4109</p>
              <p>info@fighttrack.com</p>
              <p className="mb-3">Tel: 123-456-7890</p>
            </div>

            <div className="column is-two-third">
              <h3 className="title is-4">Drop Us a Line</h3>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Phone Number</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Enquiries</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Text input" value={enquiries} onChange={(e) => setEnquiries(e.target.value)}></textarea>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light"
                    type="button"
                    onClick={() => {
                      setName('');
                      setEmail('');
                      setPhone('');
                      setEnquiries('');
                    }}
                    >
                      Cancel
                      </button>
                  </div>
                </div>
                {errorMessage && (
                  <div className="notification is-success is-light mt-3">
                    {"Email sent successfully"}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;