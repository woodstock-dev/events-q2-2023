import { Outlet, Route, Routes } from 'react-router-dom'
import './app.css'
import Login from './pages/login'
import Events from './pages/events'
import RequireAuth from './components/requireAuth'
import { Box } from '@mui/material'
import Header from './components/header'
import Footer from './components/footer'
import EventForm from './pages/eventForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="events" element={
          <RequireAuth><Events /></RequireAuth>
        } />
        <Route path="events/create" element={
          <RequireAuth><EventForm /></RequireAuth>
        } />
        <Route path="events/{id}" element={
          <RequireAuth><EventForm /></RequireAuth>
        } />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  return(
    <Box sx={{
          m: 0, 
          display: 'flex',
          flexDirection: 'column'
        }}>
      <Header />
      <main>
      <Box sx={{flexGrow: 100}}>
        <Outlet />
      </Box>
      </main>
      <Footer />
    </Box>)
}

export default App
