import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './components/Header';
import Hero from './components/Hero';
import SitePages from './components/SitePages';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
const fontStack = '"Montserrat", "Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif';
const theme = createTheme({
    palette: {
        primary: { main: '#D39FD4' },
        secondary: { main: '#D39FD4' },
        background: { default: '#FFFFFF', paper: '#FFFFFF' },
        text: {
            primary: '#D39FD4',
            secondary: '#D39FD4',
        },
    },
    shape: { borderRadius: 12 },
    typography: {
        fontFamily: fontStack,
        allVariants: { fontFamily: fontStack },
        h1: { fontFamily: fontStack, fontWeight: 700 },
        h2: { fontFamily: fontStack, fontWeight: 700 },
        h3: { fontFamily: fontStack, fontWeight: 700 },
        h4: { fontFamily: fontStack, fontWeight: 700 },
        h5: { fontFamily: fontStack, fontWeight: 600 },
        h6: { fontFamily: fontStack, fontWeight: 600 },
        subtitle1: { fontFamily: fontStack },
        subtitle2: { fontFamily: fontStack },
        body1: { fontFamily: fontStack },
        body2: { fontFamily: fontStack },
        button: { fontFamily: fontStack },
        caption: { fontFamily: fontStack },
        overline: { fontFamily: fontStack },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*, *::before, *::after': {
                    fontFamily: fontStack,
                },
                body: {
                    fontFamily: fontStack,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: { fontFamily: fontStack },
                contained: {
                    backgroundColor: '#D39FD4',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#c08fc4' },
                },
                containedSecondary: {
                    backgroundColor: '#D39FD4',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#c08fc4' },
                },
                containedPrimary: {
                    backgroundColor: '#D39FD4',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#c08fc4' },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                label: { fontFamily: fontStack },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: { fontFamily: fontStack },
                input: { fontFamily: fontStack },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: { fontFamily: fontStack },
                secondary: { fontFamily: fontStack },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: { fontFamily: fontStack },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                title: { fontFamily: fontStack },
                subheader: { fontFamily: fontStack },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: { fontFamily: fontStack },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: { fontFamily: fontStack },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: { fontFamily: fontStack },
            },
        },
    },
});
function App() {
    const [pathname, setPathname] = useState(window.location.pathname || '/');
    useEffect(() => {
        const onPop = () => setPathname(window.location.pathname || '/');
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);
    const normalizedPath = useMemo(() => {
        if (!pathname || pathname === '/')
            return '/';
        return pathname.replace(/\/+$/, '') || '/';
    }, [pathname]);
    const navigate = (path) => {
        if (path === normalizedPath)
            return;
        window.history.pushState({}, '', path);
        setPathname(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(GlobalStyles, { styles: {
                    html: { scrollBehavior: 'smooth', fontFamily: fontStack },
                    body: { overflowX: 'hidden', fontFamily: fontStack },
                    '#root': { fontFamily: fontStack },
                    '#root *': { fontFamily: fontStack },
                } }), _jsx(Header, { currentPath: normalizedPath, onNavigate: navigate }), normalizedPath === '/' && _jsx(Hero, {}), _jsx(SitePages, { currentPath: normalizedPath })] }));
}
export default App;
