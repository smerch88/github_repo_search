import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAppTheme } from 'styles/theme';

import { Layout } from './Layout';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import('../pages/Home/Home'));
const SearchPage = lazy(() => import('../pages/Search/Search'));

export const App = () => {
  const theme = useAppTheme();

  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};
