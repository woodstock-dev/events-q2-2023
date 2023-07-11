
import Login from './pages/login'
import AddEvents from './pages/addEvents'
import Header from './components/header'
import Footer from './components/footer'

/**Localization provider and adapter for date component library */
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeOptions } from '@mui/material/styles';

import { ReactDOM } from 'react'
import {Routes, Route } from 'react-router-dom'

/**
 * TODO: useNavigate() hook
 */

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
    <Header />
      <Routes>
        
        <Route path='/login' element={<Login />}></Route>
        <Route path='/addEvents' element={<AddEvents/>}></Route>
      </Routes>
      <Footer />
      
      
   </LocalizationProvider>
  )
}

export default App
