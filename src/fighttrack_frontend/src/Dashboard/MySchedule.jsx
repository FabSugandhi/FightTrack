import React, { useEffect, useState } from 'react';

const MySchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('No token found');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://fighttrack-abws.onrender.com/api/bookings/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 404) {
        setError('No bookings found, add a booking to see your schedule');
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Error: Network response was not ok');
      }

      const data = await response.json();
      setSchedule(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

if (loading) {
  return <div>Loading...</div>;
}

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 className="title is-3">My Schedule</h2>

      {/* Toggl */}
      <div className="tabs is-toggle is-fullwidth">
        <ul>
          <li className="is-active">
            <a>Upcoming</a>
          </li>
          <li>
            <a>Past</a>
          </li>
        </ul>
      </div>

      {schedule.map((item, index) => (
        <div key={index} className="box">
          <p className="has-text-grey-dark has-text-weight-semibold">{item.date}</p>
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title is-6 has-text-dark">{item.time}</p>
              <p className="subtitle is-6">{item.title}</p>
              <p className="has-text-grey">{item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySchedule;