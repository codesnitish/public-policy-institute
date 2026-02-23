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
      color="inherit"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: { xs: 68, md: 78 }, px: { xs: 0, md: 1 } }}>
          <Typography
            component="a"
            href="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
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
                  color: 'text.primary',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderBottom: currentPath === item.href ? '2px solid' : '2px solid transparent',
                  borderColor: currentPath === item.href ? 'primary.main' : 'transparent',
                  borderRadius: 0,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton aria-label="Search" sx={{ ml: 0.5 }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box sx={{ ml: 'auto', display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <IconButton aria-label="Search">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="Open navigation" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: '84%', maxWidth: 360 } }}
      >
        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
            <Typography fontWeight={700} fontSize={20}>Navigation</Typography>
            <IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
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
                  bgcolor: currentPath === item.href ? 'rgba(169,75,201,0.15)' : 'transparent',
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: currentPath === item.href ? 700 : 600 }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
