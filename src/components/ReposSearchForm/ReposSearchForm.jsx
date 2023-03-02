import { useTheme } from '@mui/material';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  getIsLoading,
  getLanguage,
  getOrder,
  getPerPage,
  getSearchQuery,
  getSort,
} from 'redux/repos/repos-selectors';
import { fetchGetRepos } from 'redux/repos/repos-operations';
import {
  setPerPage,
  setSearchQuery,
  setSort,
  setOrder,
  setLanguage,
} from 'redux/repos/repos-slice';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  query: yup.string('Enter Name to Search').required('Name is Required'),
  perPage: yup.number('Enter Repos per Page'),
  language: yup.string('Enter Programming Language'),
  sort: yup.string('Choose Sort Order'),
  order: yup.string('Choose Order'),
});

export const ReposSearchForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const isLoading = useSelector(getIsLoading);
  const searchQuery = useSelector(getSearchQuery);
  const perPage = useSelector(getPerPage);
  const sort = useSelector(getSort);
  const order = useSelector(getOrder);
  const language = useSelector(getLanguage);

  const formik = useFormik({
    initialValues: {
      query: searchQuery,
      perPage: perPage,
      language: language,
      sort: sort,
      order: order,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const repoName = {
        repoName: values.query,
        perPage: values.perPage,
        language: values.language,
        sort: values.sort,
        order: values.order,
      };
      dispatch(fetchGetRepos(repoName));
      dispatch(setSearchQuery(values.query));
      dispatch(setPerPage(values.perPage));
      dispatch(setLanguage(values.language));
      dispatch(setSort(values.sort));
      dispatch(setOrder(values.order));
    },
  });

  const handleToggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          gap: 1,
        }}
      >
        <TextField
          sx={{ marginBottom: theme.spacing(1) }}
          fullWidth
          id="query"
          name="query"
          label="What do you want to find?"
          value={formik.values.query}
          onChange={formik.handleChange}
          error={formik.touched.query && Boolean(formik.errors.query)}
          helperText={formik.touched.query && formik.errors.query}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleToggleAdvancedOptions}
          sx={{ marginBottom: theme.spacing(1) }}
        >
          {showAdvancedOptions
            ? 'Hide advanced options'
            : 'Show advanced options'}
        </Button>
        {showAdvancedOptions && (
          <TextField
            sx={{ marginBottom: theme.spacing(1) }}
            fullWidth
            id="perPage"
            name="perPage"
            label="Repos per Page"
            value={formik.values.perPage}
            onChange={formik.handleChange}
            error={formik.touched.perPage && Boolean(formik.errors.perPage)}
            helperText={formik.touched.perPage && formik.errors.perPage}
          />
        )}
        {showAdvancedOptions && (
          <TextField
            sx={{ marginBottom: theme.spacing(1) }}
            fullWidth
            id="language"
            name="language"
            label="Programming Language"
            value={formik.values.language}
            onChange={formik.handleChange}
            error={formik.touched.language && Boolean(formik.errors.language)}
            helperText={formik.touched.language && formik.errors.language}
          />
        )}
        {showAdvancedOptions && (
          <FormControl fullWidth sx={{ marginBottom: theme.spacing(1) }}>
            <InputLabel id="sort-label">Sort Order</InputLabel>
            <Select
              labelId="sort-label"
              id="sort"
              name="sort"
              value={formik.values.sort}
              onChange={formik.handleChange}
              error={formik.touched.sort && Boolean(formik.errors.sort)}
            >
              <MenuItem value={'best-match'}>Best Match</MenuItem>
              <MenuItem value={'stars'}>Stars</MenuItem>
              <MenuItem value={'forks'}>Forks</MenuItem>
              <MenuItem value={'updated'}>Updated</MenuItem>
              <MenuItem value={'help-wanted-issues'}>
                Help Wanted Issues
              </MenuItem>
            </Select>
          </FormControl>
        )}
        {showAdvancedOptions && (
          <FormControl fullWidth sx={{ marginBottom: theme.spacing(1) }}>
            <InputLabel id="order-label">Order</InputLabel>
            <Select
              labelId="order-label"
              id="order"
              name="order"
              value={formik.values.order}
              onChange={formik.handleChange}
              error={formik.touched.order && Boolean(formik.errors.order)}
            >
              <MenuItem value={'asc'}>Ascending</MenuItem>
              <MenuItem value={'desc'}>Descending</MenuItem>
            </Select>
          </FormControl>
        )}
        <Button
          fullWidth
          sx={{ marginBottom: theme.spacing(1) }}
          variant="contained"
          color="primary"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? <CircularProgress size={24} /> : 'Search'}
        </Button>
      </Box>
    </>
  );
};
