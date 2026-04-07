import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { fetchBlogStore, findBlogBySlug } from '../blog/blogClient';
import { useEffect, useMemo, useState } from 'react';
import { MarkdownView } from '../blog/markdownView';
const sectionSx = { py: { xs: 6, md: 9 } };
const explainers = [
    {
        slug: 'sex-vs-gender-are-they-the-same',
        title: 'Sex vs Gender - Are they the Same?',
        author: 'Pinaki Gakhar',
        excerpt: 'Sex refers to biological traits, while gender relates to social roles, identity and expression.',
        paragraphs: [
            'In daily conversations, it is habitual for people to use the terms ‘sex’ and ‘gender’ interchangeably, however, these terms hold separate meanings. The terms ‘sex’ and ‘gender’ have been explored and defined as separate terms in fields such as sociology, anthropology, psychology and gender studies. This differentiation becomes important when treating individuals for mental and physical ailments and has a major effect on their identity.',
            'Sex refers to the physiological characteristics of individuals at birth. These resemble characteristics related to what is commonly attributed to male or female bodies. On the other hand, gender is considered to be a social construct. It is the norms, roles and objects of material culture (clothing, language, toys, etc.) associated with a particular sex. There is no universal understanding of gender because it may differ across cultures and societies. An individual may have a certain sex but identify as a different gender. For example, a biological male may identify with the cultural traits usually assigned to women in that society. This is known as gender non-conformity. Gender, unlike sex, is a spectrum. Individuals may identify as the same gender as their biological sex. They may also identify with a different gender or choose not to identify within the binary male and female categories.',
            'Gender is a core component of an individual’s identity. Inability to express their gender identity may cause severe psychological distress in individuals. It is essential to understand and empathise with an individual’s gender identity to create an inclusive society for all. When provided with the right support, individuals across the spectrum will feel secure and confident in their chosen gender identity.',
        ],
    },
    {
        slug: 'what-is-gender-neutrality',
        title: 'What is Gender Neutrality?',
        author: 'Balijepalli Anjana Devi',
        excerpt: 'Gender neutrality promotes equal treatment and non-judgement of male, female and non-binary individuals.',
        paragraphs: [
            'Gender neutrality emerged as a post-constructivist feminist theory that challenges male and female gender norms to promote gender equality. It is a concept that promotes equal treatment and non-judgement of male, female and non-binary individuals. Gender neutrality reinforces the belief that society, the economy and the law should avoid distinguishing between roles based on people’s sex or gender. It also aspires to challenge restrictive gender norms that underestimate an individual’s capabilities and limit their opportunities. It ensures that every individual has the liberty to pursue their aspirations, avail opportunities and access legal rights regardless of their gender identity.',
            'It is important to note that gender neutrality does not ignore gender identity. It seeks to emphasise the equal treatment of individuals irrespective of gender. It is about recognizing the differences, acknowledging them and understanding how they affect an individual’s path to achieving the opportunities they want in life. To promote egalitarian relationships, becoming self-aware, examining gender stereotypes critically and correcting internal biases is necessary.',
            'Gender neutrality plays a significant role in promoting gender equality through fair and equal systems. To summarise, gender neutrality is a concept that seeks to build a society where individuals are free to reach their full potential without any constraints based on their gender.',
        ],
    },
    {
        slug: 'understanding-gender-dysphoria',
        title: 'Understanding Gender Dysphoria',
        author: 'Pinaki Gakhar',
        excerpt: 'Gender dysphoria can occur when a person\'s gender identity or expression does not align with the gender assigned at birth.',
        paragraphs: [
            'Gender dysphoria happens when one’s gender identity and gender expression do not align. Individuals may be considered to belong to a particular gender identity however identifies with another.',
            'Diagnostic and Statistical Manual of Mental Disorders (DSM- 5) describes gender dysphoria as “marked incongruence between their experienced or expressed gender and the one they were assigned at birth.” Earlier known as Gender Identity Disorder, this condition is found to have adverse effects on the mental health of an individual. It can cause low self esteem, depression, anxiety, tendencies of substance abuse, self harm and suicidal tendency.',
            'Gender development is complex and a combination of heredity and environmental factors. Thus biological and environmental factors can cause this condition in individuals. While not conforming to assigned gender identity in itself is not a mental disorder, gender dysphoria is considered a mental disorder due to the mental pressure it causes. Individuals can get diagnosed for the same with the help of mental health professionals. They can seek counselling and can be guided into the process of transitioning if they are willing.',
            'Everybody has a right to live the way they desire. As friends and family of individuals suffering from gender dysphoria, it is imperative to be supportive and provide them with a safe space to express themselves.',
        ],
    },
];
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
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
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
                } }), _jsxs(CardContent, { sx: { p: 3.2, flex: 1, display: 'flex', flexDirection: 'column' }, children: [_jsx(Typography, { variant: "h5", sx: {
                            mb: 0.6,
                            fontWeight: 700,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            minHeight: '2.6em',
                        }, children: blog.title }), (authorLine || dateLine) && (_jsxs(Typography, { variant: "body2", noWrap: true, sx: { color: 'text.secondary', mb: 1.2 }, title: [authorLine, dateLine].filter(Boolean).join(' · '), children: [authorLine, authorLine && dateLine ? ' · ' : '', dateLine] })), _jsx(Typography, { sx: {
                            color: 'text.secondary',
                            lineHeight: 1.8,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                        }, children: blog.excerpt })] })] }));
}
function HomePage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchBlogStore()
            .then((store) => setBlogs(store.blogs || []))
            .catch(() => setBlogs([]));
    }, []);
    const sortedBlogs = useMemo(() => {
        return [...blogs].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
    }, [blogs]);
    const visibleBlogs = useMemo(() => sortedBlogs.slice(0, 2), [sortedBlogs]);
    return (_jsxs(_Fragment, { children: [_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, sm: 3.5 } }, children: [_jsx(Typography, { variant: "h4", sx: {
                                                    color: 'text.primary',
                                                    mb: 1.6,
                                                    fontSize: { xs: '1.4rem', sm: '2rem' },
                                                    lineHeight: 1.15,
                                                    wordBreak: 'break-word',
                                                }, children: "Vision Statement" }), _jsx(Typography, { sx: { lineHeight: 1.85, color: 'text.secondary', fontSize: { xs: '0.95rem', sm: '1rem' } }, children: "We imagine a world where decisions are guided by evidence, opportunities are shared fairly, and every person \u2014 across genders, communities, and backgrounds \u2014 has the chance to thrive. A world where systems are inclusive, progress is sustainable, and innovation works for everyone." })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, sm: 3.5 } }, children: [_jsx(Typography, { variant: "h4", sx: {
                                                    color: 'text.primary',
                                                    mb: 1.6,
                                                    fontSize: { xs: '1.4rem', sm: '2rem' },
                                                    lineHeight: 1.15,
                                                    wordBreak: 'break-word',
                                                }, children: "Mission Statement" }), _jsx(Typography, { sx: { lineHeight: 1.85, color: 'text.secondary', mb: 2, fontSize: { xs: '0.95rem', sm: '1rem' } }, children: "We exist to turn rigorous research into real-world change. Our work advances gender equity and inclusive development across climate, technology, education, and health. We do this by:" }), _jsxs(Stack, { spacing: 1.2, children: [_jsx(Typography, { sx: { color: 'text.secondary' }, children: "Producing and applying evidence that shapes fair and effective policies and practices" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Centering people of all genders in the design of solutions and systems" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Collaborating across sectors to address structural inequalities together" }), _jsx(Typography, { sx: { color: 'text.secondary' }, children: "Promoting context-aware, sustainable approaches that create long-term impact" })] })] }) }) })] }) }) }), _jsx(Box, { sx: { ...sectionSx, bgcolor: '#F4F5F8' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Blogs" }), _jsx(Typography, { sx: { color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }, children: "Weekly topic-based blogs and monthly policy briefs developed through a structured, collaborative, and peer-reviewed research process." }), _jsx(Grid, { container: true, spacing: 2.5, sx: { mt: 2.5 }, children: visibleBlogs.map((b) => (_jsx(Grid, { size: { xs: 12, md: 6 }, sx: { display: 'flex' }, children: _jsx(BlogCard, { blog: b, height: 220 }) }, b.slug))) })] }) })] }));
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
    const sortedBlogs = useMemo(() => {
        return [...blogs].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
    }, [blogs]);
    const visibleBlogs = sortedBlogs;
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Blogs" }), _jsx(Typography, { sx: { color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }, children: "Structured, evidence-led writing across climate, technology, education, and health with a gender lens. New posts are released weekly." })] }), _jsx(Grid, { container: true, spacing: 2.5, sx: { mt: 1 }, children: visibleBlogs.map((b) => (_jsx(Grid, { size: { xs: 12, md: 6 }, sx: { display: 'flex' }, children: _jsx(BlogCard, { blog: b, height: 240 }) }, b.slug))) })] }) }));
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
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1, wordBreak: 'break-word' }, children: blog.title }), _jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: [blog.authors.join(' and '), " \u00B7 ", formatDate(blog.publishedAt)] })] }), _jsx(Box, { sx: { maxWidth: 920 }, children: _jsx(MarkdownView, { markdown: blog.contentMarkdown }) })] }) }));
}
function ExplainerPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsx(Container, { maxWidth: "lg", children: _jsx(Grid, { container: true, spacing: 2.5, sx: { mt: 0 }, children: explainers.map((explainer) => (_jsx(Grid, { size: { xs: 12, md: 6 }, sx: { display: 'flex' }, children: _jsx(Card, { component: "a", href: `/explainer/${explainer.slug}`, elevation: 0, sx: {
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 3,
                            overflow: 'hidden',
                            width: '100%',
                            transition: 'transform .2s ease, box-shadow .2s ease',
                            '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 },
                        }, children: _jsx(CardContent, { sx: { p: 3.2, flex: 1, display: 'flex', flexDirection: 'column' }, children: _jsxs(Box, { children: [_jsx(Chip, { label: "Explainer", size: "small", sx: {
                                            mb: 1.5,
                                            bgcolor: 'rgba(95,76,128,0.12)',
                                            color: 'text.primary',
                                            fontWeight: 700,
                                        } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 0.6, fontWeight: 700 }, children: explainer.title }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', mb: 1.8 }, children: explainer.author }), _jsx(Divider, { sx: { mb: 1.6 } }), _jsx(Typography, { sx: {
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                        }, children: explainer.excerpt })] }) }) }) }, explainer.slug))) }) }) }));
}
function ExplainerPostPage({ slug }) {
    const explainer = explainers.find((item) => item.slug === slug);
    if (!explainer) {
        return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsx(Container, { maxWidth: "lg", children: _jsx(Typography, { variant: "h4", sx: { color: 'text.primary' }, children: "Explainer not found" }) }) }));
    }
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 3 }, children: [_jsx(Chip, { label: "Explainer", size: "small", sx: {
                                mb: 1.5,
                                bgcolor: 'rgba(95,76,128,0.12)',
                                color: 'text.primary',
                                fontWeight: 700,
                            } }), _jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1, wordBreak: 'break-word' }, children: explainer.title }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: explainer.author })] }), _jsx(Box, { sx: { maxWidth: 920 }, children: _jsx(Stack, { spacing: 2.4, children: explainer.paragraphs.map((paragraph) => (_jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9 }, children: paragraph }, paragraph))) }) })] }) }));
}
function NotFoundPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Page not found" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, maxWidth: 720 }, children: "The page you are looking for does not exist." })] }) }));
}
export default function SitePages({ currentPath }) {
    if (currentPath === '/')
        return _jsx(HomePage, {});
    if (currentPath === '/about-us')
        return _jsx(AboutPage, {});
    if (currentPath === '/people')
        return _jsx(PeoplePage, {});
    if (currentPath.startsWith('/blogs/') && currentPath !== '/blogs') {
        const slug = currentPath.replace(/^\/blogs\//, '');
        return _jsx(BlogPostPage, { slug: slug });
    }
    if (currentPath.startsWith('/explainer/') && currentPath !== '/explainer') {
        const slug = currentPath.replace(/^\/explainer\//, '');
        return _jsx(ExplainerPostPage, { slug: slug });
    }
    if (currentPath === '/blogs')
        return _jsx(BlogsPage, {});
    if (currentPath === '/explainer')
        return _jsx(ExplainerPage, {});
    return _jsx(NotFoundPage, {});
}
