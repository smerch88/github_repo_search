import { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { fetchGetRepos } from 'redux/repos/repos-operations';
import { getRepos, getSearchQuery } from 'redux/repos/repos-selectors';

export const ReposPagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const searchQuery = useSelector(getSearchQuery);

  const repos = useSelector(getRepos);
  useEffect(() => {
    if (repos) {
      const { total_count: numberOfRepos } = repos;
      setNumberOfPages(Math.ceil(numberOfRepos / 30));
    }
  }, [repos]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    dispatch(fetchGetRepos({ repoName: searchQuery, page: value }));
  };

  return (
    <>
      <Pagination
        count={numberOfPages}
        variant="outlined"
        onChange={handlePageChange}
        page={currentPage}
      />
    </>
  );
};
