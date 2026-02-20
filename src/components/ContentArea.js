import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Chip, Container, Fab, Grid, IconButton, Stack, Tab, Tabs, Typography, } from '@mui/material';
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
const tabs = [
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
function Section({ id, alt, children, }) {
    return (_jsx(Box, { id: id, sx: { ...sectionBaseSx, bgcolor: alt ? '#F4F5F8' : '#fff' }, children: _jsx(Container, { maxWidth: "lg", children: children }) }));
}
function ShareInline() {
    return (_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", mt: 4, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 700, letterSpacing: '0.08em' }, children: "SHARE" }), _jsx(IconButton, { size: "small", children: _jsx(XIcon, { fontSize: "small" }) }), _jsx(IconButton, { size: "small", children: _jsx(LinkedInIcon, { fontSize: "small" }) }), _jsx(IconButton, { size: "small", children: _jsx(FacebookIcon, { fontSize: "small" }) }), _jsx(IconButton, { size: "small", children: _jsx(LinkIcon, { fontSize: "small" }) })] }));
}
export default function ContentArea() {
    const [activeTab, setActiveTab] = useState('vision');
    const [mobileShareOpen, setMobileShareOpen] = useState(false);
    const dataItems = useMemo(() => [
        {
            key: 'services',
            title: 'Data Hub Services',
            icon: _jsx(StorageIcon, { sx: { color: 'primary.main' } }),
            body: 'Centralized access to policy datasets, metadata repositories, and quality-controlled evidence resources.',
        },
        {
            key: 'technical',
            title: 'Technical Development',
            icon: _jsx(EngineeringIcon, { sx: { color: 'primary.main' } }),
            body: 'Scalable platform support for dashboards, policy tools, and collaborative research infrastructure.',
        },
        {
            key: 'analytics',
            title: 'Policy Analytics',
            icon: _jsx(InsightsIcon, { sx: { color: 'primary.main' } }),
            body: 'Advanced modelling and analysis to inform policy design, implementation, and measurable outcomes.',
        },
        {
            key: 'capacity',
            title: 'Capacity Building',
            icon: _jsx(TrendingUpIcon, { sx: { color: 'primary.main' } }),
            body: 'Training modules and institutional capability programmes for data-led public policy practice.',
        },
    ], []);
    useEffect(() => {
        const sections = tabs
            .map((tab) => document.getElementById(`section-${tab.id}`))
            .filter((el) => Boolean(el));
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]) {
                setActiveTab(visible[0].target.id.replace('section-', ''));
            }
        }, { rootMargin: '-35% 0px -45% 0px', threshold: [0.25, 0.5, 0.75] });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: {
                    position: 'sticky',
                    top: { xs: 68, md: 78 },
                    zIndex: 40,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'rgba(255,255,255,0.96)',
                    backdropFilter: 'blur(10px)',
                }, children: _jsx(Container, { maxWidth: "lg", sx: { py: 1.3 }, children: _jsx(Tabs, { value: activeTab, variant: "scrollable", scrollButtons: false, sx: {
                            minHeight: 46,
                            '& .MuiTabs-indicator': { height: 3, borderRadius: 3, bgcolor: 'secondary.main' },
                        }, children: tabs.map((tab) => (_jsx(Tab, { value: tab.id, onClick: () => document.getElementById(`section-${tab.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), label: tab.label, sx: {
                                textTransform: 'none',
                                minHeight: 44,
                                minWidth: 'fit-content',
                                px: 2,
                                fontWeight: activeTab === tab.id ? 700 : 600,
                                color: activeTab === tab.id ? 'primary.main' : 'text.secondary',
                            } }, tab.id))) }) }) }), _jsx(Section, { id: "section-vision", children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderLeft: '4px solid', borderLeftColor: 'primary.main', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.5 }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2 }, children: "Vision" }), _jsx(Typography, { color: "text.secondary", sx: { fontSize: '1.05rem', lineHeight: 1.85 }, children: "To shape public policy through rigorous research, practical education, and sustained institutional engagement." })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderLeft: '4px solid', borderLeftColor: 'primary.main', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.5 }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.9rem', md: '2.4rem' }, mb: 2 }, children: "Mission" }), _jsxs(Stack, { spacing: 1.4, children: [_jsxs(Typography, { color: "text.secondary", sx: { fontSize: '1.05rem', lineHeight: 1.75 }, children: [_jsx("strong", { children: "01." }), " Deliver policy-relevant education and high-quality research."] }), _jsxs(Typography, { color: "text.secondary", sx: { fontSize: '1.05rem', lineHeight: 1.75 }, children: [_jsx("strong", { children: "02." }), " Build leaders capable of designing and implementing policy."] }), _jsxs(Typography, { color: "text.secondary", sx: { fontSize: '1.05rem', lineHeight: 1.75 }, children: [_jsx("strong", { children: "03." }), " Collaborate with institutions to drive measurable public impact."] })] })] }) }) })] }) }), _jsxs(Section, { id: "section-education", alt: true, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }, children: "Education" }), _jsx(Typography, { color: "text.secondary", sx: { maxWidth: 900, fontSize: '1.05rem', lineHeight: 1.85 }, children: "Our Gender Lens offers diverse programmes designed to equip participants with the knowledge and skills to analyse complex policy challenges and contribute to evidence-based policy decisions." }), _jsx(Grid, { container: true, spacing: 3, sx: { mt: 1 }, children: [
                            { tag: 'PGP Specialisation', title: 'Public Policy Track', text: 'Policy-focused coursework integrated with management and leadership training for future decision-makers.' },
                            { tag: 'AMPPP', title: 'Advanced Management Programme in Public Policy', text: 'Flagship executive pathway for practitioners in governance, regulation, and public institutions.' },
                            { tag: 'Legislative Support', title: 'Parliamentary & Legislative Programme', text: 'Capacity development support for elected representatives, policy teams, and legislative researchers.' },
                            { tag: 'Training', title: 'Education Training', text: 'Workshops for state and central officers on policy analysis, implementation, and institutional reform.' },
                        ].map((card) => (_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: {
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 3,
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                                }, children: _jsxs(CardContent, { sx: { p: 3.2 }, children: [_jsx(Chip, { label: card.tag, size: "small", sx: { mb: 1.6, fontWeight: 700, bgcolor: '#eaf0ff', color: 'primary.main' } }), _jsx(Typography, { variant: "h3", sx: { fontSize: { xs: '1.5rem', md: '1.9rem' }, mb: 1.4 }, children: card.title }), _jsx(Typography, { color: "text.secondary", sx: { mb: 2.2, lineHeight: 1.8 }, children: card.text }), _jsx(Button, { sx: { textTransform: 'none', fontWeight: 700, px: 0 }, children: "Know More \u2192" })] }) }) }, card.title))) }), _jsxs(Box, { sx: { mt: 4, bgcolor: 'primary.main', color: '#fff', borderRadius: 3, p: { xs: 3.2, md: 4.5 } }, children: [_jsx(Typography, { variant: "h3", sx: { color: '#fff', fontSize: { xs: '1.9rem', md: '2.5rem' }, mb: 1.4 }, children: "Knowledge Partner for a Sustainable Future" }), _jsx(Typography, { sx: { maxWidth: 900, opacity: 0.95, lineHeight: 1.8 }, children: "Empowering future leaders with climate and sustainability insights to drive transparent, evidence-based, and durable public policy outcomes." }), _jsx(Button, { variant: "contained", color: "secondary", sx: { mt: 2.4, textTransform: 'none', fontWeight: 700, boxShadow: 'none' }, children: "Know More" })] }), _jsx(ShareInline, {})] }), _jsxs(Section, { id: "section-research", children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }, children: "Research" }), _jsx(Stack, { spacing: 2.5, children: [
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
                        ].map((paper) => (_jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3 }, children: _jsxs(CardContent, { sx: { p: 3.2 }, children: [_jsx(Chip, { label: "Published Papers", size: "small", sx: { bgcolor: 'secondary.main', color: '#fff', fontWeight: 700, mb: 1.5 } }), _jsx(Typography, { variant: "h3", sx: { fontSize: { xs: '1.45rem', md: '1.95rem' }, mb: 1.2 }, children: _jsx(Box, { component: "a", href: "#", sx: { color: 'inherit', textDecoration: 'none', '&:hover': { color: 'primary.main' } }, children: paper.title }) }), _jsx(Typography, { color: "text.secondary", sx: { mb: 1.4 }, children: paper.authors }), _jsx(Chip, { label: paper.year, variant: "outlined", size: "small" })] }) }, paper.title))) }), _jsx(Button, { variant: "contained", color: "secondary", sx: { mt: 3, textTransform: 'none', fontWeight: 700, boxShadow: 'none' }, children: "View All Research \u2192" }), _jsx(ShareInline, {})] }), _jsxs(Section, { id: "section-datahub", alt: true, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }, children: "Data Hub" }), _jsx(Typography, { color: "text.secondary", sx: { maxWidth: 920, lineHeight: 1.85, mb: 2 }, children: "The Data Hub centralizes institutional data capabilities across policy research programmes, enabling streamlined workflows, stronger governance, and high-quality decision support." }), _jsx(Grid, { container: true, spacing: 2.2, children: dataItems.map((item) => (_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Accordion, { disableGutters: true, elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: '14px !important', bgcolor: '#fff' }, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), children: _jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", children: [item.icon, _jsx(Typography, { sx: { fontWeight: 700 }, children: item.title })] }) }), _jsx(AccordionDetails, { children: _jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.75 }, children: item.body }) })] }) }, item.key))) })] }), _jsxs(Section, { id: "section-news", children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }, children: "News" }), _jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.85, maxWidth: 900 }, children: "Latest institute announcements, policy updates, event highlights, and institutional milestones." })] }), _jsxs(Section, { id: "section-projects", alt: true, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }, children: "Projects" }), _jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.85, maxWidth: 900 }, children: "A portfolio of active and completed projects spanning governance, public finance, development, and climate policy." })] }), _jsxs(Section, { id: "section-people", children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '2rem', md: '2.8rem' }, mb: 1.5 }, children: "People" }), _jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.85, maxWidth: 900 }, children: "Meet our faculty, researchers, policy practitioners, and interdisciplinary teams driving institutional impact." })] }), _jsx(Box, { sx: { py: { xs: 7, md: 9 }, bgcolor: '#F4F5F8' }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 2.2, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3 }, children: _jsxs(CardContent, { sx: { p: 3.1 }, children: [_jsx(Typography, { variant: "overline", sx: { fontWeight: 700, color: 'text.secondary' }, children: "Quick Link" }), _jsx(Typography, { variant: "h6", sx: { mt: 0.5, mb: 1.5, fontWeight: 700 }, children: "Guidelines for Research Blogs" }), _jsx(Button, { sx: { textTransform: 'none', fontWeight: 700, px: 0 }, children: "Open \u2192" })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3 }, children: _jsxs(CardContent, { sx: { p: 3.1 }, children: [_jsx(Typography, { variant: "overline", sx: { fontWeight: 700, color: 'text.secondary' }, children: "Updates" }), _jsx(Typography, { variant: "h6", sx: { mt: 0.5, mb: 1.5, fontWeight: 700 }, children: "Newsletters" }), _jsx(Button, { sx: { textTransform: 'none', fontWeight: 700, px: 0 }, children: "Open \u2192" })] }) }) })] }) }) }), _jsxs(Box, { sx: { display: { xs: 'block', md: 'none' }, position: 'fixed', right: 18, bottom: 18, zIndex: 60 }, children: [_jsxs(Stack, { spacing: 1, alignItems: "end", sx: { mb: 1, opacity: mobileShareOpen ? 1 : 0, pointerEvents: mobileShareOpen ? 'auto' : 'none', transition: 'opacity .2s' }, children: [_jsx(Fab, { size: "small", color: "default", children: _jsx(XIcon, { fontSize: "small" }) }), _jsx(Fab, { size: "small", color: "default", children: _jsx(LinkedInIcon, { fontSize: "small" }) }), _jsx(Fab, { size: "small", color: "default", children: _jsx(FacebookIcon, { fontSize: "small" }) }), _jsx(Fab, { size: "small", color: "default", children: _jsx(LinkIcon, { fontSize: "small" }) })] }), _jsx(Fab, { color: "secondary", onClick: () => setMobileShareOpen((v) => !v), "aria-label": "Share", children: mobileShareOpen ? _jsx(CloseIcon, {}) : _jsx(ShareIcon, {}) })] })] }));
}
