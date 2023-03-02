import axios from 'axios';

const YOUR_GITHUB_API_KEY = process.env.REACT_APP_API_KEY;

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com/search/',
  ...(YOUR_GITHUB_API_KEY && {
    headers: {
      Authorization: `Bearer ${YOUR_GITHUB_API_KEY}`,
    },
  }),
});

export const getRepos = async ({
  repoName,
  sort = 'best-match',
  order = 'desc',
  perPage = 30,
  page = 1,
}) => {
  try {
    const { data, status } = await githubAPI.get(
      `repositories?q=${repoName}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`
    );
    if (status !== 200) {
      throw new Error(
        `Failed to fetch repository data, status code: ${status}`
      );
    }
    return data;
  } catch (error) {
    return error;
  }
};
