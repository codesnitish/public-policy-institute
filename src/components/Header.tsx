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
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'People & Blogs', href: '/people-and-blogs' },
  { label: 'Book Reviews', href: '/book-reviews' },
  { label: 'Media Reviews', href: '/media-reviews' },
];

type HeaderProps = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#9c27b0',
        '& .MuiTypography-root': { color: '#fff' },
        '& .MuiButton-root': { color: '#fff' },
        '& .MuiIconButton-root': { color: '#fff' },
        '& .MuiSvgIcon-root': { color: '#fff' },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: { xs: 68, md: 78 }, px: { xs: 0, md: 1 } }}>
          <Typography
            component="a"
            href="/"
            sx={{
              textDecoration: 'none',
              color: '#fff !important',
              fontWeight: 700,
              fontSize: { xs: 24, md: 28 },
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            Our Gender Lens
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', alignItems: 'center', gap: 1.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => onNavigate(item.href)}
                sx={{
                  minHeight: 44,
                  px: 1.75,
                  color: '#fff !important',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderBottom: currentPath === item.href ? '2px solid' : '2px solid transparent',
                  borderColor: currentPath === item.href ? '#fff' : 'transparent',
                  borderRadius: 0,
                  '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton aria-label="Search" sx={{ ml: 0.5, color: '#fff' }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ ml: 'auto', display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <IconButton aria-label="Search" sx={{ color: '#fff' }}>
              <SearchIcon />
            </IconButton>
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
            bgcolor: '#9c27b0',
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
                  bgcolor: currentPath === item.href ? 'rgba(255,255,255,0.15)' : 'transparent',
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: currentPath === item.href ? 700 : 600, color: '#fff' }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
