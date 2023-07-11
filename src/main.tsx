import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import Theme from './theme'
import './main.css'


import { BrowserRouter } from 'react-router-dom'

import { ThemeOptions, ThemeProvider } from '@mui/material/styles';


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
  <React.StrictMode>
      <App/>
    </React.StrictMode>
    </BrowserRouter>
    ,
)
