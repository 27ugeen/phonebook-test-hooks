import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import contatcsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const { input } = styles;

const ContactFilter = () => {
  const value = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();
  const onChangeFilter = ({ target }) =>
    dispatch(contatcsActions.changeFilter(target.value));

  return (
    <input
      className={input}
      type="text"
      placeholder="Search contacts by name*"
      value={value}
      onChange={onChangeFilter}
    />
  );
};

export default ContactFilter;

// const ContactFilter = ({ value, onChangeFilter }) => (
//   <input
//     className={input}
//     type="text"
//     placeholder="Search contacts by name*"
//     value={value}
//     onChange={({ target }) => onChangeFilter(target.value)}
//   />
// );

// ContactFilter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: contactsSelectors.getFilter(state),
// });

// export default connect(mapStateToProps, {
//   onChangeFilter: contatcsActions.changeFilter,
// })(ContactFilter);
