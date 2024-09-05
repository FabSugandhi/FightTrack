import React, { useState, useEffect } from 'react';

const ClassEditView = ({ classId }) => {
  const [classDetails, setClassDetails] = useState({
    title: '',
    maxAttendees: 0,
    currentAttendees: 0,
    startTime: '', // Add this line
    duration: 0    // Add this line
  });
  const [users, setUsers] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [bookings, setBookings] = useState([]); // Initialize as an empty array
  const [attendanceStatus, setAttendanceStatus] = useState({});

  const removeAttendee = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${classId}/attendees/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Remove the booking from the local state
      setBookings(prevBookings => prevBookings.filter(booking => booking.user._id !== userId));
      
      // Update class details
      setClassDetails(prevDetails => ({
        ...prevDetails,
        currentAttendees: prevDetails.currentAttendees - 1
      }));

    } catch (error) {
      console.error('Error removing attendee:', error);
    }
  };

  const handleAttendance = async (userId) => {
    // Immediately set the status to 'present'
    setAttendanceStatus(prev => ({ ...prev, [userId]: 'present' }));

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${classId}/attendance`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Attendance marked successfully');
    } catch (error) {
      console.error('Error marking attendance:', error);
      alert('Error marking attendance: ' + error.message);
      // Remove the attendance status if there's an error
      setAttendanceStatus(prev => {
        const newStatus = { ...prev };
        delete newStatus[userId];
        return newStatus;
      });
    }
  };

  const handleAbsentClick = (userId) => {
    // Only set to 'absent' if not already 'present'
    setAttendanceStatus(prev => {
      if (prev[userId] !== 'present') {
        return { ...prev, [userId]: 'absent' };
      }
      return prev;
    });
  };

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
            setBookings([]); // Set to emptyarray if no bookings
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

  // Add this function to format the time
  const formatClassTime = (startTime, duration) => {
    if (!startTime) return '';
    const time = new Date(startTime);
    const formattedTime = time.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${formattedTime} AEST (${duration}m)`;
  };

  return (
    <div className="container">
      <div className="columns is-mobile is-vcentered mb-4">
        <div className="column">
          <h1 className="title is-4">Class {classDetails.title} Attendees</h1>
          <p className="subtitle is-6">{formatClassTime(classDetails.startTime, classDetails.duration)}</p>
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
                  {booking.user.membershipType.charAt(0).toUpperCase() + booking.user.membershipType.slice(1)} Membership
                </p>
              </div>
              <div className="column has-text-right">
                <button
                  className={`button is-small mr-2 ${attendanceStatus[booking.user._id] === 'present' ? 'is-success' : ''}`}
                  onClick={() => handleAttendance(booking.user._id)}
                  disabled={attendanceStatus[booking.user._id] === 'present'}
                > 
                  Present
                </button>
                <button
                  className={`button is-small mr-2 ${attendanceStatus[booking.user._id] === 'absent' ? 'is-danger' : ''}`}
                  onClick={() => handleAbsentClick(booking.user._id)}
                  disabled={attendanceStatus[booking.user._id] === 'present'}
                >
                  Absent
                </button>
                <button 
                  className="button is-small"
                  onClick={() => removeAttendee(booking.user._id)}
                  title="Remove"
                >
                  X
                </button>
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