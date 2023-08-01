import { Outlet, Route, Routes } from 'react-router-dom'

import RequireAuth from './components/requireAuth'
import { Box } from '@mui/material'

import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

const Login = React.lazy(() => import('./pages/login'))
const Events = React.lazy(() => import('./pages/tasks'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense><Layout /></React.Suspense>}>
        <Route index element={<Login />} />
        <Route path="tasks/*" 
               element={<React.Suspense><RequireAuth><Events /></RequireAuth></React.Suspense>} />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  return(
    <Box sx={{ m: 0, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{flexGrow: 100}}>
        <Outlet />
      </Box>
      <Footer />
    </Box>)
}

export default App