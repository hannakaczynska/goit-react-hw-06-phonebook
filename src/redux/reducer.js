import { addContact, deleteContact, addFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactInitialState = [];

export const contactsReducer = createReducer(contactInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [addFilter]: (state, action) => {
    return action.payload;
  },
});
