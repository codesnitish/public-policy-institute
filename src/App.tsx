import ContentArea from './components/ContentArea';
import Header from './components/Header';
import Hero from './components/Hero';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#1B2E6E' },
    secondary: { main: '#2563EB' },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"DM Sans", "Inter", "Segoe UI", sans-serif',
    h1: { fontFamily: '"Merriweather", "Playfair Display", serif', fontWeight: 700 },
    h2: { fontFamily: '"Merriweather", "Playfair Display", serif', fontWeight: 700 },
    h3: { fontFamily: '"Merriweather", "Playfair Display", serif', fontWeight: 700 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' }, body: { overflowX: 'hidden' } }} />
      <Header />
      <Hero />
      <ContentArea />
    </ThemeProvider>
  );
}

export default App;
