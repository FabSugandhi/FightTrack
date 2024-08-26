import React from 'react';
import './Calendar.css'; // Import the CSS file for calendar styling

const Calendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, today.getMonth(), 1).getDay();

  // Sample events data
  const events = {
    5: [{ title: 'Boxing Class', time: '10:00 AM' }],
    12: [{ title: 'Sparring Session', time: '3:00 PM' }],
    18: [{ title: 'Open Gym', time: '8:00 AM' }, { title: 'Yoga', time: '5:00 PM' }],
    25: [{ title: 'Fighters Academy', time: '6:00 PM' }]
  };

  // Generate an array representing the days of the current month
  const days = [...Array(daysInMonth).keys()].map(i => i + 1);

  // Add empty days to the start if the month doesn't start on a Sunday
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.unshift(null);
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">{month} {year}</h1>
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
                <div>
                  <p>{day}</p>
                  {events[day] && events[day].map((event, i) => (
                    <div key={i} className="event">
                      <p className="event-title">{event.title}</p>
                      <p className="event-time">{event.time}</p>
                    </div>
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

export default Calendar;
