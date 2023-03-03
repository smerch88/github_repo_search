/* eslint-disable no-unused-vars */
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
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  sort: yup.string('Choose Sort Parameters'),
  order: yup.string('Choose Order'),
});

export const ReposSearchForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const isLoading = useSelector(getIsLoading);
  const searchQuery = useSelector(getSearchQuery);
  const perPage = useSelector(getPerPage);
  const sort = useSelector(getSort);
  const order = useSelector(getOrder);
  const language = useSelector(getLanguage);

  const [params, setParams] = useSearchParams();

  const savedQuery = params.get('repoName') ?? searchQuery;
  const savedPerPage = params.get('perPage') ?? perPage;
  const savedLanguage = params.get('language') ?? language;
  const savedSort = params.get('sort') ?? sort;
  const savedOrder = params.get('order') ?? order;
  const savedSearchParams = {
    repoName: savedQuery,
    perPage: savedPerPage,
    language: savedLanguage,
    sort: savedSort,
    order: savedOrder,
  };
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  useEffect(() => {
    if (savedQuery) {
      dispatch(fetchGetRepos(savedSearchParams));

      dispatch(setSearchQuery(savedSearchParams.query));
      dispatch(setPerPage(savedSearchParams.perPage));
      dispatch(setLanguage(savedSearchParams.language));
      dispatch(setSort(savedSearchParams.sort));
      dispatch(setOrder(savedSearchParams.order));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      query: savedQuery ?? searchQuery,
      perPage: savedPerPage ?? perPage,
      language: savedLanguage ?? language,
      sort: savedSort ?? sort,
      order: savedOrder ?? order,
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

      setParams({
        repoName: values.query,
        perPage: values.perPage,
        language: values.language,
        sort: values.sort,
        order: values.order,
      });
    },
  });

  const menuItemsParams = [
    { value: 'best-match', text: 'Best Match' },
    { value: 'stars', text: 'Stars' },
    { value: 'forks', text: 'Forks' },
    { value: 'updated', text: 'Updated' },
    { value: 'help-wanted-issues', text: 'Help Wanted Issues' },
  ];

  const menuItemsOrder = [
    { value: 'asc', text: 'Ascending' },
    { value: 'desc', text: 'Descending' },
  ];

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
            <InputLabel id="sort-label">Sorting Parameters</InputLabel>
            <Select
              label="Sorting Parameters"
              labelId="sort-label"
              id="sort"
              name="sort"
              value={formik.values.sort}
              onChange={formik.handleChange}
              error={formik.touched.sort && Boolean(formik.errors.sort)}
            >
              {menuItemsParams.map(item => (
                <MenuItem key={item.value} value={item.value}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {showAdvancedOptions && (
          <FormControl fullWidth sx={{ marginBottom: theme.spacing(1) }}>
            <InputLabel id="order-label">Sorting Order</InputLabel>
            <Select
              label="Sorting Order"
              labelId="order-label"
              id="order"
              name="order"
              value={formik.values.order}
              onChange={formik.handleChange}
              error={formik.touched.order && Boolean(formik.errors.order)}
            >
              {menuItemsOrder.map(item => (
                <MenuItem key={item.value} value={item.value}>
                  {item.text}
                </MenuItem>
              ))}
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
