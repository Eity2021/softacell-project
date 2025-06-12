import { apiSlice } from "../api/apiSlice";



export const eventApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getEvent:builder.query({
            query:() => '/events/user/'
  
        })
    })
});

export const {useGetEventQuery} = eventApi;



