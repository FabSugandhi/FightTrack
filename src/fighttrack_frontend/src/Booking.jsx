import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);

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
          </div>
        ) : (
          <p className="has-text-centered">No booking data available.</p>
        )}
        <Link to="/dashboard" className="button is-link">Back to Dashboard</Link>
      </div>
    </section>
  );
};

export default Booking;
