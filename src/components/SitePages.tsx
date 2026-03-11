import { Box, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Beta from './Beta';

type SitePagesProps = {
  currentPath: string;
};

const sectionSx = { py: { xs: 6, md: 9 } };

function HomePage() {
  return (
    <>
      <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Typography variant="h4" sx={{ color: 'text.primary', mb: 2 }}>Vision Statement</Typography>
                  <Typography sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
                    We imagine a world where decisions are guided by evidence, opportunities are shared fairly, and every person — across genders, communities, and backgrounds — has the chance to thrive.
                    A world where systems are inclusive, progress is sustainable, and innovation works for everyone.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Typography variant="h4" sx={{ color: 'text.primary', mb: 2 }}>Mission Statement</Typography>
                  <Typography sx={{ lineHeight: 1.9, color: 'text.secondary', mb: 2 }}>
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
          <Card
            component="a"
            href="/blogs/women-and-equity-in-ai-technology"
            elevation={0}
            sx={{
              mt: 3,
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
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
                height: 220,
                backgroundImage:
                  "linear-gradient(120deg, rgba(95,76,128,0.35), rgba(95,76,128,0.05)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <CardContent sx={{ p: 3.2 }}>
              <Chip label="Featured" size="small" sx={{ mb: 1.2, fontWeight: 700, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary' }} />
              <Typography variant="h5" sx={{ mb: 0.6, fontWeight: 700 }}>
                Women and Equity in AI Technology
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.2 }}>
                By Anish Ravid Noroha and Pinaki Gakhar · February 23, 2026
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                The Fourth Industrial Revolution is reshaping economies and societies. This piece examines equity in AI, the gendered digital divide,
                and the steps needed to build inclusive, safe, and fair technology systems.
              </Typography>
            </CardContent>
          </Card>
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
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ color: 'text.primary', mb: 1.2 }}>Blogs</Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 900, lineHeight: 1.85 }}>
            Structured, evidence-led writing across climate, technology, education, and health with a gender lens. New posts are released weekly.
          </Typography>
        </Box>

        <Card
          component="a"
          href="/blogs/women-and-equity-in-ai-technology"
          elevation={0}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
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
              height: 240,
              backgroundImage:
                "linear-gradient(120deg, rgba(95,76,128,0.35), rgba(95,76,128,0.05)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <CardContent sx={{ p: 3.2 }}>
            <Chip label="Featured" size="small" sx={{ mb: 1.2, fontWeight: 700, bgcolor: 'rgba(95,76,128,0.18)', color: 'text.primary' }} />
            <Typography variant="h5" sx={{ mb: 0.6, fontWeight: 700 }}>
              Women and Equity in AI Technology
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.2 }}>
              By Anish Ravid Noroha and Pinaki Gakhar · February 23, 2026
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              The Fourth Industrial Revolution is reshaping economies and societies. This piece examines equity in AI, the gendered digital divide,
              and the steps needed to build inclusive, safe, and fair technology systems.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

