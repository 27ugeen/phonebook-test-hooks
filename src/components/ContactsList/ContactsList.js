import React from 'react';
import ContactItem from './ContactItemContainer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsList } = styles;

const ContactsList = ({ contacts }) => (
  <TransitionGroup component="ul" className={contactsList}>
    {contacts.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <ContactItem id={id} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactsList;
