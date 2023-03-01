import { Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import { getRepos } from 'redux/repos/repos-selectors';

export const ReposList = () => {
  const repos = useSelector(getRepos);

  console.log(repos);

  const { items } = repos;

  if (!repos) {
    return (
      <Typography variant="h3" component="h2">
        No repositories found.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h3" component="h2">
        List of repos
      </Typography>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <a href={item.html_url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
