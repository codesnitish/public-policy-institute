import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { fetchBlogStore, findBlogBySlug, getLatestBlog } from '../blog/blogClient';
import { useEffect, useMemo, useState } from 'react';
import { MarkdownView } from '../blog/markdownView';
const sectionSx = { py: { xs: 6, md: 9 } };
function formatDate(yyyyMmDd) {
    // Keep it simple: YYYY-MM-DD -> Month DD, YYYY (en-US)
    // Falls back to raw string if parsing fails.
    const [y, m, d] = yyyyMmDd.split('-').map((v) => Number(v));
    if (!y || !m || !d)
        return yyyyMmDd;
    const date = new Date(Date.UTC(y, m - 1, d));
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}
function BlogCard({ blog, height = 240 }) {
    const authorLine = blog.authors?.length ? blog.authors.join(' and ') : '';
    const dateLine = blog.publishedAt ? formatDate(blog.publishedAt) : '';
    const cover = blog.coverImageUrl || '';
    const bgImage = cover
        ? `linear-gradient(120deg, rgba(95,76,128,0.35), rgba(95,76,128,0.05)), url('${cover}')`
        : "linear-gradient(120deg, rgba(95,76,128,0.35), rgba(95,76,128,0.05))";
    return (_jsxs(Card, { component: "a", href: `/blogs/${blog.slug}`, elevation: 0, sx: {
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            overflow: 'hidden',
            transition: 'transform .2s ease, box-shadow .2s ease',
            '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 },
        }, children: [_jsx(Box, { sx: {
                    height,
                    backgroundImage: bgImage,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                } }), _jsxs(CardContent, { sx: { p: 3.2 }, children: [_jsx(Chip, { label: "Featured", size: "small", sx: { mb: 1.2, fontWeight: 700, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary' } }), _jsx(Typography, { variant: "h5", sx: { mb: 0.6, fontWeight: 700 }, children: blog.title }), (authorLine || dateLine) && (_jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary', mb: 1.2 }, children: [authorLine, authorLine && dateLine ? ' · ' : '', dateLine] })), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.8 }, children: blog.excerpt })] })] }));
}
function HomePage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchBlogStore()
            .then((store) => setBlogs(store.blogs || []))
            .catch(() => setBlogs([]));
    }, []);
    const latestBlog = useMemo(() => getLatestBlog(blogs), [blogs]);
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.5 }, children: [_jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 2 }, children: "Vision Statement" }), _jsx(Typography, { sx: { lineHeight: 1.9, color: 'text.secondary' }, children: "We imagine a world where decisions are guided by evidence, opportunities are shared fairly, and every person \u2014 across genders, communities, and backgrounds \u2014 has the chance to thrive. A world where systems are inclusive, progress is sustainable, and innovation works for everyone." })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.5 }, children: [_jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 2 }, children: "Mission Statement" }), _jsx(Typography, { sx: { lineHeight: 1.9, color: 'text.secondary', mb: 2 }, children: "We exist to turn rigorous research into real-world change. Our work advances gender equity and inclusive development across climate, technology, education, and health. We do this by:" }), _jsxs(Stack, { spacing: 1.2, children: [_jsx(Typography, { sx: { color: 'text.secondary' }, children: "Producing and applying evidence that shapes fair and effective policies and practices" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Centering people of all genders in the design of solutions and systems" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Collaborating across sectors to address structural inequalities together" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Promoting context-aware, sustainable approaches that create long-term impact" })] })] }) }) })] }) }) }), _jsx(Box, { sx: { ...sectionSx, bgcolor: '#F4F5F8' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Blogs" }), _jsx(Typography, { sx: { color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }, children: "Weekly topic-based blogs and monthly policy briefs developed through a structured, collaborative, and peer-reviewed research process." }), latestBlog && _jsx(Box, { sx: { mt: 3 }, children: _jsx(BlogCard, { blog: latestBlog, height: 220 }) })] }) })] }));
}
function AboutPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 2 }, children: "About Us" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "Our Gender Lens is a gender-responsive research think tank focused on using evidence to inform more inclusive and equitable systems. We believe research should move beyond theory and directly contribute to better policies, stronger institutions, and meaningful social impact." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "We work across climate, technology, education, and health, examining how these sectors affect people in both rural and urban contexts. Our goal is to understand structural challenges, highlight gaps, and contribute to solutions that are practical, sustainable, and grounded in evidence." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "Our work is guided by three core values: Rigorous Research, Promoting Equity amongst Genders, and Inclusivity." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 3 }, children: "We apply a gender lens as an analytical framework to ensure that policies, systems, and solutions are designed with fairness and context in mind. We recognize that gender intersects with geography, access, and structural inequality, and we aim to reflect these realities in our research." }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "What We Do" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "We produce a range of research and knowledge outputs, including:" }), _jsxs(Stack, { spacing: 1.2, children: [_jsx(Typography, { sx: { color: 'text.secondary' }, children: "Weekly topic-based blogs" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Monthly policy briefs" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Policy papers and research reports" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Primary research studies" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Presentations at conferences and academic forums" })] }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mt: 3 }, children: "Our content is structured, focused, and peer-reviewed. We follow a collaborative editing process to ensure clarity, coherence, and quality in every publication." }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Our Approach" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9 }, children: "We meet regularly to develop ideas, discuss research directions, and refine our work. Collaboration and continuous improvement are central to our model. Through consistent engagement and structured review, we aim to maintain high standards in both analysis and writing." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mt: 2 }, children: "At Our Gender Lens, we are committed to producing research that is evidence-based, context-aware, and designed to contribute to long-term, inclusive development." })] }) }));
}
function PeoplePage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#F4F5F8' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 3 }, children: "Our Team" }), _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.2 }, children: [_jsx(Chip, { label: "Founder", size: "small", sx: { mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1.5 }, children: "Pinaki Gakhar" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "Pinaki Gakhar is the Founder of Our Gender Lens, a new gender-responsive research think tank focused on advancing rigorous, inclusive, and evidence-based policy research. She holds a Master\u2019s in Public Policy from Kautilya School of Public Policy, GITAM University, and a Bachelor's in Sociology (Honours) from MCM DAV College. Her academic foundation blends sociological thinking with structured policy analysis, shaping her systems-oriented approach to research and institutional development." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }, children: "Professionally, she has worked as a Program Associate at the Kautilya School of Public Policy, contributing to stakeholder coordination, research support, data management, institutional communication, and academic process improvement. She has also served as a Research Intern at the Bharti Institute of Public Policy, Indian School of Business, where she worked on projects spanning public finance, AI policy, employment, climate transitions, and public health." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }, children: "She provided early-stage support during the setup phase of Pink Policy Dialogues, contributing to its foundational development. She has delivered paper presentations at academic forums and has two publications to her name, reflecting her commitment to research-driven engagement and policy impact." })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.2 }, children: [_jsx(Chip, { label: "Research Lead", size: "small", sx: { mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1.5 }, children: "B. Anjana Devi" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "B. Anjana Devi is the research lead of Our Gender Lens. She holds a Master's in Public Policy (MPP) from Kautilya School of Public Policy (KSPP), GITAM University and a Bachelor's degree in economics (minor in history and public administration from K.L. (KLEF Deemed to be University). Her education provides her a framework to analyse policy decisions from a rational, data-centric, scientific perspective." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }, children: "Her professional journey has so far been independent freelance assignments." })] }) }) })] })] }) }));
}
function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchBlogStore()
            .then((store) => setBlogs(store.blogs || []))
            .catch(() => setBlogs([]));
    }, []);
    const latestBlog = useMemo(() => getLatestBlog(blogs), [blogs]);
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Blogs" }), _jsx(Typography, { sx: { color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }, children: "Structured, evidence-led writing across climate, technology, education, and health with a gender lens. New posts are released weekly." })] }), latestBlog && _jsx(BlogCard, { blog: latestBlog, height: 240 })] }) }));
}
function BlogPostPage({ slug }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchBlogStore()
            .then((store) => setBlogs(store.blogs || []))
            .catch(() => setBlogs([]));
    }, []);
    const blog = useMemo(() => findBlogBySlug(blogs, slug), [blogs, slug]);
    if (!blog) {
        return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsx(Container, { maxWidth: "lg", children: _jsx(Typography, { variant: "h4", sx: { color: 'text.primary' }, children: "Blog not found" }) }) }));
    }
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1 }, children: blog.title }), _jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: [blog.authors.join(' and '), " \u00B7 ", formatDate(blog.publishedAt)] })] }), _jsx(Box, { sx: { maxWidth: 920 }, children: _jsx(MarkdownView, { markdown: blog.contentMarkdown }) })] }) }));
}
function BookReviewsPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 2 }, children: "Book Reviews" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 3 }, children: "Critical reviews of books relevant to gender equity, inclusive development, governance, and public policy practice." })] }) }));
}
function MediaReviewsPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#F4F5F8' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 2 }, children: "Media Reviews" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 3 }, children: "Media narratives and public discourse examined through evidence, context, and inclusivity to support informed policy conversations." })] }) }));
}
export default function SitePages({ currentPath }) {
    if (currentPath === '/about-us')
        return _jsx(AboutPage, {});
    if (currentPath === '/people')
        return _jsx(PeoplePage, {});
    if (currentPath.startsWith('/blogs/') && currentPath !== '/blogs') {
        const slug = currentPath.replace(/^\/blogs\//, '');
        return _jsx(BlogPostPage, { slug: slug });
    }
    if (currentPath === '/blogs')
        return _jsx(BlogsPage, {});
    if (currentPath === '/book-reviews')
        return _jsx(BookReviewsPage, {});
    if (currentPath === '/media-reviews')
        return _jsx(MediaReviewsPage, {});
    return _jsx(HomePage, {});
}
