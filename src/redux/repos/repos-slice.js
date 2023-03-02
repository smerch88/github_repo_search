import { createSlice } from '@reduxjs/toolkit';
import { fetchGetRepos } from './repos-operations';

const initialState = {
  repos: [],
  searchQuery: '',
  isLoading: false,
  error: null,
};

const reposSlice = createSlice({
  name: 'repos',
  initialState: initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
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

export const { setSearchQuery } = reposSlice.actions;

export const reposReducer = reposSlice.reducer;
