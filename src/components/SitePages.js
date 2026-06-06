import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Card, CardContent, Chip, Container, Dialog, DialogContent, Divider, Grid, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from '@mui/material';
import { fetchBlogStore, findBlogBySlug } from '../blog/blogClient';
import { useEffect, useMemo, useState } from 'react';
import { MarkdownView } from '../blog/markdownView';
const sectionSx = { py: { xs: 6, md: 9 } };
const submissionEmail = 'ourgenderlens0317@gmail.com';
const webinarReportPdfUrl = '/events/webinar-report-gender-neutral-approach-to-mental-health.pdf#toolbar=0&navpanes=0&scrollbar=1&download=0';
const upcomingEventFlierUrl = '/events/gendered-futures-registration-flier.jpg';
const guidelineSections = [
    {
        title: 'Blogs',
        subtitle: 'Submit your blog as a Word document',
        bullets: [
            'Submit to ourgenderlens0317@gmail.com',
            'Include a brief bio (100 words)',
            'Word limit: 800–1000 words',
            'AI-generated content is not accepted',
            'Add hyperlinks and references in your submission',
            'Content must be educational in nature (no political opinions encouraged)',
            'Maintain academic rigour',
            'Use British English grammar',
        ],
        formatting: [
            'Times New Roman',
            '12-point font',
            'Double spacing',
            '0.5-inch indentation',
        ],
    },
    {
        title: 'Infographics',
        subtitle: 'Submit the infographic in editable format',
        bullets: [
            'Submit to ourgenderlens0317@gmail.com',
            'Include a brief bio (100 words)',
            'Canva, Word, and PowerPoint are suitable platforms',
            'Infographic must be 2–4 pages',
            'All visual elements including charts, tables, and figures must be cited and editable',
            'Avoid lengthy paragraphs',
            'Avoid academic jargon and write crisp sentences',
            'Articulate the concept comprehensively',
            'Include a reference page citing source reports',
        ],
        formatting: [
            'Times New Roman',
            '12-point font',
        ],
        resources: [
            'HOW TO MAKE INFOGRAPHIC',
            'GENDER PAY GAP INFOGRAPHIC',
        ],
    },
    {
        title: 'Policy Briefs',
        subtitle: 'Submit your policy brief as a Word document',
        bullets: [
            'Submit to ourgenderlens0317@gmail.com',
            'Include a brief bio (100 words)',
            'Word limit: 2000–2500 words',
            'AI-generated content is not accepted',
            'Add hyperlinks and references in your submission',
            'Content must be educational in nature (no political opinions encouraged)',
            'Maintain academic rigour',
            'Use British English grammar',
        ],
        formatting: [
            'Times New Roman',
            '12-point font',
            'Double spacing',
            '0.5-inch indentation',
        ],
        resources: [
            'HOW TO WRITE A POLICY BRIEF',
            'UN POLICY BRIEF',
            'OECD POLICY BRIEF',
        ],
    },
    {
        title: 'Policy Paper',
        subtitle: 'Submit your policy paper as a Word document',
        bullets: [
            'Submit to ourgenderlens0317@gmail.com',
            'Include a brief bio (100 words)',
            'Word limit: 5000 words',
            'AI-generated content is not accepted',
            'Add hyperlinks and references in your submission',
            'Content must be educational in nature (no political opinions encouraged)',
            'Maintain academic rigour',
            'Use British English grammar',
        ],
        formatting: [
            'Times New Roman',
            '12-point font',
            'Double spacing',
            '0.5-inch indentation',
        ],
        resources: [
            'OECD POLICY PAPER',
            'NITI AAYOG',
        ],
    },
];
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
    {
        slug: 'understanding-gender-expression',
        title: 'Understanding Gender Expression',
        author: 'Balijepalli Anjana Devi',
        excerpt: 'Gender expression is how a person presents themselves through clothing, behaviour, mannerisms and voice.',
        paragraphs: [
            'Gender expression is how a person presents themselves through their mannerisms, clothing, behaviour, and voice. It is a form of self expression. What a person chooses to wear, how their hairstyle is and how they speak is a matter of convenience.',
            'It is important to note that gender expression does not reflect what an individual’s gender identity is. For example, women who display masculine traits are often labelled as tomboys. But they could identify as female. Likewise, men who display traditionally defined feminine qualities could identify as male. Similarly, a person with an androgynous gender expression, meaning someone who embodies a blend of masculine and feminine personality traits, does not conform to social norms. It is also not an indication of their gender identity. Their gender identity could be female, non-binary or male.',
            'A society should acknowledge and give individuals space to evolve into their gender identity and choose their gender expression. We should not force and shame anyone who doesn’t subscribe to socially defined norms. It affects a person’s mental well-being. Therefore, we should not dictate, assume or judge somebody’s gender identity through their self-expression or gender expression.',
        ],
    },
    {
        slug: 'what-is-gender-identity',
        title: 'What is Gender Identity?',
        author: 'Balijepalli Anjana Devi',
        excerpt: 'Gender identity refers to the gender an individual relates to psychologically, including identities beyond the binary.',
        paragraphs: [
            'Gender identity refers to the gender an individual relates to psychologically. It can be the sex assigned at birth, male or female or it could be an individual who finds themselves on the spectrum of gender identities beyond the binary of male and female, these could be non-binary, transgender man, transgender woman, genderqueer, genderfluid, agender or any gender on the spectrum. Biological factors such as hormones and genetics influence a person’s gender identity.',
            'Social factors do have a significant impact on how comfortably a person evolves into their gender identity. The renowned psychologist Sandra Bem explains how culture shapes gender identity from early childhood through her gender schema theory. She also challenged gender stereotypes and promoted an individual’s freedom to determine their gender.',
            'Many people may grow into a gender identity through their lived experiences as well. If an individual is confused, to ease into their identity, they may refer to the Gender Identity Test or the Bem Sex Role Inventory to figure out if they are on the gender spectrum. These resources validate one’s struggle but do not confirm what their gender identity is. Therefore, one must visit a professional gender counsellor for proper guidance.',
        ],
    },
    {
        slug: 'gender-continuum-term-and-tool',
        title: 'Gender Continuum - Term and Tool',
        author: 'Our Gender Lens Editorial Team',
        excerpt: 'Gender continuum describes gender as a spectrum and can also be used as a tool to assess change in gender awareness.',
        paragraphs: [
            'It is a known fact that gender is beyond the binary of men and women. In the study of human sexuality, it is understood that gender is not binary but a spectrum. It is not static categories but continuous. It is a combination of traits including mental, physiological, emotional and behavioural traits that can be attributed to men and women.',
            'Studies have found that given a chance to present the identification with gender on a spectrum, individuals that do not conform to binary categories of gender present a range of identification with the genders. Presenting an insight into gender being a spectrum.',
            'Gender continuum thesis therefore refers to this continued gender expression beyond the binary categories of men and women. It consists of individuals identifying as bigender, thirdgender, pangender, genderqueer, and agender etc.',
            'Gender continuum as a tool or a framework that can be used to assess the impact of interventions that target gender blind individuals to gender transformed. It allows assessors to understand if their interventions could create awareness to shift perceptions of individuals who ignore gender norms and roles to become more accepting and desirous of promoting gender equality.',
        ],
    },
    {
        slug: 'understanding-the-term-genderqueer',
        title: 'Understanding the Term "Genderqueer"',
        author: 'Riddhi Agnihotri',
        excerpt: "Genderqueer describes people whose gender identity falls outside standard male-female categories and may be fluid, mixed, or entirely non-binary.",
        paragraphs: [
            "Genderqueer describes people whose gender identity does not fit into the standard male or female categories. Instead of identifying with just one side of the gender spectrum, genderqueer individuals may feel like a combination of both masculine and feminine, somewhere in the middle, or completely outside these traditional labels altogether.",
            "The experience of being genderqueer varies greatly from person to person, shaped by individual feelings, cultural background, and life circumstances. A genderqueer person might describe their identity as fluid, shifting between masculine and feminine expressions depending on the context, or they might feel equally connected to both. Others experience gender as something entirely separate from the binary altogether.",
            "This diversity in experience is why related terms like gender fluid and non-binary often get used alongside genderqueer. These labels overlap significantly because they all describe the shared experience of stepping outside conventional gender boundaries. Yet they remain distinct concepts since every individual's journey with gender is personal and unique. While genderqueer might resonate with one person, another might prefer a different term or choose to forgo labels entirely.",
            "One major challenge is that genderqueer identities are not widely discussed or understood by most people. This leads to genderqueer individuals feeling invisible and facing social neglect in their communities. Creating more awareness and acceptance of these identities is important for building spaces where gender-diverse people can freely express themselves without fear of judgment or rejection.",
        ],
    },
    {
        slug: 'what-is-homophily',
        title: 'What is Homophily?',
        author: 'Aastha Kaura',
        publishedAt: '2026-05-25',
        excerpt: 'Homophily is the tendency of people to connect with others who are similar in background, interests, opinions or traits.',
        paragraphs: [
            'One can often find themselves relating to people with shared interests across sports, cuisine, hobbies, etc. However, one may also have heard opposites attract. In social network theory, it is believed like attracts like and similarity breeds connect. This phenomenon is called homophily.',
            'Homophily, a term coined by sociologists Paul F. Lazarsfeld and Robert K Merton in 1954, refers to the tendency of individuals to network and associate with others who are like them. This likeness can be based on different factors, such as demographics, behaviours, and traits, shaping how networks form and progress across societies and organizations.',
            'It has powerful implications for the information they receive, the attitude they form, and the interactions they experience. Homophily exists in two forms- status and value. Status Homophily refers to friendships resulting from shared backgrounds. People of the same age, gender, class, and language, etc. would prefer to associate with one another. Whereas friendships formed by shared thoughts and interests are called Value Homophily. People with the same opinions, hobbies, interests, and values would prefer to associate with one another.',
            'Homophily improves social bonding and trust. But it can also limit diversity, increase inequality, and create exclusionary social structures. Homophily may create echo chambers where people mostly hear the same opinions and are unaware of or closed off to different perspectives and ideas.',
            'Too much similarity can, in turn, reduce creativity and innovation by limiting different perspectives. Homophily can sometimes lead to invisible discrimination behind “natural preference.” Therefore it may limit people’s social world.',
        ],
    },
];
const whatWeDoItems = [
    'Policy briefs',
    'Policy papers and research reports',
    'Primary research studies',
    'Impact assessment',
    'Awareness campaigns',
    'Webinars',
    'Presentations at conferences and academic forums',
    'Blogs and explainer articles',
];
const volunteerGroups = [
    {
        title: 'Research Volunteers',
        text: 'Supporting studies, documentation, data collection, policy analysis, and knowledge-building initiatives that strengthen evidence-based advocacy.',
    },
    {
        title: 'Communications Volunteers',
        text: 'Helping amplify OGL’s voice through content writing, storytelling, social media, campaigns, public relations, and strategic communication.',
    },
    {
        title: 'Programs Volunteers',
        text: 'Working closely with teams to support workshops, events, community initiatives, and on-ground program execution.',
    },
    {
        title: 'Tech Volunteers',
        text: 'Contributing through website management, digital tools, technical support, innovation, and technology-driven solutions for impact.',
    },
    {
        title: 'Outreach Volunteers',
        text: 'Building partnerships, engaging communities, connecting with stakeholders, and expanding the reach of OGL’s initiatives.',
    },
    {
        title: 'Design Volunteers',
        text: 'Creating visual identities, campaign creatives, presentations, digital assets, and communication material that bring ideas to life.',
    },
    {
        title: 'HR & People Operations Volunteers',
        text: 'Supporting volunteer engagement, onboarding, coordination, team well-being, and strengthening OGL’s internal culture.',
    },
];
const volunteerRoster = [
    { role: 'Research', names: ['Nishant', 'Aastha', 'Palak', 'Pragya', 'Sang', 'Rishab', 'Simeon', 'Ridhi', 'Priyadarshan', 'Eugene'] },
    { role: 'Research and Communications', names: ['Samuel'] },
    { role: 'Communications', names: ['Gukan'] },
    { role: 'Senior Volunteer', names: ['Dr. Neha'] },
    { role: 'HR Volunteer', names: ['Akansha'] },
];
const volunteers = volunteerRoster.flatMap((group) => group.names.map((name) => ({ name, role: group.role })));
const collaborators = [
    'Femme 2 Earth',
    'Addie’s Afrique Foundation',
    'SheCivic India',
    'Friends of Youth and Children Organisation',
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
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 2 }, children: "About Us" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "Our Gender Lens is a not for profit gender-responsive research platform focused on using evidence to inform more inclusive and equitable systems. We believe research should move beyond theory and directly contribute to better policies, stronger institutions, and meaningful social impact." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "We work across climate, technology, education, and health, examining how these sectors affect people in both rural and urban contexts. Our goal is to understand structural challenges, highlight gaps, and contribute to solutions that are practical, sustainable, and grounded in evidence." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "Our work is guided by three core values: Rigorous Research, Promoting Equity amongst Genders, and Inclusivity." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 3 }, children: "We apply a gender lens as an analytical framework to ensure that policies, systems, and solutions are designed with fairness and context in mind. We recognize that gender intersects with geography, access, and structural inequality, and we aim to reflect these realities in our research." }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "What We Do" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "We produce a range of research and knowledge outputs, including:" }), _jsx(Stack, { spacing: 1.2, children: whatWeDoItems.map((item) => (_jsxs(Typography, { sx: { color: 'text.secondary' }, children: ["\u2022 ", item] }, item))) }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mt: 3 }, children: "Our content is structured, focused, and peer-reviewed. We follow a collaborative editing process to ensure clarity, coherence, and quality in every publication." }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Our Approach" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9 }, children: "We meet regularly to develop ideas, discuss research directions, and refine our work. Collaboration and continuous improvement are central to our model. Through consistent engagement and structured review, we aim to maintain high standards in both analysis and writing." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mt: 2 }, children: "At Our Gender Lens, we are committed to producing research that is evidence-based, context-aware, and designed to contribute to long-term, inclusive development." }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Our Team" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "Our work is shaped by researchers, communications contributors, program volunteers, designers, people operations volunteers, and quiet supporters who bring evidence, creativity, and care to every initiative." }), _jsxs(Grid, { container: true, spacing: 2.5, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, sm: 3.2 } }, children: [_jsx(Chip, { label: "Founder", size: "small", sx: { mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1 }, children: "Pinaki Gakhar" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "Founder of Our Gender Lens, focused on advancing rigorous, inclusive, and evidence-based policy research." })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, sm: 3.2 } }, children: [_jsx(Chip, { label: "Research Lead", size: "small", sx: { mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1 }, children: "B. Anjana Devi" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "Research lead of Our Gender Lens, bringing analytical training and a commitment to evidence-based inquiry." })] }) }) })] }), _jsx(Divider, { sx: { my: 3 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Our Collaborators" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, mb: 2 }, children: "We collaborate with aligned organisations to build conversations, campaigns, and research efforts around gender equity and inclusion." }), _jsx(Stack, { direction: "row", spacing: 1.2, useFlexGap: true, flexWrap: "wrap", children: collaborators.map((name) => (_jsx(Chip, { label: name, sx: { bgcolor: 'rgba(95,76,128,0.1)', color: 'text.primary', fontWeight: 700 } }, name))) })] }) }));
}
function GuidelinesPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#F4F5F8' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Guidelines" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, maxWidth: 920, mb: 2 }, children: "We welcome educational, evidence-based submissions across multiple formats. Please follow the relevant submission and formatting guidelines below before sending your work." }), _jsxs(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: ["Submission email: ", _jsx(Box, { component: "span", sx: { fontWeight: 700, color: 'text.primary' }, children: submissionEmail })] })] }), _jsx(Grid, { container: true, spacing: 3, children: guidelineSections.map((section) => (_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, sm: 3.2 } }, children: [_jsx(Chip, { label: section.title, size: "small", sx: { mb: 1.5, bgcolor: 'rgba(95,76,128,0.12)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1 }, children: section.subtitle }), _jsx(Stack, { spacing: 1, sx: { mb: 2.5 }, children: section.bullets.map((item) => (_jsxs(Typography, { sx: { color: 'text.secondary', lineHeight: 1.8 }, children: ["\u2022 ", item] }, item))) }), _jsx(Divider, { sx: { my: 2 } }), _jsx(Typography, { variant: "subtitle1", sx: { color: 'text.primary', fontWeight: 700, mb: 1 }, children: "APA 7th Edition Formatting" }), _jsx(Stack, { spacing: 0.8, children: section.formatting.map((item) => (_jsxs(Typography, { sx: { color: 'text.secondary', lineHeight: 1.8 }, children: ["\u2022 ", item] }, item))) }), 'resources' in section && section.resources ? (_jsxs(_Fragment, { children: [_jsx(Divider, { sx: { my: 2 } }), _jsx(Typography, { variant: "subtitle1", sx: { color: 'text.primary', fontWeight: 700, mb: 1 }, children: "Reference Resources" }), _jsx(Stack, { spacing: 0.8, children: section.resources.map((item) => (_jsxs(Typography, { sx: { color: 'text.secondary', lineHeight: 1.8 }, children: ["\u2022 ", item] }, item))) })] })) : null] }) }) }, section.title))) })] }) }));
}
function PeoplePage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#F4F5F8' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Our Team" }), _jsx(Typography, { sx: { color: 'text.secondary', maxWidth: 920, lineHeight: 1.85 }, children: "At OGL, our work is powered by a passionate network of people who contribute their skills, creativity, and commitment across diverse areas of impact." })] }), _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.2 }, children: [_jsx(Chip, { label: "Founder", size: "small", sx: { mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1.5 }, children: "Pinaki Gakhar" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "Pinaki Gakhar is the Founder of Our Gender Lens, a new gender-responsive research think tank focused on advancing rigorous, inclusive, and evidence-based policy research. She holds a Master\u2019s in Public Policy from Kautilya School of Public Policy, GITAM University, and a Bachelor\u2019s in Sociology (Honours) from MCM DAV College. Her academic foundation blends sociological thinking with structured policy analysis, shaping her systems-oriented approach to research and institutional development." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }, children: "Professionally, she has worked as a Program Associate at the Kautilya School of Public Policy, contributing to stakeholder coordination, research support, data management, institutional communication, and academic process improvement. She has also served as a Research Intern at the Bharti Institute of Public Policy, Indian School of Business, where she worked on projects spanning public finance, AI policy, employment, climate transitions, and public health." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }, children: "She provided early-stage support during the setup phase of Pink Policy Dialogues, contributing to its foundational development. She has delivered paper presentations at academic forums and has two publications to her name, reflecting her commitment to research-driven engagement and policy impact." })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 3.2 }, children: [_jsx(Chip, { label: "Research Lead", size: "small", sx: { mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1.5 }, children: "B. Anjana Devi" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "B. Anjana Devi is the research lead of Our Gender Lens. She holds a Master\u2019s in Public Policy (MPP) from Kautilya School of Public Policy (KSPP), GITAM University and a Bachelor\u2019s degree in economics, with a minor in history and public administration, from K.L. (KLEF Deemed to be University). Her education provides her analytical training and a deep commitment to rigorous, evidence-based inquiry." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }, children: "Professionally, Anjana has worked as a freelance ghost writer providing her clients with comprehensive literature reviews, data analysis, analytical briefs, and refined academic papers. Additionally, she worked as a research intern at the Bharti Institute of Public Policy, Indian School of Business, where she assisted the research team in the publication process of policy papers covering climate, economy, and agriculture." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }, children: "In her free time, Anjana enjoys singing pop songs, songwriting, writing sad poetry, and attempting to make Do It Yourself stuff with dehydrated flowers." })] }) }) })] }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Volunteers" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, maxWidth: 940, mb: 2 }, children: "From conducting meaningful research to building strong communities, our volunteers play an active role in shaping our initiatives and driving conversations around gender equity and inclusion." }), _jsx(TableContainer, { component: Box, sx: { mb: 4, overflowX: 'auto', borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }, children: _jsxs(Table, { size: "small", "aria-label": "Volunteer focus areas", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { sx: { color: 'text.primary', fontWeight: 800, width: { xs: 170, md: 260 }, py: 1.6 }, children: "Volunteer Area" }), _jsx(TableCell, { sx: { color: 'text.primary', fontWeight: 800, py: 1.6 }, children: "Contribution" })] }) }), _jsx(TableBody, { children: volunteerGroups.map((group) => (_jsxs(TableRow, { children: [_jsx(TableCell, { sx: { color: 'text.primary', fontWeight: 700, verticalAlign: 'top', py: 1.8 }, children: group.title }), _jsx(TableCell, { sx: { color: 'text.secondary', lineHeight: 1.75, py: 1.8 }, children: group.text })] }, group.title))) })] }) }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1.5 }, children: "Volunteer Roster" }), _jsx(Grid, { container: true, spacing: 2, children: volunteers.map((volunteer) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsxs(CardContent, { sx: { p: 2.4 }, children: [_jsx(Typography, { variant: "h6", sx: { color: 'text.primary', mb: 0.6 }, children: volunteer.name }), _jsx(Chip, { label: volunteer.role, size: "small", sx: { bgcolor: 'rgba(95,76,128,0.1)', color: 'text.primary', fontWeight: 700 } })] }) }) }, `${volunteer.name}-${volunteer.role}`))) }), _jsx(Divider, { sx: { my: 4 } }), _jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Silent Partners" }), _jsxs(Stack, { spacing: 2, children: [_jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "Behind every conversation, campaign, research project, and community initiative at OGL are individuals who contribute quietly yet meaningfully to our journey." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "Our Silent Partners are volunteers, mentors, researchers, professionals, students, and allies who choose to support our work behind the scenes \u2014 through ideas, time, guidance, outreach, documentation, research, strategy, and emotional labour." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "They may not always be visible on stage or social media, but their contributions shape the impact we create every day." }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85 }, children: "At OGL, we deeply value collective effort and believe that meaningful change is built not only by voices that are heard loudly, but also by those who work consistently and compassionately in the background." })] })] }) }));
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
function CollaboratorsPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Our Collaborators" }), _jsx(Typography, { sx: { color: 'text.secondary', maxWidth: 920, lineHeight: 1.85 }, children: "Our collaborations help extend OGL\u2019s research, campaigns, and community conversations through shared commitments to gender equity, inclusion, and evidence-informed change." })] }), _jsx(Grid, { container: true, spacing: 2.5, children: collaborators.map((name) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }, children: _jsx(CardContent, { sx: { p: 3, minHeight: 150, display: 'flex', alignItems: 'center' }, children: _jsx(Typography, { variant: "h6", sx: { color: 'text.primary', lineHeight: 1.35 }, children: name }) }) }) }, name))) })] }) }));
}
function EventsPage() {
    const [showWebinarReport, setShowWebinarReport] = useState(false);
    const [showUpcomingEvent, setShowUpcomingEvent] = useState(false);
    const openWebinarReport = () => setShowWebinarReport(true);
    const openUpcomingEvent = () => setShowUpcomingEvent(true);
    const closeUpcomingEvent = () => setShowUpcomingEvent(false);
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Events" }), _jsx(Typography, { sx: { color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }, children: "Reports, reflections, and knowledge outputs from OGL events and public conversations." })] }), _jsx(Card, { elevation: 0, role: "button", tabIndex: 0, onClick: openUpcomingEvent, onKeyDown: (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            openUpcomingEvent();
                        }
                    }, sx: {
                        mb: 3,
                        border: '1px solid',
                        borderColor: 'primary.main',
                        borderRadius: 3,
                        cursor: 'pointer',
                        overflow: 'hidden',
                        bgcolor: '#5F4C80',
                        color: '#fff',
                        transition: 'transform .2s ease, box-shadow .2s ease',
                        '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 },
                        '&:focus-visible': { outline: '3px solid rgba(95,76,128,0.28)', outlineOffset: 3 },
                    }, children: _jsx(CardContent, { sx: { p: { xs: 2.5, sm: 3.2 } }, children: _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: "space-between", children: [_jsxs(Box, { children: [_jsx(Chip, { label: "Upcoming Events", size: "small", sx: { mb: 1.2, bgcolor: 'rgba(255,255,255,0.16)', color: '#fff', fontWeight: 800 } }), _jsx(Typography, { variant: "h4", sx: { color: '#fff', fontWeight: 800, lineHeight: 1.2 }, children: "Gendered Futures: Climate Crisis, Inequality & Resilience in the Global South" })] }), _jsx(Typography, { sx: { color: 'rgba(255,255,255,0.86)', fontWeight: 700, whiteSpace: { sm: 'nowrap' } }, children: "View flyer" })] }) }) }), _jsx(Grid, { container: true, spacing: 2.5, children: _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { elevation: 0, role: "button", tabIndex: 0, onClick: openWebinarReport, onKeyDown: (event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    openWebinarReport();
                                }
                            }, sx: {
                                border: '1px solid',
                                borderColor: showWebinarReport ? 'primary.main' : 'divider',
                                borderRadius: 3,
                                cursor: 'pointer',
                                transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
                                '&:hover': { transform: 'translateY(-2px)', boxShadow: 3, borderColor: 'primary.main' },
                                '&:focus-visible': { outline: '3px solid rgba(95,76,128,0.28)', outlineOffset: 3 },
                            }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, sm: 3.2 } }, children: [_jsx(Chip, { label: "Webinar Report", size: "small", sx: { mb: 1.5, bgcolor: 'rgba(95,76,128,0.12)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 1, fontWeight: 700 }, children: "Webinar report- Gender Neutral Approach To Mental Health" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.8 }, children: "Click to view the report inside this page." })] }) }) }) }), showWebinarReport && (_jsxs(Box, { sx: { mt: 4 }, children: [_jsx(Typography, { variant: "h4", sx: { color: 'text.primary', mb: 1.5 }, children: "Webinar report- Gender Neutral Approach To Mental Health" }), _jsx(Box, { sx: {
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 2,
                                overflow: 'hidden',
                                bgcolor: '#F4F5F8',
                                height: { xs: '72vh', md: '82vh' },
                            }, children: _jsx(Box, { component: "iframe", src: webinarReportPdfUrl, title: "Webinar report- Gender Neutral Approach To Mental Health", onContextMenu: (event) => event.preventDefault(), sx: { display: 'block', width: '100%', height: '100%', border: 0 } }) })] })), _jsx(Dialog, { open: showUpcomingEvent, onClose: closeUpcomingEvent, maxWidth: false, PaperProps: {
                        sx: {
                            width: { xs: '94vw', md: '82vw' },
                            maxWidth: 1100,
                            maxHeight: '92vh',
                            borderRadius: 3,
                            overflow: 'hidden',
                        },
                    }, children: _jsxs(DialogContent, { sx: { p: 0, position: 'relative', bgcolor: '#201844' }, children: [_jsx(IconButton, { "aria-label": "Close upcoming event flyer", onClick: closeUpcomingEvent, sx: {
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    zIndex: 2,
                                    bgcolor: 'rgba(255,255,255,0.92)',
                                    color: 'text.primary',
                                    '&:hover': { bgcolor: '#fff' },
                                }, children: "X" }), _jsx(Box, { component: "img", src: upcomingEventFlierUrl, alt: "Registrations are open for Gendered Futures: Climate Crisis, Inequality and Resilience in the Global South", sx: {
                                    display: 'block',
                                    width: '100%',
                                    maxHeight: '92vh',
                                    objectFit: 'contain',
                                    bgcolor: '#201844',
                                } })] }) })] }) }));
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
                                        } }), _jsx(Typography, { variant: "h5", sx: { color: 'text.primary', mb: 0.6, fontWeight: 700 }, children: explainer.title }), _jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary', mb: 1.8 }, children: [explainer.author, explainer.publishedAt ? ` · ${formatDate(explainer.publishedAt)}` : ''] }), _jsx(Divider, { sx: { mb: 1.6 } }), _jsx(Typography, { sx: {
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
                            } }), _jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1, wordBreak: 'break-word' }, children: explainer.title }), _jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary' }, children: [explainer.author, explainer.publishedAt ? ` · ${formatDate(explainer.publishedAt)}` : ''] })] }), _jsx(Box, { sx: { maxWidth: 920 }, children: _jsx(Stack, { spacing: 2.4, children: explainer.paragraphs.map((paragraph) => (_jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9 }, children: paragraph }, paragraph))) }) })] }) }));
}
function NotFoundPage() {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff' }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.2 }, children: "Page not found" }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.9, maxWidth: 720 }, children: "The page you are looking for does not exist." })] }) }));
}
function ComingSoonPage({ title }) {
    return (_jsx(Box, { sx: { ...sectionSx, bgcolor: '#fff', minHeight: '55vh', display: 'flex', alignItems: 'center' }, children: _jsx(Container, { maxWidth: "lg", children: _jsx(Card, { elevation: 0, sx: { border: '1px solid', borderColor: 'divider', borderRadius: 3 }, children: _jsxs(CardContent, { sx: { p: { xs: 3, md: 5 }, textAlign: 'center' }, children: [_jsx(Chip, { label: "Coming Soon", sx: { mb: 2, bgcolor: 'rgba(95,76,128,0.12)', color: 'text.primary', fontWeight: 700 } }), _jsx(Typography, { variant: "h3", sx: { color: 'text.primary', mb: 1.5 }, children: title }), _jsx(Typography, { sx: { color: 'text.secondary', lineHeight: 1.85, maxWidth: 680, mx: 'auto' }, children: "This page is being prepared and will be available soon." })] }) }) }) }));
}
export default function SitePages({ currentPath }) {
    if (currentPath === '/')
        return _jsx(HomePage, {});
    if (currentPath === '/about-us')
        return _jsx(AboutPage, {});
    if (currentPath === '/people')
        return _jsx(PeoplePage, {});
    if (currentPath === '/collaborators')
        return _jsx(CollaboratorsPage, {});
    if (currentPath === '/guidelines')
        return _jsx(GuidelinesPage, {});
    if (currentPath === '/events')
        return _jsx(EventsPage, {});
    if (currentPath === '/policy-brief')
        return _jsx(ComingSoonPage, { title: "Policy Brief" });
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
