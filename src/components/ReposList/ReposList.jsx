import { Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import { getRepos } from 'redux/repos/repos-selectors';
import { RepoCard } from './RepoCard';

export const ReposList = () => {
  const repos = useSelector(getRepos);
  const { items } = repos;
  console.log(items);

  return (
    <>
      <Typography variant="h3" component="h2">
        List of repos
      </Typography>
      <Grid container spacing={2}>
        {items &&
          items.map(item => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <RepoCard item={item} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};