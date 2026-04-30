import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Team', href: '/people' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Guidelines', href: '/guidelines' },
  { label: 'Explainers', href: '/explainer' },
];

type HeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    if (currentPath === href) return true;
    return currentPath.startsWith(`${href}/`);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'primary.main',
        '& .MuiTypography-root': { color: '#fff' },
        '& .MuiButton-root': { color: '#fff' },
        '& .MuiIconButton-root': { color: '#fff' },
        '& .MuiSvgIcon-root': { color: '#fff' },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 }, px: { xs: 0, md: 1 } }}>
          <Box
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              color: '#fff !important',
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            <Box
              component="img"
              src="/logo.jpeg"
              alt="Logo"
              sx={{
                height: { xs: 38, sm: 46, md: 62 },
                width: { xs: 86, sm: 110, md: 162 },
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: 14, sm: 18, md: 24 },
                letterSpacing: '-0.02em',
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
                lineHeight: { xs: 1.1, sm: 'normal' },
                maxWidth: { xs: 132, sm: 220, md: 'none' },
                wordBreak: 'keep-all',
              }}
            >
              Our Gender Lens
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => onNavigate(item.href)}
                sx={{
                  minHeight: 40,
                  px: 1,
                  color: '#fff !important',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textTransform: 'none',
                  borderBottom: isActive(item.href) ? '2px solid' : '2px solid transparent',
                  borderColor: isActive(item.href) ? '#fff' : 'transparent',
                  borderRadius: 0,
                  '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {item.label}
              </Button>
            ))}
            {/* Search icon hidden for now */}
          </Box>

          <Box sx={{ ml: 'auto', display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            {/* Search icon hidden for now */}
            <IconButton aria-label="Open navigation" onClick={() => setMobileOpen(true)} sx={{ color: '#fff' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '84%',
            maxWidth: 360,
            bgcolor: 'primary.main',
            '& .MuiTypography-root': { color: '#fff' },
            '& .MuiListItemText-primary': { color: '#fff' },
            '& .MuiIconButton-root': { color: '#fff' },
            '& .MuiSvgIcon-root': { color: '#fff' },
          },
        }}
      >
        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 1.5 }}>
            <IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List disablePadding>
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                onClick={() => {
                  onNavigate(item.href);
                  setMobileOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  minHeight: 48,
                  mb: 0.5,
                  bgcolor: isActive(item.href) ? 'rgba(255,255,255,0.15)' : 'transparent',
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: isActive(item.href) ? 700 : 600, color: '#fff' }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
