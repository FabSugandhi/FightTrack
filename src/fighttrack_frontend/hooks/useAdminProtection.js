import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdminProtection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
      navigate('/dashboard'); // Redirect to dashboard page if user is not an admin
    }
  }, [navigate]);
};

export default useAdminProtection;