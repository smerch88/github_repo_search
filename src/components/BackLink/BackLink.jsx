import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

export const BackLink = ({ to, children }) => {
  return (
    <Button component={Link} to={to}>
      {children}
    </Button>
  );
};
