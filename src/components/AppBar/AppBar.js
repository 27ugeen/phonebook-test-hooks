import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import ThemeSelector from '../ThemeSelector';
import withAuth from '../hoc/withAuth';
import PropTypes from 'prop-types';
import styles from './AppBar.module.css';

const { header, screenLeft } = styles;

const AppBar = ({ isLoggedIn, toggleTheme }) => (
  <header className={header}>
    <div className={screenLeft}>
      <ThemeSelector toggleTheme={toggleTheme} />
      <Navigation />
    </div>
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>
);

AppBar.propTypes = {
  isLoggedIn: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default withAuth(AppBar);
