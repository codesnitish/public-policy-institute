import { useEffect, useMemo, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Fab,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorageIcon from '@mui/icons-material/Storage';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InsightsIcon from '@mui/icons-material/Insights';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkIcon from '@mui/icons-material/Link';

type TabId = 'vision' | 'education' | 'research' | 'datahub' | 'news' | 'projects' | 'people';

const tabs: Array<{ id: TabId; label: string }> = [
  { id: 'vision', label: 'Vision & Mission' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'datahub', label: 'Data Hub' },
  { id: 'news', label: 'News' },
  { id: 'projects', label: 'Projects' },
  { id: 'people', label: 'People' },
];

const sectionBaseSx = {
  py: { xs: 7, md: 10 },
};

function Section({
  id,
  alt,
  children,
}: {
  id: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Box id={id} sx={{ ...sectionBaseSx, bgcolor: alt ? '#F4F5F8' : '#fff' }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}

function ShareInline() {
  return (
    <Stack direction="row" spacing={1} alignItems="center" mt={4}>
      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
        SHARE
      </Typography>
      <IconButton size="small"><XIcon fontSize="small" /></IconButton>
      <IconButton size="small"><LinkedInIcon fontSize="small" /></IconButton>
      <IconButton size="small"><FacebookIcon fontSize="small" /></IconButton>
      <IconButton size="small"><LinkIcon fontSize="small" /></IconButton>
    </Stack>
  );
}

export default function ContentArea() {
  const [activeTab, setActiveTab] = useState<TabId>('vision');
  const [mobileShareOpen, setMobileShareOpen] = useState(false);

  const dataItems = useMemo(
    () => [
      {
        key: 'services',
        title: 'Data Hub Services',
        icon: <StorageIcon sx={{ color: 'primary.main' }} />,
        body: 'Centralized access to policy datasets, metadata repositories, and quality-controlled evidence resources.',
      },
      {
        key: 'technical',
        title: 'Technical Development',
        icon: <EngineeringIcon sx={{ color: 'primary.main' }} />,
        body: 'Scalable platform support for dashboards, policy tools, and collaborative research infrastructure.',
      },
      {
        key: 'analytics',
        title: 'Policy Analytics',
        icon: <InsightsIcon sx={{ color: 'primary.main' }} />,
        body: 'Advanced modelling and analysis to inform policy design, implementation, and measurable outcomes.',
      },
      {
        key: 'capacity',
        title: 'Capacity Building',
        icon: <TrendingUpIcon sx={{ color: 'primary.main' }} />,
        body: 'Training modules and institutional capability programmes for data-led public policy practice.',
      },
    ],
    [],
  );

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(`section-${tab.id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveTab(visible[0].target.id.replace('section-', '') as TabId);
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: { xs: 68, md: 78 },
          zIndex: 40,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg" sx={{ py: 1.3 }}>
          <Tabs
            value={activeTab}
            variant="scrollable"
            scrollButtons={false}
            sx={{
              minHeight: 46,
              '& .MuiTabs-indicator': { height: 3, borderRadius: 3, bgcolor: 'secondary.main' },
            }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                value={tab.id}
                onClick={() => document.getElementById(`section-${tab.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                label={tab.label}
                sx={{
                  textTransform: 'none',
                  minHeight: 44,
                  minWidth: 'fit-content',
                  px: 2,
                  fontWeight: activeTab === tab.id ? 700 : 600,
                  color: activeTab === tab.id ? 'primary.main' : 'text.secondary',
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Box>

      <Section id="section-vision">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderLeft: '4px solid', borderLeftColor: 'primary.main', borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2 }}>Vision</Typography>
                <Typography color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.85 }}>
                  To shape public policy through rigorous research, practical education, and sustained institutional engagement.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderLeft: '4px solid', borderLeftColor: 'primary.main', borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 3.5 }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2 }}>Mission</Typography>
                <Stack spacing={1.4}>
                  <Typography color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}><strong>01.</strong> Deliver policy-relevant education and high-quality research.</Typography>
                  <Typography color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}><strong>02.</strong> Build leaders capable of designing and implementing policy.</Typography>
                  <Typography color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.75 }}><strong>03.</strong> Collaborate with institutions to drive measurable public impact.</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      <Section id="section-education" alt>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }}>Education</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 900, fontSize: '1.05rem', lineHeight: 1.85 }}>
          Public Policy Institute offers diverse programmes designed to equip participants with the knowledge and skills to analyse complex policy challenges and contribute to evidence-based policy decisions.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          {[
            { tag: 'PGP Specialisation', title: 'Public Policy Track', text: 'Policy-focused coursework integrated with management and leadership training for future decision-makers.' },
            { tag: 'AMPPP', title: 'Advanced Management Programme in Public Policy', text: 'Flagship executive pathway for practitioners in governance, regulation, and public institutions.' },
            { tag: 'Legislative Support', title: 'Parliamentary & Legislative Programme', text: 'Capacity development support for elected representatives, policy teams, and legislative researchers.' },
            { tag: 'Training', title: 'Education Training', text: 'Workshops for state and central officers on policy analysis, implementation, and institutional reform.' },
          ].map((card) => (
            <Grid key={card.title} size={{ xs: 12, md: 6 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                }}
              >
                <CardContent sx={{ p: 3.2 }}>
                  <Chip label={card.tag} size="small" sx={{ mb: 1.6, fontWeight: 700, bgcolor: '#eaf0ff', color: 'primary.main' }} />
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.9rem' }, mb: 1.4 }}>{card.title}</Typography>
                  <Typography color="text.secondary" sx={{ mb: 2.2, lineHeight: 1.8 }}>{card.text}</Typography>
                  <Button sx={{ textTransform: 'none', fontWeight: 700, px: 0 }}>Know More →</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, bgcolor: 'primary.main', color: '#fff', borderRadius: 3, p: { xs: 3.2, md: 4.5 } }}>
          <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.9rem', md: '2.5rem' }, mb: 1.4 }}>
            Knowledge Partner for a Sustainable Future
          </Typography>
          <Typography sx={{ maxWidth: 900, opacity: 0.95, lineHeight: 1.8 }}>
            Empowering future leaders with climate and sustainability insights to drive transparent, evidence-based, and durable public policy outcomes.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2.4, textTransform: 'none', fontWeight: 700, boxShadow: 'none' }}>
            Know More
          </Button>
        </Box>

        <ShareInline />
      </Section>

      <Section id="section-research">
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>Research</Typography>
        <Stack spacing={2.5}>
          {[
            {
              title: 'Community forest governance and synergies among carbon, biodiversity and livelihoods',
              authors: 'Harry W. Fischer, Ashwini Chhatre, Apurva Duddu, Nabin Pradhan, Arun Agrawal',
              year: '2023',
            },
            {
              title: 'India and ASEAN: Assessing trade specialisation in manufactured goods',
              authors: 'Nikhat Khalid',
              year: '2024',
            },
          ].map((paper) => (
            <Card key={paper.title} elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
              <CardContent sx={{ p: 3.2 }}>
                <Chip label="Published Papers" size="small" sx={{ bgcolor: 'secondary.main', color: '#fff', fontWeight: 700, mb: 1.5 }} />
                <Typography variant="h3" sx={{ fontSize: { xs: '1.45rem', md: '1.95rem' }, mb: 1.2 }}>
                  <Box component="a" href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                    {paper.title}
                  </Box>
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1.4 }}>{paper.authors}</Typography>
                <Chip label={paper.year} variant="outlined" size="small" />
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Button variant="contained" color="secondary" sx={{ mt: 3, textTransform: 'none', fontWeight: 700, boxShadow: 'none' }}>
          View All Research →
        </Button>
        <ShareInline />
      </Section>

      <Section id="section-datahub" alt>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }}>Data Hub</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 920, lineHeight: 1.85, mb: 2 }}>
          The Data Hub centralizes institutional data capabilities across policy research programmes, enabling streamlined workflows, stronger governance, and high-quality decision support.
        </Typography>

        <Grid container spacing={2.2}>
          {dataItems.map((item) => (
            <Grid key={item.key} size={{ xs: 12, md: 6 }}>
              <Accordion disableGutters elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '14px !important', bgcolor: '#fff' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    {item.icon}
                    <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>{item.body}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="section-news">
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }}>News</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.85, maxWidth: 900 }}>
          Latest institute announcements, policy updates, event highlights, and institutional milestones.
        </Typography>
      </Section>

      <Section id="section-projects" alt>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }}>Projects</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.85, maxWidth: 900 }}>
          A portfolio of active and completed projects spanning governance, public finance, development, and climate policy.
        </Typography>
      </Section>

      <Section id="section-people">
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }}>People</Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.85, maxWidth: 900 }}>
          Meet our faculty, researchers, policy practitioners, and interdisciplinary teams driving institutional impact.
        </Typography>
      </Section>

      <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#F4F5F8' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2.2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
                <CardContent sx={{ p: 3.1 }}>
                  <Typography variant="overline" sx={{ fontWeight: 700, color: 'text.secondary' }}>Quick Link</Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1.5, fontWeight: 700 }}>Guidelines for Research Blogs</Typography>
                  <Button sx={{ textTransform: 'none', fontWeight: 700, px: 0 }}>Open →</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
                <CardContent sx={{ p: 3.1 }}>
                  <Typography variant="overline" sx={{ fontWeight: 700, color: 'text.secondary' }}>Updates</Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1.5, fontWeight: 700 }}>Newsletters</Typography>
                  <Button sx={{ textTransform: 'none', fontWeight: 700, px: 0 }}>Open →</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', right: 18, bottom: 18, zIndex: 60 }}>
        <Stack spacing={1} alignItems="end" sx={{ mb: 1, opacity: mobileShareOpen ? 1 : 0, pointerEvents: mobileShareOpen ? 'auto' : 'none', transition: 'opacity .2s' }}>
          <Fab size="small" color="default"><XIcon fontSize="small" /></Fab>
          <Fab size="small" color="default"><LinkedInIcon fontSize="small" /></Fab>
          <Fab size="small" color="default"><FacebookIcon fontSize="small" /></Fab>
          <Fab size="small" color="default"><LinkIcon fontSize="small" /></Fab>
        </Stack>
        <Fab color="secondary" onClick={() => setMobileShareOpen((v) => !v)} aria-label="Share">
          {mobileShareOpen ? <CloseIcon /> : <ShareIcon />}
        </Fab>
      </Box>
    </>
  );
}
