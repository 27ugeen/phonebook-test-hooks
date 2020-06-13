import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const { notification } = styles;

const Notification = ({ message }) => (
  <div className={notification}>
    <span>{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
