import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const addEventSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},


  
});

export const {AddEvent} = addEventSlice.actions;
export default addEventSlice.reducer;
