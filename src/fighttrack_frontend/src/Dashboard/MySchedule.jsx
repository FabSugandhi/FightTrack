import React from 'react';

const MySchedule = () => {
  const schedule = [
    { date: 'Friday, Apr 26 2024', time: '6:00 pm AEST (45m)', title: 'CardioBox', location: 'Brisbane Boxing Mt Gravatt' },
    { date: 'Wednesday, Apr 24 2024', time: '7:00 pm AEST (45m)', title: 'CardioBox', location: 'Brisbane Boxing Mt Gravatt' },
    ];

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
