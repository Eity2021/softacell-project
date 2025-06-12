import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/api/apiSlice';
import eventReducer from "../features/event/eventSlice";
export const store = configureStore({
  reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    event: eventReducer,
  },
    devTools: process.env.NODE_ENV  !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
