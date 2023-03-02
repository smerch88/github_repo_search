import { useState, useEffect } from 'react';
import { Box, Pagination, useMediaQuery, useTheme } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { fetchGetRepos } from 'redux/repos/repos-operations';
import {
  getPerPage,
  getRepos,
  getSearchQuery,
} from 'redux/repos/repos-selectors';

export const ReposPagination = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const searchQuery = useSelector(getSearchQuery);
  const perPage = useSelector(getPerPage);
  const repos = useSelector(getRepos);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (repos) {
      const { total_count: numberOfRepos } = repos;
      setNumberOfPages(Math.ceil(numberOfRepos / perPage));
    }
  }, [repos, perPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    dispatch(
      fetchGetRepos({ repoName: searchQuery, page: value, perPage: perPage })
    );
  };

  return (
    <>
      {numberOfPages > 0 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          }}
        >
          <Pagination
            count={numberOfPages}
            variant="outlined"
            onChange={handlePageChange}
            page={currentPage}
            siblingCount={isMobile ? 0 : 1}
          />
        </Box>
      )}
    </>
  );
};
