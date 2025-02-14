import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectSearchQuery = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchQuery],
  (contacts, searchQuery) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
