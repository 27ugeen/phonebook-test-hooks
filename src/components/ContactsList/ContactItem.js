import React from 'react';
import { LittleButton } from '../Button';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsListItem } = styles;

const ContactItem = ({ name, number, onDeleteContact }) => (
  <li className={contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <LittleButton
      type="submit"
      buttonLabel="Delete"
      onClick={onDeleteContact}
    />
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
