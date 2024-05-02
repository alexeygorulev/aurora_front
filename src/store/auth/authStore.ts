import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fieldsLogin } from 'application/Auth/LogIn/constants';
import { IAuthInitialState, IHandleChangeArgs } from 'application/Auth/type';
import { isString } from 'utils/getType';

const initialState: IAuthInitialState = {
  mounted: false,
  data: {
    valuesLogin: {
      login: '',
      password: '',
    },
    touchedLoginFields: {
      login: false,
      password: false,
    },
  },
};

export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    mount: (state: IAuthInitialState): void => {
      state.mounted = true;
    },

    unmount: (state: IAuthInitialState): void => {
      state.mounted = false;
    },

    handleChange: (state, action: PayloadAction<IHandleChangeArgs>) => {
      const { id, value } = action.payload;
      switch (id) {
        case fieldsLogin.login:
        case fieldsLogin.password:
          if (isString(value)) state.data.valuesLogin[id] = value;
          break;
          // case fieldsLogin.consent:
          //   if (isBoolean(value)) state.data.valuesLogin.consent = value;
          break;
      }
    },

    handleBlur: (state, action: PayloadAction<IHandleChangeArgs>) => {
      const { id } = action.payload;
      if (!id) return;
      if (state.data.valuesLogin[id] !== null) state.data.touchedLoginFields[id] = true;
    },
  },
});

export const { mount, unmount, handleChange, handleBlur } = authSlice.actions;

export default authSlice.reducer;
