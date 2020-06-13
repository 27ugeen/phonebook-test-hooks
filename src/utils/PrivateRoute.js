import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../components/hoc/withAuth';

const PrivateRoute = ({ component: Component, isLoggedIn, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default withAuth(PrivateRoute);
