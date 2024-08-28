import React, { useState, useEffect } from 'react';

const ClassEditView = ({ classId }) => {
  const [classDetails, setClassDetails] = useState({
    title: '',
    maxAttendees: 0,
    currentAttendees: 0
  });
  const [users, setUsers] = useState([]);
  const [attendance, setAttendance] = useState({});

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

    fetchClassDetails();
    fetchUsers();
  }, [classId]);

  const handleAttendance = (userId, status) => {
    setAttendance(prevState => ({
      ...prevState,
      [userId]: status
    }));
  };

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

      {users.map(user => (
        <div key={user._id} className="box mb-3">
          <div className="columns is-mobile is-vcentered">
            <div className="column is-narrow">
              <span className="icon is-medium">
                <i className="fas fa-user-circle fa-2x"></i>
              </span>
            </div>
            <div className="column">
              <p className="is-size-5 has-text-weight-bold mb-1">{user.name}</p>
              <p className="is-size-6">
                {user.membershipType.charAt(0).toUpperCase() + user.membershipType.slice(1)} Membership
              </p>
            </div>
            <div className="column has-text-right">
              <button
                className={`button is-small mr-2 ${attendance[user._id] === 'present' ? 'is-success' : ''}`}
                onClick={() => handleAttendance(user._id, 'present')}
              >
                Present
              </button>
              <button
                className={`button is-small mr-2 ${attendance[user._id] === 'absent' ? 'is-danger' : ''}`}
                onClick={() => handleAttendance(user._id, 'absent')}
              >
                Absent
              </button>
              <button className="button is-small">X</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassEditView;

//have UI
//have routes
