


import React from 'react'
import './App.css'
//Components
import  Login from "./pages/login"
import EventView from "./pages/eventView"
import Events from "./pages/events"
import Eventform from "./pages/eventForm"
import Eventhook from "./hooks/eventHook"
import Footer from "./components/footer"

import Header from "./components/header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (<Router>
       <Header/>
        <Routes>
        <Route path ='/' element = {<Login />} />
        <Route path = '/'element = {<EventView/>}/>
        <Route path = '/'element = {<Events/>}/>
        <Route path = '/'element = {<Eventform/>}/>
        <Route path = '/'element = {<Eventhook/>}/>
        <Route path = '/'element = {<Footer/>}/>
        </Routes>
    </Router>)
}
export default App