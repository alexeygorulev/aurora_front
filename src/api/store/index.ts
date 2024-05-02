import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urls } from 'api/constants';
import { IApiUserDataLogin } from './types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/aurora-front-api'
        : 'https://aurora.ru/aurora-front-api',
  }),
  endpoints: (builder) => ({
    sendUserAuthData: builder.mutation({
      query: (data: IApiUserDataLogin) => ({
        url: urls.loginRequest,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

if (!apiSlice) {
  throw new Error('apiSlice is undefined');
}

export const { useSendUserAuthDataMutation } = apiSlice;