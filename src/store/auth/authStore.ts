import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fieldsLogin } from 'application/Auth/LogIn/constants';
import { fieldsSignUp, rolesList } from 'application/Auth/SignUp/constants';
import { IAuthInitialState, IHandleChangeArgsLogin, IHandleChangeArgsRegistration, Step } from 'application/Auth/type';
import { isBoolean, isString } from 'utils/getType';
import { isStep } from 'utils/helpers';

const initialState: IAuthInitialState = {
  mounted: false,
  step: Step.Login,
  data: {
    valuesLogin: {
      login: '',
      password: '',
    },
    touchedLoginFields: {
      login: false,
      password: false,
    },
    valuesRegistration: {
      email: '',
      login: '',
      password: '',
      last_name: '',
      first_name: '',
      repeat_password: '',
      role: 'User',
      consent: false,
    },
    touchedRegistrationFields: {
      email: false,
      login: false,
      password: false,
      last_name: false,
      first_name: false,
      repeat_password: false,
      role: true,
      consent: false,
    },
  },
};

export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    mount: (state: IAuthInitialState): void => {
      const item = localStorage.getItem('step');
      const step: Step | null = item && isStep(item) ? item : null;
      if (step) state.step = step;
      state.mounted = true;
    },

    unmount: (state: IAuthInitialState): void => {
      state.mounted = false;
    },

    changeStep: (state: IAuthInitialState, action: PayloadAction<Step>) => {
      window.scrollTo(0, 0);
      state.step = action.payload;
      localStorage.setItem('step', action.payload);
      state.data = initialState.data;
    },

    handleChangeLogin: (state, action: PayloadAction<IHandleChangeArgsLogin>): void => {
      const { id, value } = action.payload;

      switch (id) {
        case fieldsLogin.login:
        case fieldsLogin.password:
          if (isString(value)) state.data.valuesLogin[id] = value;
          break;
      }
    },

    checkFieldsByError: (state: IAuthInitialState, action: PayloadAction<Step>): void => {
      if (action.payload === Step.Login) state.data.touchedLoginFields = { login: true, password: true };
      if (action.payload === Step.Registration)
        state.data.touchedRegistrationFields = {
          email: true,
          login: true,
          password: true,
          first_name: true,
          last_name: true,
          repeat_password: true,
          role: true,
          consent: true,
        };
    },

    handleChangeRegistration: (state, action: PayloadAction<IHandleChangeArgsRegistration>): void => {
      const { id, value } = action.payload;
      if (rolesList.includes(id)) state.data.valuesRegistration.role = id;

      switch (id) {
        case fieldsSignUp.email:
        case fieldsSignUp.login:
        case fieldsSignUp.first_name:
        case fieldsSignUp.last_name:
        case fieldsSignUp.password:
        case fieldsSignUp.repeat_password:
        case fieldsSignUp.role:
          if (isString(value)) state.data.valuesRegistration[id] = value;
          break;
        case fieldsSignUp.consent:
          if (isBoolean(value)) state.data.valuesRegistration.consent = value;
          break;
        default:
          break;
      }
    },

    handleBlurLogin: (state, action: PayloadAction<IHandleChangeArgsLogin>): void => {
      const { id } = action.payload;
      if (!id) return;
      if (state.data.valuesLogin[id] !== null) state.data.touchedLoginFields[id] = true;
    },

    handleBlurRegistration: (state, action: PayloadAction<IHandleChangeArgsRegistration>): void => {
      const { id } = action.payload;
      if (!id) return;

      if (state.data.valuesRegistration[id] !== null) state.data.touchedRegistrationFields[id] = true;
    },
  },
});

export const {
  mount,
  unmount,
  handleChangeLogin,
  handleChangeRegistration,
  handleBlurLogin,
  handleBlurRegistration,
  changeStep,
  checkFieldsByError,
} = authSlice.actions;

export default authSlice.reducer;