function BlogPostWomenEquityAI() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ color: 'text.primary', mb: 1 }}>
            Women and Equity in AI Technology
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            By Anish Ravid Noroha and Pinaki Gakhar · February 23, 2026
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 920 }}>
          <Stack spacing={2}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                The world finds itself at the threshold of the Fourth Industrial Revolution characterised by velocity, scope, and systems impact.
                Technological innovations are changing the world faster than ever before. Emerging technologies like artificial intelligence, robotics,
                3-D printing, nanotechnology, biotechnology and quantum computing are changing the rules of businesses and societies. What does it mean
                for the women in those businesses and societies?
              </Typography>
              <Typography sx={{ color: 'text.primary', fontWeight: 700 }}>Equity in Technological Solutions</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                Equity in technology can be defined as intentional design, development, deployment, and governance of technology systems to ensure values
                such as justice, fairness and inclusion for all.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                The percentage of women in STEM is a matter of concern. Women have far less access and digital literacy as compared to men. There are only
                35 per cent of students in STEM education. There are only 22 per cent of jobs in the artificial intelligence (AI) arena. During conception,
                when a technology is shaped under a narrow perspective, it negatively affects inclusiveness. OECD found that, male bias in ICT reduces the
                inclusiveness in digital transformation. It also found that while the exposure to AI remains the same for both males and females in their
                occupations, women are significantly under-represented in occupations that have the highest exposure to AI technology.
              </Typography>
              <Typography sx={{ color: 'text.primary', fontWeight: 700 }}>Barriers — Gatekeeping of Technology?</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                A major barrier to inclusion of women in technology related fields are gender based digital divide, early age discouragement and
                stereotyping of job roles, limited role models in STEM, lack of mentorship, gender bias and discrimination in hiring and an unwelcoming
                and hostile environment for women in technology spaces. These factors inhibit women from being part of the workforce in technology related
                fields.
              </Typography>
              <Typography sx={{ color: 'text.primary', fontWeight: 700 }}>What Next?</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                Attention must be redirected to the consequences of the Fourth Industrial Revolution on people and more specifically on women. A major
                dissuader of the usage of technology is the possible abuse and harassment on digital platforms; therefore, it is imperative to ensure
                safety on these platforms. Enforcing strict laws to ensure privacy and timely action against harassment along with providing digital
                literacy to women can foster a safer digital environment for women.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                Focus needs to be drawn upon the unequal access to technology due to barriers such as income, education, region, social status, etc.
                Addressing these differences is key to bringing change. One way to address this is by reexamining existing knowledge about technology as a
                government provided public good. Governments must ensure an inclusive approach in skilling women in artificial intelligence technology.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>
                It is also the need of the hour to promote inclusion of women in the field of STEM and in workplaces with high AI exposure. Mandating
                diversity in hiring and promoting skills-first approach in hiring and other targeted approaches can address discrimination in hiring.
                Awareness campaigns can be run to illustrate the importance of access to technology to women. With these changes there can be significant
                progress in achieving equity in the AI workforce.
              </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function BookReviewsPage() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>Book Reviews</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3 }}>
          Critical reviews of books relevant to gender equity, inclusive development, governance, and public policy practice.
        </Typography>
        {/* Placeholder cards – uncomment and replace with real book reviews when available */}
        {/* <Grid container spacing={2.5}>
          {['Gender and Development', 'Inclusive Policy Design', 'Evidence and Public Decision-Making'].map((title) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Chip label="Book Review" size="small" sx={{ mb: 1.2, fontWeight: 700 }} />
                  <Typography sx={{ fontWeight: 700, mb: 0.8 }}>{title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    In-depth analysis of themes, arguments, and policy relevance through a gender-responsive lens.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
}

function MediaReviewsPage() {
  return (
    <Box sx={{ ...sectionSx, bgcolor: '#F4F5F8' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 2 }}>Media Reviews</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3 }}>
          Media narratives and public discourse examined through evidence, context, and inclusivity to support informed policy conversations.
        </Typography>
        {/* Placeholder cards – uncomment and replace with real media reviews when available */}
        {/* <Grid container spacing={2.5}>
          {['Policy Narratives in Climate Media', 'Representation in Public Health Reporting', 'Technology and Gender in Mainstream Coverage'].map((title) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Chip label="Media Review" size="small" sx={{ mb: 1.2, fontWeight: 700 }} />
                  <Typography sx={{ fontWeight: 700, mb: 0.8 }}>{title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Structured commentary on how media framing influences public understanding and policy response.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
}

export default function SitePages({ currentPath }: SitePagesProps) {
  if (currentPath === '/about-us') return <AboutPage />;
  if (currentPath === '/people') return <PeoplePage />;
  if (currentPath === '/blogs/women-and-equity-in-ai-technology') return <BlogPostWomenEquityAI />;
  if (currentPath === '/blogs') return <BlogsPage />;
  if (currentPath === '/book-reviews') return <BookReviewsPage />;
  if (currentPath === '/media-reviews') return <MediaReviewsPage />;
  if (currentPath === '/beta') return <Beta />;
  return <HomePage />;
}
