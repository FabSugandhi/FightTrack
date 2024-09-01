import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // admin check
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const userRole = localStorage.getItem("userRole"); // Retrieve user role
    setIsAuthenticated(authStatus === "true");
    setIsAdmin(userRole === "admin"); // Set admin status
  }, [location]);

  const handleAuthClick = () => {
    setIsLoading(true);
    if (isAuthenticated) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      localStorage.removeItem("userRole"); // Remove user role on logout
      setIsAuthenticated(false);
      setIsAdmin(false); // Reset admin status
      navigate('/');
    } else {
      navigate('/login');
    }
    setIsLoading(false);
  };

  const handleDashboardClick = () => {
    if (isAdmin) {
      navigate('/management'); // Navigate to management if admin
    } else {
      navigate('/dashboard'); // Navigate to dashboard if not admin
    }
  };

  return (
    <header className="mb-6" style={{ position: 'relative', paddingTop: '10px' }}>
      <div style={{ position: 'absolute', top: '10px', right: '20px', display: 'flex', gap: '10px' }}>
        {isAuthenticated && (
          <button
            className="button is-info"
            onClick={handleDashboardClick}
          >
            {isAdmin ? 'Admin Dashboard' : 'Dashboard'} 
          </button>
        )}
        <button
          className={`button ${isAuthenticated ? 'is-danger' : 'is-primary'} ${isLoading ? 'is-loading' : ''}`} // Add conditional class
          onClick={handleAuthClick}
          disabled={isLoading}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </div>
      <div className="header-content" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <h1 className="title is-size-4-mobile is-size-3-tablet" style={{ marginTop: '2rem' }}>
          South Side Boxing
        </h1>
        <p className="subtitle is-size-6-mobile is-size-5-tablet">
          Powered by Fighttrack.xyz
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
