import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setBookingData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching booking data:', error);
        setLoading(false);
      }
    };

    fetchBookingData();
  }, [id]);

  const handleBookNow = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://fighttrack-abws.onrender.com/api/bookings/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ classId: id }),
      });

      if (response.ok) {
        setMessage(`Booking successful: Redirecting to the dashboard...`);
        setMessageType('success');
        setTimeout(() => {
          navigate('/dashboard');
        }, 5000); 
      } else {
        const error = await response.json();
        setMessage(`Booking failed: ${error.message}`);
        setMessageType('error');
      }
    } catch (error) {
      setMessage(`Booking failed: ${error.message}`);
      setMessageType('error');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Booking Page</h1>
        {bookingData ? (
          <div>
            <p className="has-text-centered">Class Name: {bookingData.title}</p>
            <p className="has-text-centered">Description: {bookingData.description}</p>
            <p className="has-text-centered"> {bookingData.schedule.day}</p>
            <p className="has-text-centered"> {bookingData.schedule.time}</p>
            <p className="has-text-centered">Current Attendees: {bookingData.currentAttendees}</p>
            <p className="has-text-centered">Max Attendees: {bookingData.maxAttendees}</p>
          </div>
        ) : (
          <p className="has-text-centered">No booking data available.</p>
        )}
        <Link to="/dashboard" className="button is-link">Back to Dashboard</Link>
        <button onClick={handleBookNow} className="button is-link is-pulled-right">Book Now</button>
        {message && (
          <div className={`notification ${messageType === 'success' ? 'is-success' : 'is-danger'}`}>
            {message}
            {messageType === 'success' && (
              <p>Redirecting to the dashboard in 5 seconds...</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;