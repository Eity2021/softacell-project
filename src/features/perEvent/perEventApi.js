import { apiSlice } from "../api/apiSlice";

export const perEventApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getPerEvent:builder.query({
            query:(id) => `/events/user/${id}`
  
        })
    })
});

export const {useGetPerEventQuery} = perEventApi;



