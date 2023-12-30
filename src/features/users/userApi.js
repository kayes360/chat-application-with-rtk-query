import { apiSlice } from "../api/apiSlice";
export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => {
        
        return `/users?email=${email}`;
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
