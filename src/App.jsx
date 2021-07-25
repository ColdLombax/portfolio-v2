import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Navbar from './components/Navigation/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F3D56',
      light: '#575A89',
    },
    secondary: {
      main: '#19CDFF',
    },
    success: {
      main: '#7fff7c',
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif;",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>

  );
}
