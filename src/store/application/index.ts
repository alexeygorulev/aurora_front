import { createSlice } from '@reduxjs/toolkit';

export interface IApplicationInitialState {
  mounted: boolean;
}

const initialState: IApplicationInitialState = {
  mounted: false,
};

export const applicationSlice = createSlice({
  name: 'applicationReducer',
  initialState,
  reducers: {
    mount: (state: IApplicationInitialState): void => {
      state.mounted = true;
    },

    unmount: (state: IApplicationInitialState): void => {
      state.mounted = false;
    },
  },
});

export const { mount, unmount } = applicationSlice.actions;

export default applicationSlice.reducer;
