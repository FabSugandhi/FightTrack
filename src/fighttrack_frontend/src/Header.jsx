import React from 'react';

const Header = () => {
  return (
    <header className="has-text-centered mb-6">
      <h1 className="title is-size-3">FightTrack</h1>
      <p className="subtitle is-size-5">
        Health. Fitness. Strength. Balance.
      </p>
      <p className="mt-2">
        Call us today on
        <span className="has-text-weight-bold"> 1-800-000-0000 </span>
        to start getting fit!
      </p>
    </header>
  );
};

export default Header;
