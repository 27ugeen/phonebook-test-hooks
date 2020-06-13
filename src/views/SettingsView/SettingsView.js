import React from 'react';
import Section from '../../components/Section';
import { LittleButton } from '../../components/Button';
import withAuth from '../../components/hoc/withAuth';
import PropTypes from 'prop-types';
import styles from './SettingsView.module.css';

const { userList, userListItem } = styles;

const SettingsView = ({ name, email, avatar, onDeleteAccount }) => (
  <>
    <Section title="Settings page">
      <h2>Welcome, {name}</h2>
      <p>Information about you:</p>
      <ul className={userList}>
        <li className={userListItem}>
          <span>User name: </span>
          {name}
        </li>
        <li className={userListItem}>
          <span>User avatar: </span>
          <img src={avatar} alt="" width="32" />
        </li>
        <li className={userListItem}>
          <span>User email: </span>
          {email}
        </li>
      </ul>
      <p>
        Delete your account:{' '}
        <LittleButton
          type="button"
          buttonLabel="Delete Account"
          onClick={onDeleteAccount}
        />
      </p>
    </Section>
  </>
);

SettingsView.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onDeleteAccount: PropTypes.func.isRequired,
};

export default withAuth(SettingsView);
