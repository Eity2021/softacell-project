import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
  },
    devTools: process.env.NODE_ENV  !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
