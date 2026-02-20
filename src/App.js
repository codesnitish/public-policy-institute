import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContentArea from './components/ContentArea.tsx';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
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
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: { html: { scrollBehavior: 'smooth' }, body: { overflowX: 'hidden' } } }), _jsx(Header, {}), _jsx(Hero, {}), _jsx(ContentArea, {})] }));
}
export default App;
