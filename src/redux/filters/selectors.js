import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectSearchQuery } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchQuery],
  (contacts, searchQuery) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);
