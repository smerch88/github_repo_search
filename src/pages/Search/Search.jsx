import { Container, Typography } from '@mui/material';

import { ReposList } from 'components/ReposList/ReposList';
import { ReposSearchForm } from 'components/ReposSearchForm/ReposSearchForm';

const Search = () => {
  return (
    <>
      <Container>
        <Typography variant="h2" component="h1" mb>
          Github Repo Search Page.
        </Typography>
        <ReposSearchForm />
        <ReposList />
      </Container>
    </>
  );
};

export default Search;
