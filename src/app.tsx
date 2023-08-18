


import React from 'react'
const Login = React.lazy(() => import ('./pages/login.tsx'));
const Events = React.lazy(() => import ('./pages/events.tsx'));
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import './app.css'
import { Routes, Route, Outlet } from "react-router-dom";
import {Box} from "@mui/material";
import RequireAuth from './components/requireAuth.tsx';

function App() {
  

  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Login />} />
        <Route path="events/*" element={<RequireAuth><React.Suspense><Events /></React.Suspense></RequireAuth>} />
        
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
