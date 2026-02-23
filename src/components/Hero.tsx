import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const HERO_TITLE = 'Our Gender Lens';
const HERO_SUBTITLE = 'We exist to turn rigorous research into real-world change. Our work advances gender equity and inclusive development across climate, technology, education, and health.';

export default function Hero() {
  const [titleDisplay, setTitleDisplay] = useState('');
  const [subtitleDisplay, setSubtitleDisplay] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [runCount, setRunCount] = useState(0);

  // Typewriter: run on mount and every time runCount changes (every 15s)
  useEffect(() => {
    setTitleDisplay('');
    setSubtitleDisplay('');
    setShowCursor(true);

    let titleInterval: ReturnType<typeof setInterval>;
    let subtitleInterval: ReturnType<typeof setInterval> | undefined;
    let titleIndex = 0;
    titleInterval = setInterval(() => {
      if (titleIndex <= HERO_TITLE.length) {
        setTitleDisplay(HERO_TITLE.slice(0, titleIndex));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        let subtitleIndex = 0;
        subtitleInterval = setInterval(() => {
          if (subtitleIndex <= HERO_SUBTITLE.length) {
            setSubtitleDisplay(HERO_SUBTITLE.slice(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
            setShowCursor(false);
          }
        }, 25);
      }
    }, 120);
    return () => {
      clearInterval(titleInterval);
      if (subtitleInterval) clearInterval(subtitleInterval);
    };
  }, [runCount]);

  // Restart typewriter every 15 seconds
  useEffect(() => {
    const id = setInterval(() => setRunCount((c) => c + 1), 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      sx={{
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
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ maxWidth: 860, textAlign: 'center', mx: 'auto' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.2rem', md: '3.7rem' },
              lineHeight: 1.06,
              color: '#fff !important',
              mb: 2,
              minHeight: { xs: '2.5em', md: '1.2em' },
            }}
          >
            {titleDisplay}
            {showCursor && <Box component="span" sx={{ animation: 'blink 0.8s step-end infinite', borderBottom: '3px solid', borderColor: '#fff' }}>|</Box>}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.28rem' }, color: '#fff !important', maxWidth: 760, minHeight: '3.5em' }}>
            {subtitleDisplay}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
