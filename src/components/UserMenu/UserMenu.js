import React from 'react';
import Spinner from '../Spinner';
import { LittleButton } from '../Button';
import withAuth from '../hoc/withAuth';
import PropTypes from 'prop-types';
import styles from './UserMenu.module.css';

const { container, userAvatar, userName } = styles;

const UserMenu = ({ avatar, name, isLoading, onLogout }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <div className={container}>
        <img src={avatar} alt="" width="50" className={userAvatar} />
        <span className={userName}>Welcome, {name}</span>
        <LittleButton type="button" buttonLabel="Logout" onClick={onLogout} />
      </div>
    )}
  </>
);

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default withAuth(UserMenu);
