import { createTheme } from '@mui/material/styles';
import localFont from '@next/font/local';

const TimeBurner = localFont({
  src: [
    {
      path: '../fonts/timeburner-bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../fonts/timeburner-normal.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'auto',
});

const theme = createTheme({
  palette: {
    text: {
      primary: '#000C2E',
      secondary: '#58668F',
      disabled: '#23336240',
    },
    primary: {
      main: '#abc312',
    },
    secondary: {
      main: '#eaf3a9',
    },
    error: {
      main: '#F44336',
      dark: '#E31B0C',
      light: '#F88078',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9800',
      dark: '#C77700',
      light: '#FFB547',
      contrastText: '#000000',
    },
    success: {
      main: '#4CAF50',
      dark: '#3B873E',
      light: '#7BC67E',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    body1: {
      fontFamily: TimeBurner.style.fontFamily,
      fontWeight: 'normal',
    },
    h6: {
      fontFamily: TimeBurner.style.fontFamily,
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
    },
  },
});

export { theme };
