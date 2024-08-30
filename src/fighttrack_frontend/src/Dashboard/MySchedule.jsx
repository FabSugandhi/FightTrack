import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MySchedule = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
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

  const now = new Date();

  const getFullDateTime = (day, time) => {
    const bookingDate = new Date(day);
    const [hours, minutes] = time.split(':');
    const period = time.split(' ')[1];
    let hours24 = parseInt(hours, 10);

    if (period === 'pm' && hours24 !== 12) {
      hours24 += 12;
    } else if (period === 'am' && hours24 === 12) {
      hours24 = 0;
    }

    bookingDate.setHours(hours24, parseInt(minutes, 10), 0, 0);
    return bookingDate;
  };

  // if "class": null, then the class has been deleted so we don't want to display it
  const filteredSchedule = schedule.filter(item => item.class !== null);
  // Filter out past bookings from upcoming bookings
  const upcomingBookings = filteredSchedule.filter(item => getFullDateTime(item.class.schedule.day, item.class.schedule.time) > now);
  const pastBookings = filteredSchedule.filter(item => getFullDateTime(item.class.schedule.day, item.class.schedule.time) <= now);
  // Sort bookings by date
  const bookingsToDisplay = activeTab === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <div>
      <h2 className="title is-3">My Schedule</h2>

      {/* Toggle */}
      <div className="tabs is-toggle is-fullwidth">
        <ul>
          <li className={activeTab === 'upcoming' ? 'is-active' : ''} onClick={() => setActiveTab('upcoming')}>
            <a>Upcoming</a>
          </li>
          <li className={activeTab === 'past' ? 'is-active' : ''} onClick={() => setActiveTab('past')}>
            <a>Past</a>
          </li>
        </ul>
      </div>

      {bookingsToDisplay.map((item, index) => (
        <Link key={index} to={`/booking/${item.class._id}`} className="box">
          <p className="has-text-grey-dark has-text-weight-semibold">
            Booking made on {new Date(item.bookingDate).toLocaleDateString()} at {new Date(item.bookingDate).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
          </p>
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title is-6 has-text-dark">{item.class.title}</p>
              <p className="subtitle is-6">{item.class.description}</p>
              <p className="has-text-grey">Location: {item.class.location}</p>
              <p className="has-text-grey">Schedule: {item.class.schedule.day} at {item.class.schedule.time}</p>
              <p className="has-text-grey">Status: {item.status}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MySchedule;