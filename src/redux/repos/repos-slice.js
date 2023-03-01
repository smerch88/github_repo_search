import { createSlice } from '@reduxjs/toolkit';
import { fetchGetRepos } from './repos-operations';

const initialState = {
  repos: [],
  isLoading: false,
  error: null,
};

const reposSlice = createSlice({
  name: 'repos',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchGetRepos.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGetRepos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.repos = action.payload;
      })
      .addCase(fetchGetRepos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const reposReducer = reposSlice.reducer;
