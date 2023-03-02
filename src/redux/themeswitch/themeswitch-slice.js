import { createSlice } from '@reduxjs/toolkit';

const initalState = { mode: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState: initalState,
  reducers: {
    switchToDarkMode: state => {
      state.mode = 'dark';
    },
    switchToLightMode: state => {
      state.mode = 'light';
    },
  },
});

export const { switchToDarkMode } = themeSlice.actions;
export const { switchToLightMode } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
