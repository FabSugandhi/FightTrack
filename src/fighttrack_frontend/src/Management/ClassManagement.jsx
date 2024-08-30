import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard/ClassCalendar.css';

const ClassManagement = ({ onClassSelect }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();
  const lastDayOfMonth = new Date(year, currentDate.getMonth() + 1, 0).getDay(); // Day of the week the month ends on

  const [events, setEvents] = useState({});
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [newClass, setNewClass] = useState({
    title: '',
    description: '',
    schedule: { day: '', time: '' },
    maxAttendees: 0,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [classToDelete, setClassToDelete] = useState(null);

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

  // Add empty days to the end if the month doesn't end on a Saturday
  for (let i = lastDayOfMonth + 1; i < 7; i++) {
    days.push(null);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  const handleDeleteClick = (event, e) => {
    e.stopPropagation();
    setClassToDelete(event);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://fighttrack-abws.onrender.com/api/classes/${classToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete class');
      }

      // Remove the deleted class from the events state
      setEvents(prevEvents => {
        const updatedEvents = { ...prevEvents };
        const eventDay = new Date(classToDelete.schedule.day).getDate();
        updatedEvents[eventDay] = updatedEvents[eventDay].filter(e => e._id !== classToDelete._id);
        return updatedEvents;
      });
    } catch (error) {
      console.error('Error deleting class:', error);
    }
    setShowConfirmation(false);
    setClassToDelete(null);
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://fighttrack-abws.onrender.com/api/classes', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClass),
      });

      if (!response.ok) {
        throw new Error('Failed to add class');
      }

      const addedClass = await response.json();
      
      // Update the events state with the new class
      setEvents(prevEvents => {
        const newEvents = { ...prevEvents };
        const eventDay = new Date(addedClass.schedule.day).getDate();
        if (!newEvents[eventDay]) {
          newEvents[eventDay] = [];
        }
        newEvents[eventDay].push(addedClass);
        return newEvents;
      });

      setShowAddClassModal(false);
      setNewClass({ title: '', description: '', schedule: { day: '', time: '' }, maxAttendees: 0 });
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <button className="button is-primary mb-4" onClick={() => setShowAddClassModal(true)}>
          Add Class
        </button>
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
                        <button 
                          className="delete-button" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(event, e);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Class Modal */}
      {showAddClassModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setShowAddClassModal(false)}></div>
          <div className="modal-content">
            <div className="box">
              <h2 className="title is-4">Add New Class</h2>
              <form onSubmit={handleAddClass}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={newClass.title}
                      onChange={(e) => setNewClass({...newClass, title: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description (Optional)</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      value={newClass.description}
                      onChange={(e) => setNewClass({...newClass, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Day</label>
                  <div className="control">
                    <input
                      className="input"
                      type="date"
                      value={newClass.schedule.day}
                      onChange={(e) => setNewClass({...newClass, schedule: {...newClass.schedule, day: e.target.value}})}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time</label>
                  <div className="control">
                    <input
                      className="input"
                      type="time"
                      value={newClass.schedule.time}
                      onChange={(e) => setNewClass({...newClass, schedule: {...newClass.schedule, time: e.target.value}})}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Max Attendees</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      value={newClass.maxAttendees}
                      onChange={(e) => setNewClass({...newClass, maxAttendees: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-primary" type="submit">Add Class</button>
                  <button className="button is-light" type="button" onClick={() => setShowAddClassModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => setShowAddClassModal(false)}></button>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setShowConfirmation(false)}></div>
          <div className="modal-content">
            <div className="box">
              <h2 className="title is-4">Confirm Deletion</h2>
              <p>Are you sure you want to delete this class?</p>
              <div className="field">
                <button className="button is-danger" onClick={handleConfirmDelete}>Yes, Delete</button>
                <button className="button is-light" onClick={() => setShowConfirmation(false)}>Cancel</button>
              </div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={() => setShowConfirmation(false)}></button>
        </div>
      )}
    </section>
  );
};

export default ClassManagement;
