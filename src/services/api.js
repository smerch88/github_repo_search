import axios from 'axios';

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com/search/',
});

export const getRepos = async ({ repoName, page = 1 }) => {
  try {
    const { data, status } = await githubAPI.get(
      `repositories?q=${repoName}&page=${page}`
    );
    if (status !== 200) {
      throw new Error(`Failed to fetch weather data, status code: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};
