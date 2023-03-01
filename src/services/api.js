import axios from 'axios';

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com/search/',
});

export const getRepos = async ({ repoName }) => {
  try {
    const { data, status } = await githubAPI.get(`repositories?q=${repoName}`);
    if (status !== 200) {
      throw new Error(`Failed to fetch weather data, status code: ${status}`);
    }
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
