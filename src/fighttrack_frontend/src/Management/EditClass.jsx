import React, { useState, useEffect } from 'react';

const ClassEditView = ({ classId }) => {
  const [classDetails, setClassDetails] = useState(null);

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

    fetchClassDetails();
  }, [classId]);

  if (!classDetails) {
    return <div>Loading...</div>;
  }

  const handleAttendanceAction = async (userId, action) => {
    const token = localStorage.getItem('token');
    try {
      if (action === 'present') {
        const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${classId}/attendance`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId })
        });
        if (response.ok) {
          console.log('Attendance marked successfully');
          // Optionally update state to reflect the attendance change
        } else {
          console.error('Failed to mark attendance');
        }
      } else if (action === 'remove') {
        const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${classId}/attendees/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        if (response.ok) {
          console.log('Attendee removed successfully');
          // Optionally update state to reflect the removal
        } else {
          console.error('Failed to remove attendee');
        }
      }
    } catch (error) {
      console.error(`Error handling ${action} for user ID ${userId}:`, error);
    }
  };

  // Safely access classDetails.attendees with a fallback
  const attendees = classDetails.attendees || [];

  return (
    <div className="section">
      <h2 className="title is-4 has-text-light">Edit Class: {classDetails.title}</h2>

      {/* Attendees Section */}
      <div>
        <h3 className="title is-5 has-text-light">Class Attendees</h3>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input is-dark" type="text" placeholder="Search for new members..." />
            <span className="icon is-left">
              <i className="fas fa-search"></i>
            </span>
          </p>
        </div>
        <div className="box has-background-dark">
          <div className="columns">
            <div className="column">
              <p>Total students: {attendees.length}</p>
            </div>
            <div className="column has-text-right">
              <p>Active members: {attendees.filter(att => att.status === 'Active Membership').length}</p>
            </div>
          </div>
        </div>

        {attendees.map(attendee => (
          <div className="box" key={attendee.user._id}>
            <article className="media">
              <figure className="media-left">
                <p className="image is-48x48">
                  <i className="fas fa-user-circle fa-3x"></i>
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{attendee.user.name}</strong>
                    <br />
                    <small>{attendee.status}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <button 
                  className="button is-light is-small" 
                  onClick={() => handleAttendanceAction(attendee.user._id, 'present')}
                >
                  Present
                </button>
                <button 
                  className="button is-light is-small ml-2" 
                  onClick={() => handleAttendanceAction(attendee.user._id, 'absent')}
                >
                  Absent
                </button>
                <button 
                  className="button is-light is-small ml-2" 
                  onClick={() => handleAttendanceAction(attendee.user._id, 'remove')}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassEditView;
