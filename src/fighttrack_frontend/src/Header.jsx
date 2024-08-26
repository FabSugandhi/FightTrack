import React from 'react';

const Header = () => {
  return (
    <header className="mb-6" style={{ position: 'relative', paddingTop: '10px' }}>
      <button
        className="button is-primary"
        style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
        }}
      >
        Login
      </button>
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <h1 className="title is-size-3">FightTrack</h1>
        <p className="subtitle is-size-5">
          Health. Fitness. Strength. Balance.
        </p>
        <p className="mt-2">
          Call us today on
          <span className="has-text-weight-bold"> 1-800-000-0000 </span>
          to start getting fit!
        </p>
      </div>
    </header>
  );
};

export default Header;
