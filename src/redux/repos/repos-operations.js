import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { getRepos } from 'services/api';

export const fetchGetRepos = createAsyncThunk(
  'repos/getRepos',
  async (repoName, thunkApi) => {
    try {
      console.log(repoName);
      const res = await getRepos(repoName);
      if (res.code === 'ERR_BAD_REQUEST') {
        throw new Error(
          `Failed to fetch data, status code: ${res.response.data.message}`
        );
      }
      Notify.success('OK');
      return res;
    } catch (error) {
      Notify.failure(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
