import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Add this line to check the value
console.log("API Base URL from .env:", process.env.REACT_APP_API_URL);

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:'http://147.182.165.199:9000',

  }),
  tagTypes: [], 
  endpoints: (builder) => ({}),
});