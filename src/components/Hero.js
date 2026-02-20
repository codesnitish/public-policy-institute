import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
export default function Hero() {
    return (_jsx(Box, { sx: {
            position: 'relative',
            overflow: 'hidden',
            color: '#fff',
            backgroundColor: '#1B2E6E',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundImage: "linear-gradient(110deg, rgba(12, 24, 62, 0.9), rgba(27, 46, 110, 0.72)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            },
        }, children: _jsx(Container, { maxWidth: "lg", sx: { position: 'relative' }, children: _jsxs(Box, { sx: { py: { xs: 9, md: 14 }, maxWidth: 860 }, children: [_jsx(Typography, { variant: "h1", sx: {
                            fontSize: { xs: '2.2rem', md: '3.7rem' },
                            lineHeight: 1.06,
                            color: '#fff',
                            mb: 2,
                        }, children: "Our Gender Lens" }), _jsx(Typography, { sx: { fontSize: { xs: '1.1rem', md: '1.28rem' }, opacity: 0.95, maxWidth: 760 }, children: "Shaping Policy. Advancing Knowledge. Building Leaders." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1.5, mt: 4.5, children: [_jsx(Button, { href: "#section-education", variant: "contained", color: "secondary", sx: {
                                    minHeight: 46,
                                    px: 3,
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    boxShadow: 'none',
                                    '&:hover': { boxShadow: 'none' },
                                }, children: "Explore Programmes" }), _jsx(Button, { href: "#section-research", variant: "outlined", sx: {
                                    minHeight: 46,
                                    px: 3,
                                    fontWeight: 700,
                                    color: '#fff',
                                    borderColor: 'rgba(255,255,255,0.75)',
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: '#fff',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                    },
                                }, children: "Our Research" })] })] }) }) }));
}
