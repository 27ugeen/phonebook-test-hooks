import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const deleteContact = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const addContact = (state, { payload }) => [...state, payload];

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.deleteContactSuccess]: deleteContact,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
  [contactsActions.deleteContactSuccess]: () => '',
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const addError = (state, action) => action.payload;

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: addError,
  [contactsActions.addContactError]: addError,
  [contactsActions.deleteContactError]: addError,
});

export default combineReducers({
  items,
  loading,
  filter,
  error,
});
