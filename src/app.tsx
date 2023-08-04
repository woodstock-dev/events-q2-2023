// Copyright 2023 Ryan McGuinness
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Outlet, Route, Routes } from 'react-router-dom'

import RequireAuth from './components/requireAuth'
import { Box } from '@mui/material'

import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

const Login = React.lazy(() => import('./pages/login'))
const TaskIndex  = React.lazy(() => import('./pages/tasks')) 

function App() {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense><Layout /></React.Suspense>}>
        <Route index element={<Login />} />
        <Route path="tasks/*" 
               element={<React.Suspense><RequireAuth><TaskIndex /></RequireAuth></React.Suspense>} />
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