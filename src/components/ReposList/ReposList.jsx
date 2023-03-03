import { Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import { getRepos } from 'redux/repos/repos-selectors';
import { RepoCard } from './RepoCard';

export const ReposList = () => {
  const repos = useSelector(getRepos);
  const { items, total_count } = repos;

  return (
    <>
      {items && (
        <Typography variant="h4" component="h2" mb>
          List of repos: {total_count} in total.
        </Typography>
      )}
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
