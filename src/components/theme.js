import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#698f6e',
      contrastText: '#202020',
      bacground: '#F5F2E8 ',
    },
  },
});

theme = responsiveFontSizes(theme);
export { theme };
