import React from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

const Section: React.FC<{ id?: string; children: React.ReactNode; bgcolor?: string }> = ({ id, children, bgcolor }) => (
  <Box component="section" id={id} sx={{ py: { xs: 6, md: 10 }, bgcolor }}>
    {children}
  </Box>
);

const Hero: React.FC = () => {
  return (
    <Section bgcolor="#0f4d43">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Chip label="Data Science Program" color="default" sx={{ alignSelf: "flex-start", bgcolor: "#eaf5f3" }} />
              <Typography variant="h3" component="h1" color="white" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                Become a Job‑Ready Data Scientist
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ opacity: 0.9 }}>
                Hands‑on learning with expert mentors, real projects, and career support.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button variant="contained" size="large" color="success" sx={{ bgcolor: "#1bbd7e" }}>Apply Now</Button>
                <Button variant="outlined" size="large" sx={{ color: "white", borderColor: "rgba(255,255,255,0.6)" }}>Download Brochure</Button>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: i < 4 ? "#ffd54f" : "#b0bec5" }} />
                ))}
                <Typography color="white">4.0/5 from 2,000+ learners</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Get a free counseling session</Typography>
                <Stack spacing={2}>
                  <TextField fullWidth label="Full Name" variant="outlined" size="small" />
                  <TextField fullWidth label="Email" variant="outlined" size="small" />
                  <TextField fullWidth label="Phone" variant="outlined" size="small" />
                  <Button variant="contained" color="success" size="large">Request Callback</Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

