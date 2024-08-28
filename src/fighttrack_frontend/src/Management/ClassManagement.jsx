import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Dashboard/ClassCalendar.css'

const ClassManagement = ({ onClassSelect }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();

  const [events, setEvents] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://fighttrack-abws.onrender.com/api/classes/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        const filteredEvents = data.filter(event => {
          const eventDate = new Date(event.schedule.day);
          return eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear();
        });
        const organizedEvents = filteredEvents.reduce((acc, event) => {
          const eventDay = new Date(event.schedule.day).getDate();
          if (!acc[eventDay]) {
            acc[eventDay] = [];
          }
          acc[eventDay].push(event);
          return acc;
        }, {});
        setEvents(organizedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [currentDate]);

  // Generate an array representing the days of the current month
  const days = [...Array(daysInMonth).keys()].map(i => i + 1);

  // Add empty days to the start if the month doesn't start on a Sunday
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.unshift(null);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="calendar-header">
          <button className="arrow-button" onClick={handlePrevMonth}>&lt;</button>
          <h1 className="title has-text-centered">{month} {year}</h1>
          <button className="arrow-button" onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="columns is-multiline is-mobile calendar-grid">
          {/* Render day names */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="column has-text-centered has-background-light has-text-weight-bold">
              {day}
            </div>
          ))}
          {/* Render days */}
          {days.map((day, index) => (
            <div key={index} className="column has-text-centered">
              {day && (
                <div className="day-cell">
                  <p className="day-number">{day}</p>
                  {events[day] && events[day].map((event, i) => (
                    event.title === 'CLOSED' ? (
                      <div key={i} className="event closed">
                        <p className="event-title">{event.title}</p>
                      </div>
                    ) : (
                      <div
                        key={i}
                        className="event"
                        onClick={() => onClassSelect(event._id)}
                      >
                        <p className="event-title">{event.title}</p>
                        {event.schedule.time && <p className="event-time">{event.schedule.time}</p>}
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassManagement;