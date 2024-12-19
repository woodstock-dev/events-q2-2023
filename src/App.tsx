import { Outlet, Route, Routes } from 'react-router-dom';
import * as React from 'react';

import Header from './components/header';
import Footer from './components/footer';

import { Box } from '@mui/material';
/**Localization provider and adapter for date component library */
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import CssBaseline from '@mui/material/CssBaseline';
import RequireAuth from './components/requireAuth';
/**
 * Lazy loading pages with React lazy
 */

const LoginPage = React.lazy(() => import('./pages/login'));
const AddEventsPage = React.lazy(() => import('./pages/addEvents'));
const EventListPage = React.lazy(() => import('./pages/eventList'));

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CssBaseline />

      <React.Suspense>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LoginPage />}></Route>
            <Route
              path='/events/*'
              element={
                <RequireAuth>
                  <EventListPage />
                </RequireAuth>
              }
            ></Route>
          </Route>
        </Routes>
      </React.Suspense>
    </LocalizationProvider>
  );
}

const Layout = () => {
  return (
    <Box
      sx={{
        m: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <main>
        <Box
          sx={{
            flexGrow: 100,
            display: 'flex',
            justifyContent: 'center',
            mt: 20,
          }}
        >
          <Outlet />
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default App;
