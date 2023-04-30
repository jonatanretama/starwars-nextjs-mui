import { createTheme } from '@mui/material/styles';
import localFont from '@next/font/local';

const TimeBurner = localFont({
  src: [
    {
      path: '../../../public/fonts/timeburner-bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../../public/fonts/timeburner-normal.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'auto',
});

const StarJHol = localFont({
  src: [
    {
      path: '../../../public/fonts/Starjhol.ttf',
    },
  ],
  display: 'auto',
});

const StrjMono = localFont({
  src: [
    {
      path: '../../../public/fonts/Strjmono.ttf',
    },
  ],
  display: 'auto',
});

const Droid = localFont({
  src: [
    {
      path: '../../../public/fonts/droid.otf',
    },
  ],
  display: 'auto',
});

const Advent = localFont({
  src: [
    {
      path: '../../../public/fonts/advent-pro-italic.ttf',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/advent-pro-normal.ttf',
      style: 'normal',
    },
  ],
  display: 'auto',
});

const theme = createTheme({
  palette: {
    text: {
      primary: '#000C2E',
      secondary: '#B5B7B7',
      disabled: '#23336240',
    },
    primary: {
      main: '#fad510',
      dark: '#1D1E1F',
      contrastText: '#FFFFFF',
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
      fontSize: '0.875rem',
      fontWeight: 'normal',
      '@media (min-width: 600px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 900px)': {
        fontSize: '1.2rem',
      },
    },
    body2: {
      fontFamily: Advent.style.fontFamily,
      fontSize: '0.875rem',
      fontWeight: 'normal',
      '@media (min-width: 600px)': {
        fontSize: '1rem',
      },
      '@media (min-width: 900px)': {
        fontSize: '1.2rem',
      },
    },
    h1: {
      fontFamily: StarJHol.style.fontFamily,
      fontSize: '5rem',
      fontWeight: 'bold',
      '@media (min-width: 600px)': {
        fontSize: '5.5rem',
      },
    },
    h2: {
      fontFamily: StarJHol.style.fontFamily,
      fontSize: '3rem',
      fontWeight: 'bold',
      '@media (min-width: 600px)': {
        fontSize: '4rem',
      },
    },
    h3: {
      fontFamily: TimeBurner.style.fontFamily,
      fontSize: '2rem',
      fontWeight: 'bold',
      '@media (min-width: 600px)': {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontFamily: StrjMono.style.fontFamily,
      fontSize: '1.6rem',
      fontWeight: 'bold',
      '@media (min-width: 600px)': {
        fontSize: '2rem',
      },
    },
    h6: {
      fontFamily: Droid.style.fontFamily,
      fontWeight: 'bold',
      fontSize: '1.2rem',
      '@media (min-width: 600px)': {
        fontSize: '1.4rem',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html: {
        WebkitFontSmoothing: 'auto',
      },
      body: {
        min-height: '100vh',
        min-width: '100vw,
      },
    `,
    },
  },
});

export { theme };
