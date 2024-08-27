import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ClassCalendar.css'; // Import the CSS file for calendar styling

const Calendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, today.getMonth(), 1).getDay();

  // Sample events data organized by day of the week
  const events = {
    0: [{ title: 'CLOSED' }],
    1: [
      { title: 'Cardi Box', time: '5:00 - 5:45 AM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 AM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 AM' },
      { title: 'Fighters Academy', time: '4:00 PM' },
      { title: 'Cardi Box', time: '5:00 - 5:45 PM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 PM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 PM' }
    ],
    2: [
      { title: 'Cardi Box', time: '5:00 - 5:45 AM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 AM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 AM' },
      { title: 'Kids Boxing', time: '4:00 PM' },
      { title: 'Cardi Box', time: '5:00 - 5:45 PM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 PM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 PM' }
    ],
    3: [
      { title: 'Cardi Box', time: '5:00 - 5:45 AM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 AM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 AM' },
      { title: 'Fighters Academy', time: '4:00 PM' },
      { title: 'Cardi Box', time: '5:00 - 5:45 PM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 PM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 PM' }
    ],
    4: [
      { title: 'Cardi Box', time: '5:00 - 5:45 AM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 AM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 AM' },
      { title: 'Kids Boxing', time: '4:00 PM' },
      { title: 'Cardi Box', time: '5:00 - 5:45 PM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 PM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 PM' }
    ],
    5: [
      { title: 'Cardi Box', time: '5:00 - 5:45 AM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 AM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 AM' },
      { title: 'Kids Boxing', time: '4:00 PM' },
      { title: 'Cardi Box', time: '5:00 - 5:45 PM' },
      { title: 'Cardi Box', time: '6:00 - 6:45 PM' }
    ],
    6: [
      { title: 'Cardi Box', time: '6:00 - 6:45 AM' },
      { title: 'Cardi Box', time: '7:00 - 7:45 AM' },
      { title: 'Cardi Box', time: '8:00 - 8:45 AM' }
    ]
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
                <div className="day-cell">
                  <p className="day-number">{day}</p>
                  {events[index % 7] && events[index % 7].map((event, i) => (
                    event.title === 'CLOSED' ? (
                      <div key={i} className="event closed">
                        <p className="event-title">{event.title}</p>
                      </div>
                    ) : (
                      <Link
                        key={i}
                        to={`/booking/${day}/${event.title.replace(/\s+/g, '-').toLowerCase()}`}
                        className="event"
                      >
                        <p className="event-title">{event.title}</p>
                        {event.time && <p className="event-time">{event.time}</p>}
                      </Link>
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

export default Calendar;
