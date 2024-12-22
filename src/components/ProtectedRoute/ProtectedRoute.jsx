import React from 'react'
import { isAuthenticated } from '../../utils/authCheck'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let { user } = isAuthenticated();
  return user ? children : <Navigate to={'/login'}></Navigate>;
}

export default ProtectedRoute