const Highlights: React.FC = () => (
  <Section>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {[
          { title: "Live Mentor Sessions", desc: "Weekly live classes with industry experts" },
          { title: "Capstone Projects", desc: "Real‑world datasets and case studies" },
          { title: "Career Support", desc: "Portfolio, mock interviews, and referrals" },
          { title: "Flexible Learning", desc: "Self‑paced content + live doubt clearing" }
        ].map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

const Recruiters: React.FC = () => (
  <Section bgcolor="#f5fbf9">
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}>Our learners work at</Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {Array.from({ length: 10 }).map((_, i) => (
          <Grid key={i} item xs={6} sm={4} md={2}>
            <Box sx={{ p: 2, border: "1px solid #eee", borderRadius: 1, textAlign: "center" }}>
              <Box component="img" src="/low-quality-placeholder.webp" alt="logo" sx={{ maxWidth: "100%", height: 36, objectFit: "contain" }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

const Curriculum: React.FC = () => (
  <Section>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>What you will learn</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>A comprehensive, industry‑vetted curriculum</Typography>
          <List>
            {["Python & Statistics", "Data Wrangling", "EDA & Visualization", "Machine Learning", "Deep Learning Basics", "ML Ops Fundamentals"].map((t) => (
              <ListItem key={t}>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={t} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={7}>
          {[
            { title: "Module 1: Foundations", body: "Python, statistics, and math essentials for data science." },
            { title: "Module 2: Data Toolkit", body: "Pandas, SQL, data cleaning, and feature engineering." },
            { title: "Module 3: Machine Learning", body: "Supervised and unsupervised learning with scikit‑learn." },
            { title: "Module 4: Capstone", body: "End‑to‑end project on a real dataset with deployment." }
          ].map((m) => (
            <Accordion key={m.title} defaultExpanded sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600 }}>{m.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{m.body}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Section>
);

const Mentors: React.FC = () => (
  <Section bgcolor="#f5fbf9">
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}>Meet your mentors</Typography>
      <Grid container spacing={3}>
        {[
          { name: "A. Sharma", role: "Senior Data Scientist, FinTech" },
          { name: "B. Patel", role: "ML Engineer, HealthTech" },
          { name: "C. Khan", role: "AI Researcher, SaaS" },
          { name: "D. Rao", role: "Data Leader, E‑commerce" }
        ].map((m) => (
          <Grid key={m.name} item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: "center" }}>
              <CardContent>
                <Avatar sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} src="/low-quality-placeholder.webp" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{m.name}</Typography>
                <Typography variant="body2" color="text.secondary">{m.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

const Projects: React.FC = () => (
  <Section>
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}>Build real projects</Typography>
      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardMedia component="img" image="/low-quality-placeholder.webp" alt="project" height="160" />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Project {i + 1}</Typography>
                <Typography variant="body2" color="text.secondary">Brief description of the real‑world problem and techniques used.</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

const Reviews: React.FC = () => (
  <Section bgcolor="#f5fbf9">
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}>Learner stories</Typography>
      <Grid container spacing={3}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  {[...Array(5)].map((_, s) => (
                    <StarIcon key={s} sx={{ color: s < 5 ? "#ffd54f" : "#b0bec5" }} />
                  ))}
                </Stack>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  "This program helped me switch careers into data science within 4 months."
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src="/low-quality-placeholder.webp" />
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>Learner {i + 1}</Typography>
                    <Typography variant="caption" color="text.secondary">Placed at Top Company</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

const Pricing: React.FC = () => (
  <Section>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Program Fee</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>Scholarships and EMI options available</Typography>
          <Card>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="baseline">
                <Typography variant="h3" sx={{ fontWeight: 700 }}>₹79,000</Typography>
                <Typography color="text.secondary">+ GST</Typography>
              </Stack>
              <Divider sx={{ my: 2 }} />
              <List>
                {["EMI starting ₹3,999/mo", "Money‑back guarantee", "Placement assistance"].map((p) => (
                  <ListItem key={p}>
                    <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                    <ListItemText primary={p} />
                  </ListItem>
                ))}
              </List>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button variant="contained" color="success">Enroll Now</Button>
                <Button variant="outlined">Talk to Team</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Upcoming Batches</Typography>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Grid container>
                <Grid item xs={6}><Typography>Weekend</Typography></Grid>
                <Grid item xs={3}><Typography>Oct 26</Typography></Grid>
                <Grid item xs={3} sx={{ textAlign: "right" }}><Button size="small" variant="outlined">Apply</Button></Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}><Typography>Weekday</Typography></Grid>
                <Grid item xs={3}><Typography>Nov 10</Typography></Grid>
                <Grid item xs={3} sx={{ textAlign: "right" }}><Button size="small" variant="outlined">Apply</Button></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Section>
);

const Faqs: React.FC = () => (
  <Section bgcolor="#f5fbf9">
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 4 }}>Frequently Asked Questions</Typography>
      {[
        { q: "Who is this program for?", a: "Beginners and professionals looking to transition into data roles." },
        { q: "What are the prerequisites?", a: "Basic math and programming curiosity. We teach everything else." },
        { q: "Do you offer placement support?", a: "Yes, with portfolio building, mock interviews, and referrals." }
      ].map((f) => (
        <Accordion key={f.q} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography sx={{ fontWeight: 600 }}>{f.q}</Typography></AccordionSummary>
          <AccordionDetails><Typography color="text.secondary">{f.a}</Typography></AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Section>
);

const CTA: React.FC = () => (
  <Section>
    <Container maxWidth="md">
      <Card sx={{ p: { xs: 2, md: 4 } }}>
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>Ready to start your Data Science journey?</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" color="success">Apply Now</Button>
              <Button variant="outlined">Talk to an Advisor</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  </Section>
);

const DataScienceCoursePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Data Science Course | Greycampus</title>
        <meta name="description" content="Replicated data science course template using Material UI." />
      </Head>
      <Hero />
      <Highlights />
      <Recruiters />
      <Curriculum />
      <Mentors />
      <Projects />
      <Reviews />
      <Pricing />
      <Faqs />
      <CTA />
    </>
  );
};

// Opt-out of global Layout (no header/footer)
// This is picked up by pages/_app.tsx
(DataScienceCoursePage as any).disableLayout = true;

export default DataScienceCoursePage;


