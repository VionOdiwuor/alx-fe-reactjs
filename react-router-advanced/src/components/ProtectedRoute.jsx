import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const useAuth = () => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
  
      useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(token !== null);
      }, []);
  
return isAuthenticated;
};
const isAuthenticated = useAuth();

  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;