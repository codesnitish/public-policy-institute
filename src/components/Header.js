import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const navItems = [
    { label: 'Programmes', href: '#section-education' },
    { label: 'Research', href: '#section-research' },
    { label: 'Data Hub', href: '#section-datahub' },
    { label: 'News', href: '#section-news' },
    { label: 'People', href: '#section-people' },
];
export default function Header() {
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
                            }, children: "Public Policy Institute" }), _jsxs(Box, { sx: { display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center', gap: 1.5 }, children: [navItems.map((item) => (_jsx(Button, { href: item.href, sx: {
                                        minHeight: 44,
                                        px: 1.75,
                                        color: 'text.primary',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                                    }, children: item.label }, item.label))), _jsx(IconButton, { "aria-label": "Search", sx: { ml: 0.5 }, children: _jsx(SearchIcon, {}) })] }), _jsxs(Box, { sx: { ml: 'auto', display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }, children: [_jsx(IconButton, { "aria-label": "Search", children: _jsx(SearchIcon, {}) }), _jsx(IconButton, { "aria-label": "Open navigation", onClick: () => setMobileOpen(true), children: _jsx(MenuIcon, {}) })] })] }) }), _jsx(Drawer, { anchor: "right", open: mobileOpen, onClose: () => setMobileOpen(false), PaperProps: { sx: { width: '84%', maxWidth: 360 } }, children: _jsxs(Box, { sx: { p: 2.5 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }, children: [_jsx(Typography, { fontWeight: 700, fontSize: 20, children: "Navigation" }), _jsx(IconButton, { "aria-label": "Close navigation", onClick: () => setMobileOpen(false), children: _jsx(CloseIcon, {}) })] }), _jsx(List, { disablePadding: true, children: navItems.map((item) => (_jsx(ListItemButton, { component: "a", href: item.href, onClick: () => setMobileOpen(false), sx: { borderRadius: 2, minHeight: 48 }, children: _jsx(ListItemText, { primary: item.label, primaryTypographyProps: { fontWeight: 600 } }) }, item.label))) })] }) })] }));
}
