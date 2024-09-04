import React, { useState, useEffect } from 'react';

const ClassEditView = ({ classId }) => {
  const [classDetails, setClassDetails] = useState({
    title: '',
    maxAttendees: 0,
    currentAttendees: 0
  });
  const [users, setUsers] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [bookings, setBookings] = useState([]); // Initialize as an empty array

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

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://fighttrack-abws.onrender.com/api/auth/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
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
        if (!response.ok) {
          if (response.status === 404) {
            console.log('No bookings found for this class');
            setBookings([]); // Set to empty array if no bookings
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const data = await response.json();
          setBookings(Array.isArray(data) ? data : []); // Ensure bookings is always an array
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setBookings([]); // Set to empty array on error
      }
    };

    fetchClassDetails();
    fetchUsers();
    fetchBookings();
  }, [classId]);

  const handleAttendance = (userId, status) => {
    setAttendance(prevState => ({
      ...prevState,
      [userId]: status
    }));
  };

  const getUserNameById = (userId) => {
    const user = users.find(user => user._id === userId);
    return user ? user.name : 'Unknown User';
  };

  // Update the activeBookings calculation
  const activeBookings = Array.isArray(bookings) 
    ? bookings
        .filter(booking => booking.status === 'booked')
        .sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate))
    : [];

  return (
    <div className="container">
      <div className="columns is-mobile is-vcentered mb-4">
        <div className="column">
          <h1 className="title is-4">Class {classDetails.title} Attendees</h1>
        </div>
        <div className="column">
          <div className="field">
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="Search to add members..." />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="box has-background-dark mb-4">
        <div className="columns is-mobile">
          <div className="column">
            <p>Current Attendees: {classDetails.currentAttendees}</p>
          </div>
          <div className="column has-text-right">
            <p>Maximum Attendees: {classDetails.maxAttendees}</p>
          </div>
        </div>
      </div>

      {activeBookings.length > 0 ? (
        activeBookings.map(booking => (
          <div key={booking._id} className="box mb-3">
            <div className="columns is-mobile is-vcentered">
              <div className="column is-narrow">
                <span className="icon is-medium">
                  <i className="fas fa-user-circle fa-2x"></i>
                </span>
              </div>
              <div className="column">
                <p className="is-size-5 has-text-weight-bold mb-1">{booking.user.name}</p>
                <p className="is-size-6">
                  {/* {booking.user.membershipType.charAt(0).toUpperCase() + booking.user.membershipType.slice(1)} Membership */}
                </p>
              </div>
              <div className="column has-text-right">
                <button
                  className={`button is-small mr-2 ${attendance[booking.user._id] === 'present' ? 'is-success' : ''}`}
                  onClick={() => handleAttendance(booking.user._id, 'present')}
                >
                  Present
                </button>
                <button
                  className={`button is-small mr-2 ${attendance[booking.user._id] === 'absent' ? 'is-danger' : ''}`}
                  onClick={() => handleAttendance(booking.user._id, 'absent')}
                >
                  Absent
                </button>
                <button className="button is-small">X</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No active bookings for this class yet.</p>
      )}

    </div>
  );
};

export default ClassEditView;

// code for checking if the route works
// // <div className="box mb-4">
// <h2 className="title is-5">Bookings</h2>
// {activeBookings.map(booking => (
//   <div key={booking._id} className="box mb-3">
//     <p>User: {booking.user.name}</p> {/* Directly access user name */}
//     <p>Status: {booking.status}</p>
//     <p>Booking Date: {new Date(booking.bookingDate).toLocaleString()}</p>
//   </div>
// ))}
// </div>