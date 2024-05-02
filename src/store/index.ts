import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authStore';
import { apiSlice } from 'api/store';

export const createReduxStore = () =>
  configureStore({
    reducer: {
      authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
