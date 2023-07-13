


import React from 'react'
import Login from './pages/login.tsx';
import Events from './pages/events.tsx';
import EventView from './pages/eventView.tsx';
import EventForm from './pages/eventForm.tsx';
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import './app.css'
import { Routes, Route, Outlet } from "react-router-dom";
import {Box} from "@mui/material";

function App() {
  

  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventView" element={<EventView />} />
        <Route path="/eventForm" element={<EventForm />} />
      </Route>
    </Routes>
      
    </React.Fragment>
  )
}

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      
    }}
  > 
      <Footer />
      </Box>
    </React.Fragment>
  );
}

export default App
