import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urls } from 'api/constants';
import {
  CombinedResetPasswordData,
  IApiUserDataLogin,
  IApiUserDataRecoverPassword,
  IApiUserDataRegistration,
} from './types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/aurora-front-api'
        : 'https://aurora.ru/aurora-front-api',
  }),
  endpoints: (builder) => ({
    sendUserAuthDataLogin: builder.mutation({
      query: (data: IApiUserDataLogin) => ({
        url: urls.loginRequest,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),

    sendUserAuthDataRegistration: builder.mutation({
      query: (data: IApiUserDataRegistration) => ({
        url: urls.registrationRequest,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),

    sendUserAuthDataRecoverPassword: builder.mutation({
      query: (data: IApiUserDataRecoverPassword) => ({
        url: urls.sendRecoverPassword,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),

    sendUserAuthDataResetPassword: builder.mutation<void, CombinedResetPasswordData>({
      query: ({ data, params }) => ({
        url: urls.sendResetPassword,
        method: 'POST',
        body: data,
        params,
      }),
    }),

    getUserProfileData: builder.query<any, void>({
      query: () => ({
        url: urls.userProfile,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

if (!apiSlice) {
  throw new Error('apiSlice is undefined');
}

export const {
  useSendUserAuthDataLoginMutation,
  useSendUserAuthDataRegistrationMutation,
  useSendUserAuthDataRecoverPasswordMutation,
  useSendUserAuthDataResetPasswordMutation,
  useGetUserProfileDataQuery,
} = apiSlice;
