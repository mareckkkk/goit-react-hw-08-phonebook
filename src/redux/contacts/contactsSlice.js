import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContactsThunk,
} from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    allContact: [],
    isLoading: false,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.err = null;
        state.allContact = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allContact.push(action.payload);
        state.err = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.allContact.findIndex(
          (contact) => contact.id === action.payload,
        );
        state.allContact.splice(idx, 1);
        state.err = null;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.allContact.findIndex(
          (contact) => contact.id === action.payload.id,
        );
        state.allContact.splice(idx, 1, action.payload);
        state.err = null;
      })
      // here are scaling pending and rejected action ↓
      // .addMatcher((action)=>HAS to return similar action type,(state,action)=>{reducer operations with store,state 'PURE mutate functions'})
      .addMatcher(
        (action) =>
          action.type.startsWith("contacts") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("contacts") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.err = action.payload;
        },
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
