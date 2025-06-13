import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import eventReducer from "../features/event/eventSlice";
import perEventReducer from "../features/perEvent/perEventSlice";
export const store = configureStore({
  reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    event: eventReducer,
    perEvent: perEventReducer,
  },
    devTools: process.env.NODE_ENV  !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
