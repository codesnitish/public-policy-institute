import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';

const footerLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Team', href: '/people' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Guidelines', href: '/guidelines' },
];

const email = 'ourgenderlens0317@gmail.com';
const linkedInUrl = 'https://www.linkedin.com/company/our-gender-lens-co';

type FooterProps = {
  onNavigate: (path: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <Box component="footer" sx={{ bgcolor: '#5F4C80', color: '#fff', mt: 'auto' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2.5, sm: 4, md: 6 }, py: { xs: 4, md: 5 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 3, md: 6 }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
        >
          <Box sx={{ maxWidth: 680 }}>
            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800, mb: 1 }}>
              Our Gender Lens
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8 }}>
              Supporting studies, documentation, data collection, policy analysis, and knowledge-building initiatives that strengthen evidence-based advocacy.
            </Typography>
          </Box>

          <Stack spacing={1.5} sx={{ minWidth: { md: 280 } }}>
            <Link
              href={`mailto:${email}`}
              underline="none"
              sx={{ color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 1, fontWeight: 700 }}
            >
              <EmailIcon fontSize="small" />
              {email}
            </Link>
            <Link
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              underline="none"
              sx={{ color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 1, fontWeight: 700 }}
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.22)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3 }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2.4} useFlexGap flexWrap="wrap">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                component="button"
                type="button"
                underline="none"
                onClick={() => onNavigate(link.href)}
                sx={{
                  color: 'rgba(255,255,255,0.86)',
                  border: 0,
                  bgcolor: 'transparent',
                  p: 0,
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  '&:hover': { color: '#fff' },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href={`mailto:${email}`}
              aria-label="Email Our Gender Lens"
              sx={{ color: '#fff', border: '1px solid rgba(255,255,255,0.32)' }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Our Gender Lens on LinkedIn"
              sx={{ color: '#fff', border: '1px solid rgba(255,255,255,0.32)' }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
