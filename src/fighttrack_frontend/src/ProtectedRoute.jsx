import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

// const ProtectedRoute = ({ children, adminOnly = false }) => {
//     const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
//     const userRole = localStorage.getItem("userRole");
  
//     if (!isAuthenticated) {
//       return <Navigate to="/login" />;
//     }
  
//     if (adminOnly && userRole !== "admin") {
//       return <Navigate to="/dashboard" />;
//     }
  
//     return children;
//   };
  
//   export default ProtectedRoute;