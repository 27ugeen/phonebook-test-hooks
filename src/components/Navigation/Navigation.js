import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import withAuth from '../hoc/withAuth';
import withTheme from '../hoc/withTheme';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

const { navList } = styles;

const Navigation = ({ isLoggedIn, theme }) => (
  <div className={navList}>
    {routes.map(
      ({ privateRoute, restricted, label, path, exact }) =>
        (!isLoggedIn && !privateRoute && !restricted && (
          <NavLink
            key={label}
            to={path}
            exact={exact}
            className={theme.config.navLink}
            activeClassName={theme.config.navLinkActive}
          >
            {label}
          </NavLink>
        )) ||
        (isLoggedIn && !restricted && (
          <NavLink
            key={label}
            to={path}
            exact={exact}
            className={theme.config.navLink}
            activeClassName={theme.config.navLinkActive}
          >
            {label}
          </NavLink>
        )),
    )}
  </div>
);

Navigation.propTypes = {
  isLoggedIn: PropTypes.string,
  theme: PropTypes.shape({
    config: PropTypes.shape({
      navLink: PropTypes.string.isRequired,
      navLinkActive: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withAuth(withTheme(Navigation));
