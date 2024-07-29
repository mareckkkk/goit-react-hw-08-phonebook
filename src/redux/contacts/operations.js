import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (oneContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", oneContact);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (args, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${args.id}`, {
        name: args.name,
        number: args.number,
      });
      console.log(response.data);
      return args;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);
