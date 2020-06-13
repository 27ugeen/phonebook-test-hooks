import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../components/hoc/withAuth';

const PublicRoute = ({ component: Component, isLoggedIn, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isLoggedIn && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default withAuth(PublicRoute);
