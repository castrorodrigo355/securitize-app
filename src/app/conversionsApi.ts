import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IConversion } from '../types/conversion.interface';

export const conversionsApi = createApi({
  reducerPath: 'conversions',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/conversions',
  }),
  tagTypes: ['conversions'],
  endpoints: (builder) => ({
    getConversions: builder.query<IConversion[], void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['conversions'],
    }),
  }),
});

export const { useGetConversionsQuery } = conversionsApi;
