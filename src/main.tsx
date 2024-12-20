import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './main.css';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { mainTheme } from './mainTheme';
import AuthProvider from './provider/AuthProvider';
const theme = createTheme(mainTheme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
);
