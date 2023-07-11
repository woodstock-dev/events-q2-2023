import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import './main.css'


import { BrowserRouter } from 'react-router-dom'

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors'

const defaultTheme = unstable_createMuiStrictModeTheme;


const mainTheme = createTheme({
  palette: {
    
    mode: 'dark',

    primary: {
      main: '#3f51b5'
    }

    
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={mainTheme}>
      <App />
      </ThemeProvider>
    </React.StrictMode>
    </BrowserRouter>
    ,
)
