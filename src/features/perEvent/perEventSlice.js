import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const perEventSlice = createSlice({
    name:'perEvent',
    initialState,
    reducers:{
        // userInfo: (state, action) => {
        //     state.userInfo = action.payload;
        //   },
    }
})

export const {} = perEventSlice.actions;
export default perEventSlice.reducer;