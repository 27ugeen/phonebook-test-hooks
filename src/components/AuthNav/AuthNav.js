import React from 'react';
import { NavLink } from 'react-router-dom';
import withTheme from '../hoc/withTheme';
import PropTypes from 'prop-types';
import styles from './AuthNav.module.css';

const { navList } = styles;

const AuthNav = ({ theme }) => {
  const {
    config: { navLink, navLinkActive },
  } = theme;
  return (
    <div className={navList}>
      <NavLink
        to="/register"
        exact
        className={navLink}
        activeClassName={navLinkActive}
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={navLink}
        activeClassName={navLinkActive}
      >
        Login
      </NavLink>
    </div>
  );
};

AuthNav.propTypes = {
  theme: PropTypes.shape({
    config: PropTypes.shape({
      navLink: PropTypes.string.isRequired,
      navLinkActive: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(AuthNav);
