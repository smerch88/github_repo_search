import { createSlice } from '@reduxjs/toolkit';
import { fetchGetRepos } from './repos-operations';

const initialState = {
  repos: [],
  searchQuery: '',
  perPage: 3,
  sort: 'best-match',
  order: 'desc',
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
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
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
export const { setPerPage } = reposSlice.actions;
export const { setSort } = reposSlice.actions;
export const { setOrder } = reposSlice.actions;

export const reposReducer = reposSlice.reducer;
