
import './App.css'
//Components
import  Login from "./pages/login"

import Events from "./pages/events"
import Footer from "./components/footer"
import Header from "./components/header"
import { Routes, Route, Outlet } from 'react-router-dom'
import React from 'react'
import { Stack } from '@mui/material'
import RequireAuth from './components/requireAuth'

function App () {
  return (
        <Routes>
        <Route path ='/' element = {<Layout/>} >
        <Route index element ={<Login/>}/>
        <Route path = 'events/*'element = {<React.Suspense><RequireAuth><Events/></RequireAuth></React.Suspense>}/>
        </Route>
        </Routes>
    )
}
function Layout () {
  return (
    <Stack
      sx={{
        minHeight: '100vh'

      }}>
      <Header/>
      <Outlet/>
      <Footer/>
    </Stack>
  )
}
export default App



 /* <Route path = 'eventView' element = {<EventView/>}/> */