import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const role = sessionStorage.getItem('role');
  return role === 'Admin';
};

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const isAuth = useAuth();
  
  const isLoggedIn = !!sessionStorage.getItem('token');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (isAuth) {
    return element;
  }

  return <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
