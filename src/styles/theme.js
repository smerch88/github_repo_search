import { createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTheme } from 'redux/themeswitch/themeswitch-selectors';

export const useAppTheme = () => {
  const mode = useSelector(getTheme);

  const palette = {
    primary: {
      50: '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0',
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C',
    },
  };

  if (mode === 'dark') {
    palette.mode = 'dark';
    palette.primary = {
      ...palette.primary,
      50: '#d8c8e0',
      100: '#bda5c6',
      200: '#a27faa',
      300: '#875c8f',
      400: '#753f7b',
      500: '#622563',
      600: '#591e5a',
      700: '#4f1a50',
      800: '#451646',
      900: '#320f32',
    };
  } else {
    palette.mode = 'light';
  }

  return createTheme({
    palette: palette,
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          #root: {
            flexGrow: 1;
          }
          a:{
            color: currentColor;
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
      },
    },
  });
};
