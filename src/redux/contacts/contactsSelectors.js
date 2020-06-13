import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getContactsItems = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getFilteredContacts = createSelector(
  [getContactsItems, getFilter],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

const getContactById = createSelector(
  [(state, contactId) => contactId, getContactsItems],
  (contactId, items) => items.find(({ id }) => id === contactId),
);

export default {
  getFilter,
  getLoading,
  getError,
  getFilteredContacts,
  getContactById,
  getContactsItems,
};
