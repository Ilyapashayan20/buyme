import { FC } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute :FC <any> = ({ element: Element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('userData') !== null;

  return isLoggedIn ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoute;
