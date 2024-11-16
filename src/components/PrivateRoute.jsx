import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = () => {
  const { user } = useContext(UserContext);
  // Redirect to login if user is not authenticated
  return user ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoute;