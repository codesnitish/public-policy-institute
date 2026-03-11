import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Team', href: '/people' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Book Reviews', href: '/book-reviews' },
    { label: 'Media Reviews', href: '/media-reviews' },
    { label: 'Beta', href: '/beta' },
];
export default function Header({ currentPath, onNavigate }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (_jsxs(AppBar, { position: "sticky", elevation: 0, sx: {
            bgcolor: 'primary.main',
            '& .MuiTypography-root': { color: '#fff' },
            '& .MuiButton-root': { color: '#fff' },
            '& .MuiIconButton-root': { color: '#fff' },
            '& .MuiSvgIcon-root': { color: '#fff' },
        }, children: [_jsx(Container, { maxWidth: "lg", children: _jsxs(Toolbar, { sx: { minHeight: { xs: 64, md: 72 }, px: { xs: 0, md: 1 } }, children: [_jsxs(Box, { component: "a", href: "/", sx: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                textDecoration: 'none',
                                color: '#fff !important',
                                flexShrink: 1,
                                minWidth: 0,
                            }, children: [_jsx(Box, { component: "img", src: "/newlogo.png", alt: "Logo", sx: {
                                        height: { xs: 38, md: 54 },
                                        width: { xs: 92, md: 140 },
                                        objectFit: 'contain',
                                        display: 'block',
                                    } }), _jsx(Typography, { sx: {
                                        fontWeight: 700,
                                        fontSize: { xs: 15, sm: 18, md: 24 },
                                        letterSpacing: '-0.02em',
                                        whiteSpace: { xs: 'normal', sm: 'nowrap' },
                                        lineHeight: { xs: 1.1, sm: 'normal' },
                                        maxWidth: { xs: 170, sm: 220, md: 'none' },
                                        wordBreak: 'keep-all',
                                    }, children: "Our Gender Lens" })] }), _jsx(Box, { sx: { display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center', gap: 0.5 }, children: navItems.map((item) => (_jsx(Button, { onClick: () => onNavigate(item.href), sx: {
                                    minHeight: 40,
                                    px: 1,
                                    color: '#fff !important',
                                    fontWeight: 600,
                                    fontSize: '0.92rem',
                                    textTransform: 'none',
                                    borderBottom: currentPath === item.href ? '2px solid' : '2px solid transparent',
                                    borderColor: currentPath === item.href ? '#fff' : 'transparent',
                                    borderRadius: 0,
                                    '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                                }, children: item.label }, item.label))) }), _jsx(Box, { sx: { ml: 'auto', display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }, children: _jsx(IconButton, { "aria-label": "Open navigation", onClick: () => setMobileOpen(true), sx: { color: '#fff' }, children: _jsx(MenuIcon, {}) }) })] }) }), _jsx(Drawer, { anchor: "right", open: mobileOpen, onClose: () => setMobileOpen(false), PaperProps: {
                    sx: {
                        width: '84%',
                        maxWidth: 360,
                        bgcolor: 'primary.main',
                        '& .MuiTypography-root': { color: '#fff' },
                        '& .MuiListItemText-primary': { color: '#fff' },
                        '& .MuiIconButton-root': { color: '#fff' },
                        '& .MuiSvgIcon-root': { color: '#fff' },
                    },
                }, children: _jsxs(Box, { sx: { p: 2.5 }, children: [_jsx(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 1.5 }, children: _jsx(IconButton, { "aria-label": "Close navigation", onClick: () => setMobileOpen(false), sx: { color: '#fff' }, children: _jsx(CloseIcon, {}) }) }), _jsx(List, { disablePadding: true, children: navItems.map((item) => (_jsx(ListItemButton, { onClick: () => {
                                    onNavigate(item.href);
                                    setMobileOpen(false);
                                }, sx: {
                                    borderRadius: 2,
                                    minHeight: 48,
                                    mb: 0.5,
                                    bgcolor: currentPath === item.href ? 'rgba(255,255,255,0.15)' : 'transparent',
                                }, children: _jsx(ListItemText, { primary: item.label, primaryTypographyProps: { fontWeight: currentPath === item.href ? 700 : 600, color: '#fff' } }) }, item.label))) })] }) })] }));
}
