import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoading(true);
    // Simulate a delay before navigation
    setTimeout(() => {
      navigate('/login');
      setIsLoading(false);
    }, 500);
  };

  return (
    <header className="mb-6" style={{ position: 'relative', paddingTop: '10px' }}>
      <button
        className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
        style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
        }}
        onClick={handleLoginClick}
        disabled={isLoading}
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