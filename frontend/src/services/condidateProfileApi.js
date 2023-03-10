import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const condidateProfileApi = createApi({
    reducerPath: "condidateProfileApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
    endpoints: (builder) => ({
        saveProfile: builder.mutation({
            query: (condidate) => {
                return {
                    url: "resume/",
                    method: "POST",
                    body: condidate,
                };
            },
        }),
        getResumeProfile: builder.query({
            query: () => {
                return {
                    url: "list/",
                    method: "GET",
                };
            },
        }),
    }),
});

export const { useSaveProfileMutation, useGetResumeProfileQuery } = condidateProfileApi;
