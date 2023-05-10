import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAddress } from '../types/address.interface';

export const addressesApi = createApi({
  reducerPath: 'addresses',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/addresses',
  }),
  tagTypes: ['Addresses'],
  endpoints: (builder) => ({
    getAddresses: builder.query<IAddress[], void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['Addresses'],
    }),
    updateAddressTxById: builder.mutation<IAddress, string>({
      query: (id: string) => ({
        url: `/${id}/firstTx`,
        method: 'POST',
      }),
      invalidatesTags: ['Addresses'],
    }),
    toggleFavoriteAddressById: builder.mutation<IAddress, string>({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Addresses'],
    }),
  }),
});

export const {
  useGetAddressesQuery,
  useUpdateAddressTxByIdMutation,
  useToggleFavoriteAddressByIdMutation,
} = addressesApi;
