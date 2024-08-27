import React from "react";



const AvailableClassesCard = () => {
    const classes = [
      'Cardi Box',
      'Fighters Academy',
      'Kids Boxing',
      'Open Gym Pass',
    ];
  
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2 className="title is-4 mb-2">Available Classes</h2>
            <p className="subtitle is-6">
              Book your next session:
            </p>
            {classes.map((className, index) => (
              <div key={index} className="box">
              <div className="columns is-vcentered is-mobile">
                <div className="column">
                  <p>{className}</p>
                </div>
                <div className="column is-narrow">
                  <button className="button is-dark">Book</button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AvailableClassesCard;