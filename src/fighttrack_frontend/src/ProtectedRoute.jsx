import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("userRole");

  console.log("Protected Route - isAuthenticated:", isAuthenticated);
  console.log("Protected Route - userRole:", userRole);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && userRole !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
