import { Box, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { fetchBlogStore, findBlogBySlug } from '../blog/blogClient';
import type { Blog } from '../blog/blogTypes';
import { useEffect, useMemo, useState } from 'react';
import { MarkdownView } from '../blog/markdownView';

type SitePagesProps = {
  currentPath: string;
};

const sectionSx = { py: { xs: 6, md: 9 } };

function formatDate(yyyyMmDd: string) {
  // Keep it simple: YYYY-MM-DD -> Month DD, YYYY (en-US)
  // Falls back to raw string if parsing fails.
  const [y, m, d] = yyyyMmDd.split('-').map((v) => Number(v));
  if (!y || !m || !d) return yyyyMmDd;
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}

function BlogCard({ blog, height = 240 }: { blog: Blog; height?: number }) {
  const authorLine = blog.authors?.length ? blog.authors.join(' and ') : '';
  const dateLine = blog.publishedAt ? formatDate(blog.publishedAt) : '';
  const cover = blog.coverImageUrl || '';
  const bgImage = cover
    ? `linear-gradient(120deg, rgba(95,76,128,0.35), rgba(95,76,128,0.05)), url('${cover}')`
    : "linear-gradient(120deg, rgba(95,76,128,0.35), rgba(95,76,128,0.05))";

  return (
    <Card
      component="a"
      href={`/blogs/${blog.slug}`}
      elevation={0}
      sx={{
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
      }}
    >
      <Box
        sx={{
          height,
          backgroundImage: bgImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <CardContent sx={{ p: 3.2, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h5"
          sx={{
            mb: 0.6,
            fontWeight: 700,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '2.6em',
          }}
        >
          {blog.title}
        </Typography>
        {(authorLine || dateLine) && (
          <Typography
            variant="body2"
            noWrap
            sx={{ color: 'text.secondary', mb: 1.2 }}
            title={[authorLine, dateLine].filter(Boolean).join(' · ')}
          >
            {authorLine}{authorLine && dateLine ? ' · ' : ''}{dateLine}
          </Typography>
        )}
        <Typography
          sx={{
            color: 'text.secondary',
            lineHeight: 1.8,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {blog.excerpt}
        </Typography>
      </CardContent>
    </Card>
  );
}

function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogStore()
      .then((store) => setBlogs(store.blogs || []))
      .catch(() => setBlogs([]));
  }, []);

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
  }, [blogs]);
  const visibleBlogs = useMemo(() => sortedBlogs.slice(0, 2), [sortedBlogs]);

  return (
    <>
      <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }}>
                <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'text.primary',
                      mb: 1.6,
                      fontSize: { xs: '1.4rem', sm: '2rem' },
                      lineHeight: 1.15,
                      wordBreak: 'break-word',
                    }}
                  >
                    Vision Statement
                  </Typography>
                  <Typography sx={{ lineHeight: 1.85, color: 'text.secondary', fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    We imagine a world where decisions are guided by evidence, opportunities are shared fairly, and every person — across genders, communities, and backgrounds — has the chance to thrive.
                    A world where systems are inclusive, progress is sustainable, and innovation works for everyone.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }}>
                <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'text.primary',
                      mb: 1.6,
                      fontSize: { xs: '1.4rem', sm: '2rem' },
                      lineHeight: 1.15,
                      wordBreak: 'break-word',
                    }}
                  >
                    Mission Statement
                  </Typography>
                  <Typography sx={{ lineHeight: 1.85, color: 'text.secondary', mb: 2, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    We exist to turn rigorous research into real-world change. Our work advances gender equity and inclusive development across climate, technology, education, and health. We do this by:
                  </Typography>
                  <Stack spacing={1.2}>
                    <Typography sx={{ color: 'text.secondary' }}>Producing and applying evidence that shapes fair and effective policies and practices</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Centering people of all genders in the design of solutions and systems</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Collaborating across sectors to address structural inequalities together</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Promoting context-aware, sustainable approaches that create long-term impact</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ ...sectionSx, bgcolor: '#F4F5F8' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ color: 'text.primary', mb: 1.5 }}>Blogs</Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }}>
            Weekly topic-based blogs and monthly policy briefs developed through a structured, collaborative, and peer-reviewed research process.
          </Typography>
          <Grid container spacing={2.5} sx={{ mt: 2.5 }}>
            {visibleBlogs.map((b) => (
              <Grid key={b.slug} size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
                <BlogCard blog={b} height={220} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

function AboutPage() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>About Us</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2 }}>
          Our Gender Lens is a gender-responsive research think tank focused on using evidence to inform more inclusive and equitable systems. We believe research should move beyond theory and directly contribute to better policies, stronger institutions, and meaningful social impact.
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2 }}>
          We work across climate, technology, education, and health, examining how these sectors affect people in both rural and urban contexts. Our goal is to understand structural challenges, highlight gaps, and contribute to solutions that are practical, sustainable, and grounded in evidence.
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2 }}>
          Our work is guided by three core values: Rigorous Research, Promoting Equity amongst Genders, and Inclusivity.
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3 }}>
          We apply a gender lens as an analytical framework to ensure that policies, systems, and solutions are designed with fairness and context in mind. We recognize that gender intersects with geography, access, and structural inequality, and we aim to reflect these realities in our research.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h4" sx={{ color: 'text.primary', mb: 1.5 }}>What We Do</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2 }}>
          We produce a range of research and knowledge outputs, including:
        </Typography>
        <Stack spacing={1.2}>
          <Typography sx={{ color: 'text.secondary' }}>Weekly topic-based blogs</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Monthly policy briefs</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Policy papers and research reports</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Primary research studies</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Presentations at conferences and academic forums</Typography>
        </Stack>

        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mt: 3 }}>
          Our content is structured, focused, and peer-reviewed. We follow a collaborative editing process to ensure clarity, coherence, and quality in every publication.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h4" sx={{ color: 'text.primary', mb: 1.5 }}>Our Approach</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
          We meet regularly to develop ideas, discuss research directions, and refine our work. Collaboration and continuous improvement are central to our model. Through consistent engagement and structured review, we aim to maintain high standards in both analysis and writing.
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mt: 2 }}>
          At Our Gender Lens, we are committed to producing research that is evidence-based, context-aware, and designed to contribute to long-term, inclusive development.
        </Typography>
      </Container>
    </Box>
  );
}

function PeoplePage() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#F4F5F8' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 3 }}>Our Team</Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 3.2 }}>
                <Chip label="Founder" size="small" sx={{ mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 }} />
                <Typography variant="h5" sx={{ color: 'text.primary', mb: 1.5 }}>Pinaki Gakhar</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                  Pinaki Gakhar is the Founder of Our Gender Lens, a new gender-responsive research think tank focused on advancing rigorous, inclusive, and evidence-based policy research. She holds a Master’s in Public Policy from Kautilya School of Public Policy, GITAM University, and a Bachelor's in Sociology (Honours) from MCM DAV College. Her academic foundation blends sociological thinking with structured policy analysis, shaping her systems-oriented approach to research and institutional development.
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }}>
                  Professionally, she has worked as a Program Associate at the Kautilya School of Public Policy, contributing to stakeholder coordination, research support, data management, institutional communication, and academic process improvement. She has also served as a Research Intern at the Bharti Institute of Public Policy, Indian School of Business, where she worked on projects spanning public finance, AI policy, employment, climate transitions, and public health.
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }}>
                  She provided early-stage support during the setup phase of Pink Policy Dialogues, contributing to its foundational development. She has delivered paper presentations at academic forums and has two publications to her name, reflecting her commitment to research-driven engagement and policy impact.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 3.2 }}>
                <Chip label="Research Lead" size="small" sx={{ mb: 1.4, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary', fontWeight: 700 }} />
                <Typography variant="h5" sx={{ color: 'text.primary', mb: 1.5 }}>B. Anjana Devi</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                  B. Anjana Devi is the research lead of Our Gender Lens. She holds a Master's in Public Policy (MPP) from Kautilya School of Public Policy (KSPP), GITAM University and a Bachelor's degree in economics (minor in history and public administration from K.L. (KLEF Deemed to be University). Her education provides her a framework to analyse policy decisions from a rational, data-centric, scientific perspective.
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.85, mt: 1.4 }}>
                  Her professional journey has so far been independent freelance assignments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogStore()
      .then((store) => setBlogs(store.blogs || []))
      .catch(() => setBlogs([]));
  }, []);

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
  }, [blogs]);
  const visibleBlogs = sortedBlogs;

  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ color: 'text.primary', mb: 1.2 }}>Blogs</Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }}>
            Structured, evidence-led writing across climate, technology, education, and health with a gender lens. New posts are released weekly.
          </Typography>
        </Box>

        <Grid container spacing={2.5} sx={{ mt: 1 }}>
          {visibleBlogs.map((b) => (
            <Grid key={b.slug} size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
              <BlogCard blog={b} height={240} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function BlogPostPage({ slug }: { slug: string }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlogStore()
      .then((store) => setBlogs(store.blogs || []))
      .catch(() => setBlogs([]));
  }, []);

  const blog = useMemo(() => findBlogBySlug(blogs, slug), [blogs, slug]);

  if (!blog) {
    return (
      <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ color: 'text.primary' }}>Blog not found</Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ color: 'text.primary', mb: 1, wordBreak: 'break-word' }}>
            {blog.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {blog.authors.join(' and ')} · {formatDate(blog.publishedAt)}
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 920 }}>
          <MarkdownView markdown={blog.contentMarkdown} />
        </Box>
      </Container>
    </Box>
  );
}

function ExplainerPage() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 1.2 }}>Explainers</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, maxWidth: 920 }}>
          Short, accessible explainers that break down concepts, terms, and frameworks used in gender-responsive research and policy work.
        </Typography>
        <Card elevation={0} sx={{ mt: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 2.5, sm: 3.2 } }}>
            <Typography sx={{ fontWeight: 700, mb: 0.8 }}>Coming soon</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
              We are preparing a set of explainers to support readers with context and definitions. Check back shortly.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

function NotFoundPage() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 1.2 }}>Page not found</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, maxWidth: 720 }}>
          The page you are looking for does not exist.
        </Typography>
      </Container>
    </Box>
  );
}

export default function SitePages({ currentPath }: SitePagesProps) {
  if (currentPath === '/') return <HomePage />;
  if (currentPath === '/about-us') return <AboutPage />;
  if (currentPath === '/people') return <PeoplePage />;
  if (currentPath.startsWith('/blogs/') && currentPath !== '/blogs') {
    const slug = currentPath.replace(/^\/blogs\//, '');
    return <BlogPostPage slug={slug} />;
  }
  if (currentPath === '/blogs') return <BlogsPage />;
  if (currentPath === '/explainer') return <ExplainerPage />;
  return <NotFoundPage />;
}
