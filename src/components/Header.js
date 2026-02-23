import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'People & Blogs', href: '/people-and-blogs' },
    { label: 'Book Reviews', href: '/book-reviews' },
    { label: 'Media Reviews', href: '/media-reviews' },
];
export default function Header({ currentPath, onNavigate }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (_jsxs(AppBar, { position: "sticky", elevation: 0, color: "inherit", sx: {
            borderBottom: '1px solid',
            borderColor: 'divider',
            bgcolor: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(10px)',
        }, children: [_jsx(Container, { maxWidth: "lg", children: _jsxs(Toolbar, { sx: { minHeight: { xs: 68, md: 78 }, px: { xs: 0, md: 1 } }, children: [_jsx(Typography, { component: "a", href: "/", sx: {
                                textDecoration: 'none',
                                color: 'text.primary',
                                fontWeight: 700,
                                fontSize: { xs: 24, md: 28 },
                                letterSpacing: '-0.02em',
                                flexShrink: 0,
                            }, children: "Our Gender Lens" }), _jsxs(Box, { sx: { display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center', gap: 1.5 }, children: [navItems.map((item) => (_jsx(Button, { onClick: () => onNavigate(item.href), sx: {
                                        minHeight: 44,
                                        px: 1.75,
                                        color: currentPath === item.href ? 'primary.main' : 'text.primary',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        borderBottom: currentPath === item.href ? '2px solid' : '2px solid transparent',
                                        borderColor: currentPath === item.href ? 'secondary.main' : 'transparent',
                                        borderRadius: 0,
                                        '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                                    }, children: item.label }, item.label))), _jsx(IconButton, { "aria-label": "Search", sx: { ml: 0.5 }, children: _jsx(SearchIcon, {}) })] }), _jsxs(Box, { sx: { ml: 'auto', display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }, children: [_jsx(IconButton, { "aria-label": "Search", children: _jsx(SearchIcon, {}) }), _jsx(IconButton, { "aria-label": "Open navigation", onClick: () => setMobileOpen(true), children: _jsx(MenuIcon, {}) })] })] }) }), _jsx(Drawer, { anchor: "right", open: mobileOpen, onClose: () => setMobileOpen(false), PaperProps: { sx: { width: '84%', maxWidth: 360 } }, children: _jsxs(Box, { sx: { p: 2.5 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }, children: [_jsx(Typography, { fontWeight: 700, fontSize: 20, children: "Navigation" }), _jsx(IconButton, { "aria-label": "Close navigation", onClick: () => setMobileOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(List, { disablePadding: true, children: navItems.map((item) => (_jsx(ListItemButton, { onClick: () => {
                                    onNavigate(item.href);
                                    setMobileOpen(false);
                                }, sx: {
                                    borderRadius: 2,
                                    minHeight: 48,
                                    mb: 0.5,
                                    bgcolor: currentPath === item.href ? 'rgba(211,159,212,0.2)' : 'transparent',
                                }, children: _jsx(ListItemText, { primary: item.label, primaryTypographyProps: { fontWeight: currentPath === item.href ? 700 : 600 } }) }, item.label))) })] }) })] }));
}
