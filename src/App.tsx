import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import AddEvents from './pages/addEvents';
import Header from './components/header';
import Footer from './components/footer';
import EventList from './pages/eventList';

import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
/**Localization provider and adapter for date component library */
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

/**
 * TODO: useNavigate() hook
 */

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />}></Route>
          <Route path='/addEvents' element={<AddEvents />}></Route>
          <Route path='/eventList' element={<EventList />}></Route>
        </Route>
      </Routes>
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
