
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#a6c4d4',
    },
    secondary: {
      main: '#94c5ba',
    },
    text: {
      primary: '#fff8e1',
    },
    error: {
      main: '#b71c1c',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#87b388',
    },
    divider: 'rgba(116,137,148,0.84)',
  },
  typography: {
    h2: {
      fontSize: '1.5rem',
    },
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.4rem',
    },
    h4: {
      fontSize: '1.3rem',
    },
    h5: {
      fontSize: '1.2rem',
    },
    h6: {
      fontSize: '1.1rem',
    },
    subtitle1: {
      fontSize: '0.9rem',
    },
    subtitle2: {
      fontSize: '0.8rem',
      fontWeight: 300,
    },
    overline: {
      fontSize: '0.7rem',
      fontWeight: 200,
    },
  }
};