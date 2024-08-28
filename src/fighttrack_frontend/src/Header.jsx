import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, [location]);

  const handleAuthClick = () => {
    setIsLoading(true);
    if (isAuthenticated) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate('/');
    } else {
      navigate('/login');
    }
    setIsLoading(false);
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <header className="mb-6" style={{ position: 'relative', paddingTop: '10px' }}>
      <div style={{ position: 'absolute', top: '10px', right: '20px', display: 'flex', gap: '10px' }}>
        {isAuthenticated && (
          <button
            className="button is-info"
            onClick={handleDashboardClick}
          >
            Dashboard
          </button>
        )}
        <button
          className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
          onClick={handleAuthClick}
          disabled={isLoading}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <h1 className="title is-size-3">South Side Boxing</h1>
        <p className="subtitle is-size-5">
          Powered by Fighttrack
        </p>
        <p>Health. Fitness. Strength. Balance.</p>
        <p className="mt-2">
          Call us today on
          <span className="has-text-weight-bold"> 0468 855 7999 </span>
          to start training!
        </p>
      </div>
    </header>
  );
};

export default Header;
