import { apiSlice } from "../api/apiSlice";

export const addEventApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addEvent: builder.mutation({
      query: (data) => ({
        url: "/events/user/",
        method: "POST",
        body: data,
      }),

    }),

  }),
});

export const { useAddEventMutation, } = addEventApi;
