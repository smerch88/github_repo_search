import { useTheme } from '@mui/material';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from 'redux/repos/repos-selectors';
import { fetchGetRepos } from 'redux/repos/repos-operations';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  query: yup.string('Enter Name to Search').required('Name is Required'),
});

export const ReposSearchForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const repoName = {
        repoName: values.query,
      };
      console.log(repoName);
      dispatch(fetchGetRepos(repoName));
    },
  });

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
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            position: 'relative',
            backgroundColor: isLoading ? 'lightgrey' : undefined,
            minHeight: theme.spacing(6),
          }}
        >
          {isLoading ? (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
                color: 'rgba(255,255,255,0.5)',
              }}
            />
          ) : (
            'Submit'
          )}
        </Button>
      </Box>
    </>
  );
};
