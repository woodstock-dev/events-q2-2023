import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import './main.css';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { mainTheme } from './mainTheme';

const theme = createTheme(mainTheme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
