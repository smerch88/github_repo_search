import * as yup from 'yup';

export const validationSchema = yup.object({
  query: yup.string('Enter Name to Search').required('Name is Required'),
  perPage: yup.number('Enter Repos per Page'),
  sort: yup.number('Enter Repos per Page'),
  order: yup.number('Enter Repos per Page'),
});
