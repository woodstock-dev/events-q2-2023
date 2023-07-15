import { Routes, Route, Outlet } from "react-router-dom";
import Footer from './components/footer'
import Header from './components/header'
import Form from './pages/Form'
import Events from './pages/events'
import EventView from './pages/eventView'
import Login from './pages/login'
import { Box, Stack } from "@mui/material";


function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Login />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/EventView" element={<EventView />} />
        </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <Box>
        <Stack direction="column"
          sx={{
            minHeight: '100vh',
          }}>
          <Header />
          <Outlet />
          <Footer />
        </Stack>
    </Box>
  );
}

export default App
