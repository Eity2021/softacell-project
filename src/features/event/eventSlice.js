import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const eventSlice = createSlice({
    name:'event',
    initialState,
    reducers:{
        // userInfo: (state, action) => {
        //     state.userInfo = action.payload;
        //   },
    }
})

export const {} = eventSlice.actions;
export default eventSlice.reducer;