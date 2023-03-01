import { createTheme } from '@mui/material';

export const theme = createTheme();

theme.components.MuiCssBaseline = {
  styleOverrides: `
   #root: {
    flexGrow: 1,
  }
  @media screen and (min-width: 320px) {
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.5);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
  }
`,
};
