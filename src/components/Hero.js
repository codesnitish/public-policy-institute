import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
export default function Hero() {
    return (_jsx(Box, { sx: {
            position: 'relative',
            overflow: 'hidden',
            color: 'text.primary',
            backgroundImage: 'url(/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                zIndex: 0,
            },
        }, children: _jsx(Container, { maxWidth: "lg", sx: { position: 'relative', zIndex: 1 }, children: _jsxs(Box, { sx: { py: { xs: 9, md: 14 }, maxWidth: 860 }, children: [_jsx(Typography, { variant: "h1", sx: {
                            fontSize: { xs: '2.2rem', md: '3.7rem' },
                            lineHeight: 1.06,
                            color: 'primary.main',
                            mb: 2,
                        }, children: "Our Gender Lens" }), _jsx(Typography, { sx: { fontSize: { xs: '1.1rem', md: '1.28rem' }, color: 'text.primary', maxWidth: 760 }, children: "We exist to turn rigorous research into real-world change. Our work advances gender equity and inclusive development across climate, technology, education, and health." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1.5, mt: 4.5, children: [_jsx(Button, { href: "/about-us", variant: "contained", color: "secondary", sx: {
                                    minHeight: 46,
                                    px: 3,
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    boxShadow: 'none',
                                    '&:hover': { boxShadow: 'none' },
                                }, children: "About Us" }), _jsx(Button, { href: "/people-and-blogs", variant: "outlined", sx: {
                                    minHeight: 46,
                                    px: 3,
                                    fontWeight: 700,
                                    color: 'primary.main',
                                    borderColor: 'primary.main',
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        backgroundColor: 'rgba(211, 159, 212, 0.15)',
                                    },
                                }, children: "People & Blogs" })] })] }) }) }));
}
