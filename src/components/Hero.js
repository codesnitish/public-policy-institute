import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography } from '@mui/material';
const HERO_TITLE = 'Our Gender Lens';
const HERO_SUBTITLE = 'We exist to turn rigorous research into real-world change. Our work advances gender equity and inclusive development across climate, technology, education, and health.';
export default function Hero() {
    return (_jsx(Box, { sx: {
            position: 'relative',
            overflow: 'hidden',
            minHeight: '55vh',
            height: '55vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            backgroundImage: 'url(/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
                zIndex: 0,
            },
            '& .MuiTypography-root': { color: '#fff !important' },
        }, children: _jsx(Container, { maxWidth: "lg", sx: { position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: _jsxs(Box, { sx: { maxWidth: 860, textAlign: 'center', mx: 'auto' }, children: [_jsx(Typography, { variant: "h1", component: "h1", sx: {
                            fontSize: { xs: '2.2rem', md: '3.7rem' },
                            lineHeight: 1.06,
                            color: '#fff !important',
                            mb: 2,
                            minHeight: { xs: '2.5em', md: '1.2em' },
                        }, children: HERO_TITLE }), _jsx(Typography, { sx: { fontSize: { xs: '1.1rem', md: '1.28rem' }, color: '#fff !important', maxWidth: 760, minHeight: '3.5em' }, children: HERO_SUBTITLE })] }) }) }));
}
