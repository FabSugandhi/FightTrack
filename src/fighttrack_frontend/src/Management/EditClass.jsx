import React, { useState, useEffect } from 'react';

const ClassEditView = ({ classId }) => {
  const [classDetails, setClassDetails] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${classId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setClassDetails(data);
      } catch (error) {
        console.error('Error fetching class details:', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://fighttrack-abws.onrender.com/api/bookings/class/${classId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchClassDetails();
    fetchBookings();
  }, [classId]);

  if (!classDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Class: {classDetails.title}</h2>
      {/* Add form elements for editing class details */}
      <h3>Enrolled Students:</h3>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>{booking.userName} ({booking.userEmail}) - {booking.membershipType}</li>
          ))}
        </ul>
      ) : (
        <p>No students enrolled yet.</p>
      )}
    </div>
  );
};

export default ClassEditView;


//have UI
//have routes
