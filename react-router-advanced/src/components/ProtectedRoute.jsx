import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default ProtectedRoute;