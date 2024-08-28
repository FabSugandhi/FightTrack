import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiries, setEnquiries] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, enquiries }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setSuccessMessage(data.message);
        setName('');
        setEmail('');
        setPhone('');
        setEnquiries('');
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Phone</label>
                  <div className="control">
                    <input
                      className="input"
                      type="tel"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Enquiries</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Text input"
                      value={enquiries}
                      onChange={(e) => setEnquiries(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button
                      className="button is-link is-light"
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
                  <div className="notification is-danger is-light mt-3">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="notification is-success is-light mt-3">
                    {successMessage}
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