import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedEventId: '',
};

const eventSlice = createSlice({
    name:'event',
    initialState,
    reducers:{
  setSelectedEventId: (state, action) => {
      state.selectedEventId = action.payload;
    },
    }
})

export const {setSelectedEventId } = eventSlice.actions;
export default eventSlice.reducer;