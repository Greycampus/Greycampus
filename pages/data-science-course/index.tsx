import React, { useState, useEffect } from "react";
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
  TextField,
  ThemeProvider,
  createTheme,
  IconButton,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// Job data for the carousel
export const DsMoreJobsData = [
  {
    id: 1,
    thumbnail: 'https://strapi.odinschool.com/uploads/Fact_Entry_c7ce8b3987.webp',
    videoId: 'irGa4EG6fPA',
    name: 'FactEntry',
    designation: 'AI/ML Engineer',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Fact_Entry100x40_28f92bc600.webp',
    tags: ["Python", "ML", "SQL", "NumPy"],
    salary: 'Upto INR 15 LPA'
  },
   {
    id: 2,
    thumbnail: 'https://strapi.odinschool.com/uploads/Accenture_197210012c.webp',
    videoId: 'mJ3yIGc84DQ',
    name: 'Accenture',
    designation: 'Power BI Developer',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/accenture_Individual_100_x40_631d9acda0.webp',
    tags: ["Power BI", "Excel", "SQL", "Python"],
    salary: 'Upto INR 10 LPA'
  },
  {
    id: 3,
    thumbnail: 'https://strapi.odinschool.com/uploads/9_V_byte_697787002b.webp',
    videoId: '9ceUzN1QFCs',
    name: '9vbyte',
    designation: 'AI/ML Engineer',
    highlight: 'Requires 0-1 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/9vbyte_100_X40_76490f8994.webp',
    tags: ["ML", "Python"],
    salary: 'Upto INR 4 LPA'
  },
  {
    id: 4,
    thumbnail: 'https://strapi.odinschool.com/uploads/Accent_Techno_Soft_a0a5d67d08.webp',
    videoId: 'BuXGOJDUOb0',
    name: 'Accent Techno Soft',
    designation: 'AI Developer',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Accent_Techno_SOFT_100_X40_8b9934b54b.webp',
    tags: ["Python", "ML", "AI"],
    salary: 'Upto INR 5 LPA'
  },
  {
    id: 5,
    thumbnail: 'https://strapi.odinschool.com/uploads/Fact_Entry_c7ce8b3987.webp',
    videoId: 'irGa4EG6fPA',
    name: 'FactEntry',
    designation: 'AI/ML Engineer',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Fact_Entry100x40_28f92bc600.webp',
    tags: ["Python", "ML", "SQL", "NumPy"],
    salary: 'Upto INR 15 LPA'
  },
   {
    id: 6,
    thumbnail: 'https://strapi.odinschool.com/uploads/Capgemini_a4a3456300.webp',
    videoId: '1fzkwbv1rHs',
    name: 'Capgemini',
    designation: 'Generative AI Engineer',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Capgemini_100_X40_Individual_2e02ab08f3.webp',
    tags: ["Python", "ML", "PyTorch", "TensorFlow"],
    salary: 'Upto INR 5 LPA'
  },
  {
    id: 7,
    thumbnail: 'https://strapi.odinschool.com/uploads/Phone_Pe_843fe27b89.webp',
    videoId: 'DE8Xy7mJo2k',
    name: 'PhonePe',
    designation: 'MIS Executive',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Phon_Pe_100x40_b9e93b4668.webp',
    tags: ["Excel", "SQL", "Power BI"],
    salary: 'Upto INR 7 LPA'
  },
  {
    id: 8,
    thumbnail: 'https://strapi.odinschool.com/uploads/mqdefault_1_4dda120198.jpg',
    videoId: 'f_NUuUSxSmY',
    name: 'Digital Neurons',
    designation: 'Data Scientist',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Digital_neurons_24cfda9b19.webp',
    tags: ["Deep Learning","Gen AI", "CNN's"],
    salary: 'Upto INR 8 LPA'
  },
  {
    id: 9,
    thumbnail: 'https://strapi.odinschool.com/uploads/Teamware_50fdf12199.webp',
    videoId: 'G7re_2wt8gM',
    name: 'Teamware Solutions',
    designation: 'Data Analyst',
    highlight: 'Requires 2-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Team_Ware_Solutions100x40_ee0af9b9e2.webp',
    tags: ["Python","Excel", "SQL", "Power BI"],
    salary: 'Upto INR 7 LPA'
  }, 
  {
    id: 10,
    thumbnail: 'https://strapi.odinschool.com/uploads/Swiggy_1_01fdefa0c2.webp',
    videoId: 'yf2ttxCVA8M',
    name: 'Swiggy',
    designation: 'Senior MIS Executive',
    highlight: 'Requires 2-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Swiggy_2559d7d724.webp',
    tags: ["Excel", "SQL", "Power BI"],
    salary: 'Upto INR 6.5 LPA'
  }, 
  {
    id: 11,
    thumbnail: 'https://strapi.odinschool.com/uploads/Ducima_153408fc52.webp',
    videoId: 'lIbneu8CBoE',
    name: 'Ducima Analytics',
    designation: 'AI Engineer',
    highlight: 'Requires 1-3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Ducima_Analytics100_X40_2_31528dc255.png',
    tags: ["Python", "AI", "LLM's", "NLP"],
    salary: 'Upto INR 5 LPA'
  }, 
  {
    id: 12,
    thumbnail: 'https://strapi.odinschool.com/uploads/Kerala_Ayurveda_f5fdedaa62.webp',
    videoId: '7v-mBhMT8GI',
    name: 'Kerala Ayurveda Ltd.',
    designation: 'Growth Analyst',
    highlight: 'Requires 2 - 5 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Kerala_Ayurveda100_X40_c7c880569b.webp',
    tags: ['Python', 'SQL', 'Statistics'],
    salary: 'Offered Salary upto INR 15 - 17 LPA'
  },
  {
    id: 13,
    thumbnail: 'https://strapi.odinschool.com/uploads/Badho_6500637b55.webp',
    videoId: 'SPR-UoS5Q84',
    name: 'Badho',
    designation: 'Data Analyst',
    highlight: 'Requires 0 - 1 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Badho_6500637b55.webp',
    tags: ['Power BI', 'SQL', 'Excel'],
    salary: 'Offered Salary upto INR 5 - 6 LPA'
  },
  {
    id: 14,
    thumbnail: 'https://strapi.odinschool.com/uploads/Swiggy_2559d7d724.webp',
    videoId: 'c7vKn55WOTw',
    name: 'Swiggy',
    designation: 'Business Analyst',
    highlight: 'Requires 2 - 3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/swiggy_100x40_indv_4a990b6e20.webp',
    tags: ['Power BI ', 'SQL', 'Statistics'],
    salary: 'Offered Salary upto INR 10 - 12 LPA'
  },
  {
    id: 15,
    thumbnail: 'https://strapi.odinschool.com/uploads/Gallagher_40829422af.webp',
    videoId: '36grsRjiTWY?si',
    name: 'Gallagher',
    designation: 'Data Scientist',
    highlight: 'Requires 2 - 4 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Gallagher_100x40_individual_03fe881ae3.webp',
    tags: ['SQL', 'Python', 'Machine Learning frameworks'],
    salary: 'Offered Salary upto INR 11 - 12 LPA'
  },
  {
    id: 16,
    thumbnail: 'https://strapi.odinschool.com/uploads/Blinkit_1_e6ce2f2a5a.webp',
    videoId: 'HEZ6TcxP3NY',
    name: 'Blinkit',
    designation: 'Data Analyst',
    highlight: 'Requires 0 -  1 year of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Blinkit_100_X40_2_caf16af3d2.webp',
    tags: ['Advanced Statistics', 'Excel', 'SQL'],
    salary: 'Offered Salary upto INR 10 LPA'
  },
  {
    id: 17,
    thumbnail: 'https://strapi.odinschool.com/uploads/Celebal_Technolgies_2178dd2bd2.webp',
    videoId: 'NsoFbmjF5lg',
    name: 'Celebal Technologies',
    designation: 'Junior Associate - Data Scientist',
    highlight: 'Requires 0 -  1 year of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/celebal_20_100x40_5eab45eef4.webp',
    tags: ['Python & SQL', 'Applied Statistics', 'ML Algorithms'],
    salary: 'Offered Salary upto INR 15 LPA'
  },
  {
    id: 18,
    thumbnail: 'https://strapi.odinschool.com/uploads/Cardekho_1_090c212836.webp',
    videoId: 'P9Fdcvagxvw',
    name: 'CarDekho',
    designation: 'Data Scientist',
    highlight: 'Requires 2-4 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Cardekho_100_X40_1_e0e67bbaca.webp',
    tags: ['Python', 'PyTorch', 'Tensorflow'],
    salary: 'Offered Salary upto INR 15 LPA'
  },
  {
    id: 19,
    thumbnail: 'https://strapi.odinschool.com/uploads/Swiggy_2_16900f930a.webp',
    videoId: 'wQLc92rFFfY',
    name: 'Swiggy',
    designation: 'Business Analyst',
    highlight: 'Requires 1 - 2 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/swiggy_100x40_indv_4a990b6e20.webp',
    tags: ['SQL', 'Power BI', 'Python', 'Excel'],
    salary: 'Offered Salary upto INR 13 LPA'
  },
  {
    id: 20,
    thumbnail: 'https://strapi.odinschool.com/uploads/Website_Explainer_videos_1_025c8e87bd_f4f13d9c8d.webp',
    videoId: 'URLJ56LDYC8',
    name: 'redBus',
    designation: 'Senior Product Analyst',
    highlight: 'Requires 0 - 2 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Redbus_20100_X40_20indv_fdcfadaaf1.webp',
    tags: ['SQL', 'Power BI'],
    salary: 'Offered Salary upto INR 10 LPA'
  },
  {
    id: 21,
    thumbnail: 'https://strapi.odinschool.com/uploads/Website_Explainer_videos_2_314f92e171_3072b66928.webp',
    videoId: 'ySrYGRumxao',
    name: 'Jaguar Land Rover',
    designation: 'Business Analyst',
    highlight: 'Requires 0 - 4 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/JLR_logo_be94d03176_e22f946950.webp',
    tags: ['Power BI', 'MS Office Suite'],
    salary: 'Offered Salary upto INR 4-5 LPA'
  },
 {
    id: 22,
    thumbnail: 'https://strapi.odinschool.com/uploads/Website_Explainer_videos_4_01a2c423fc_6c1b613c53.webp',
    videoId: 'bDSiiKPlDfI',
    name: 'Winfort',
    designation: 'Associate Consultant (Data Scientist)',
    highlight: 'Requires 0 - 2 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Winfort_5573e78e79_17450bfb3c.webp',
    tags: ['SQL', 'Python', 'Machine Learning', 'Tableau'],
    salary: 'Offered Salary upto INR 8-10 LPA'
  },
{
    id: 23,
    thumbnail: 'https://strapi.odinschool.com/uploads/Website_Explainer_videos_3_47b7764177_83b2fcd7ea.webp',
    videoId: 'OVEpRD69Tj0',
    name: 'MoveinSync',
    designation: 'Business Analyst',
    highlight: 'Requires 0 - 2 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Explainer_Video_Logos_d9e2198e25_83a19f9191.webp',
    tags: ['SQL', 'Python'],
    salary: 'Offered Salary upto INR 10 LPA'
  },
{
    id: 24,
    thumbnail: 'https://strapi.odinschool.com/uploads/Gallagher_40829422af.webp',
    videoId: '36grsRjiTWY?si',
    name: 'Gallagher',
    designation: 'Data Scientist',
    highlight: 'Requires 2 - 4 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Gallagher_100x40_individual_03fe881ae3.webp',
    tags: ['SQL', 'Python', 'Machine Learning frameworks'],
    salary: 'Offered Salary upto INR 11 - 12 LPA'
  },
  {
    id: 25,
    thumbnail: 'https://strapi.odinschool.com/uploads/Swiggy_765afa1224.webp',
    videoId: 'yf2ttxCVA8M',
    name: 'Swiggy',
    designation: 'Senior MIS Executive',
    highlight: 'Requires 2 - 3 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/swiggy_100_X40_indv_67546ee6d4.webp',
    tags: ['Excel', 'SQL', 'Power BI'],
    salary: 'Offered Salary upto INR 6 LPA'
  },
  {
    id: 26,
    thumbnail: 'https://strapi.odinschool.com/uploads/Flipkart_1d2a90ece4.webp',
    videoId: 'Scz6BWupHvg',
    name: 'Flipkart',
    designation: 'Data Analyst',
    highlight: 'Requires 0 - 5 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Flipkart_100x40_88e8717db1.webp',
    tags: ['Excel', 'SQL', 'Power BI'],
    salary: 'Offered Salary upto INR 5 LPA'
  },
  {
    id: 27,
    thumbnail: 'https://strapi.odinschool.com/uploads/ZYPP_742b6a4598.webp',
    videoId: 'JHKQgbUxVns',
    name: 'Zypp Electric',
    designation: 'Senior Data Analyst',
    highlight: 'Requires 3 - 5 years of experience in any field',
    companyLogo: 'https://strapi.odinschool.com/uploads/Zypp_Electric100x40_2e671e04e6.webp',
    tags: ['Python', 'SQL', 'Power BI'],
    salary: 'Offered Salary upto INR 16 to 18 LPA'
  },

];

// Create balanced dark theme with custom color
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0c868d',
    },
    secondary: {
      main: '#0c868d',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2a2a2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const Section: React.FC<{ id?: string; children: React.ReactNode; bgcolor?: string }> = ({ id, children, bgcolor }) => (
  <Box component="section" id={id} sx={{ py: { xs: 6, md: 10 }, bgcolor }}>
    {children}
  </Box>
);

const Hero: React.FC = () => {
  return (
    <Section bgcolor="#1a1a1a">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} sx={{ alignSelf: "flex-start" }}>
                <Chip label="4.6/5 | 1,539 Reviews" sx={{ bgcolor: "#0c868d", color: "white" }} />
              </Stack>
              <Typography variant="h3" component="h1" color="white" sx={{ fontWeight: 700, lineHeight: 1.2, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                Data Science Course
              </Typography>
              <Typography variant="subtitle1" color="white" sx={{ opacity: 0.9, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                Designed with cutting‑edge AI tools and technologies
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button variant="contained" size="large" sx={{ bgcolor: "#0c868d", "&:hover": { bgcolor: "#0a6b70" } }}>Apply Now</Button>
                <Button variant="outlined" size="large" sx={{ color: "white", borderColor: "rgba(255,255,255,0.6)", "&:hover": { borderColor: "#0c868d", color: "#0c868d" } }}>Download Brochure</Button>
              </Stack>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {["Live instructor‑led Classes", "Job Application Portal", "Project‑based Learning", "Industry Interaction"].map((t) => (
                  <Grid key={t} item xs={12} sm={6}>
                    <Box sx={{ bgcolor: "#0c868d", color: "white", p: 1.5, borderRadius: 1, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{t}</Box>
                  </Grid>
                ))}
              </Grid>
              <Stack direction="row" spacing={3} alignItems="center" sx={{ mt: 2 }}>
                <Typography color="white" variant="caption" sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>A Certified Member of</Typography>
                <Box component="img" src="/low-quality-placeholder.webp" alt="HYSEA" sx={{ height: 24 }} />
                <Box component="img" src="/low-quality-placeholder.webp" alt="SHRM" sx={{ height: 24 }} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 2, bgcolor: "#2a2a2a", border: "1px solid #444" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>Get a free counseling session</Typography>
                <Stack spacing={2}>
                  <TextField fullWidth label="Full Name" variant="outlined" size="small" sx={{ "& .MuiOutlinedInput-root": { color: "white" }, "& .MuiInputLabel-root": { color: "#e0e0e0" } }} />
                  <TextField fullWidth label="Email" variant="outlined" size="small" sx={{ "& .MuiOutlinedInput-root": { color: "white" }, "& .MuiInputLabel-root": { color: "#e0e0e0" } }} />
                  <TextField fullWidth label="Phone" variant="outlined" size="small" sx={{ "& .MuiOutlinedInput-root": { color: "white" }, "& .MuiInputLabel-root": { color: "#e0e0e0" } }} />
                  <Button variant="contained" size="large" sx={{ bgcolor: "#0c868d", "&:hover": { bgcolor: "#0a6b70" } }}>Request Callback</Button>
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
  <Section bgcolor="#2a2a2a">
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ textAlign: "center", color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>Your Gateway to Top Data Science Roles</Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>October 2025 <Box component="span" sx={{ color: "#0c868d" }}>Data Science Elite Course</Box></Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>the only Data Science Course in India backed by 5 fast growing companies!</Typography>
      </Stack>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 6 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Grid key={i} item xs={6} sm={4} md={2}>
            <Box sx={{ p: 2, border: "1px solid #444", borderRadius: 1, textAlign: "center", bgcolor: "#1a1a1a" }}>
              <Box component="img" src="/low-quality-placeholder.webp" alt="brand" sx={{ height: 36 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center", mb: 2, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>What's special?</Typography>
      <Grid container spacing={3}>
        {[
          { title: "10+ Hiring sprints", desc: "Fast Track your placement journey with more than 10 placement drive opportunities." },
          { title: "Alumni Mentorship", desc: "Interact with the alumni, learn the tricks of the trade and craft your own big Success Story." }
        ].map((item) => (
          <Grid key={item.title} item xs={12} md={6}>
            <Card sx={{ height: "100%", bgcolor: "#1a1a1a", border: "1px solid #444" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ textAlign: "center", mt: 2, mb: 3, color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>and several more attractive benefits.</Typography>
      <Stack alignItems="center">
        <Button variant="contained" sx={{ bgcolor: "#0c868d", "&:hover": { bgcolor: "#0a6b70" } }}>Know More</Button>
      </Stack>
    </Container>
  </Section>
);

const ThreePillars: React.FC = () => (
  <Section bgcolor="#1a1a1a">
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {[
          "Be part of the global data and AI transformation wave by mastering Data Science",
          "No tech background? No problem — our AI‑integrated Data Science curriculum welcomes all learners",
          "Access monthly JobDrives and showcase skills in Data Science enhanced with AI expertise"
        ].map((t, idx) => (
          <Grid key={idx} item xs={12} md={4}>
            <Card sx={{ bgcolor: "#1a1a1a", border: "1px solid #444" }}>
              <CardContent>
                <Typography variant="body1" sx={{ textAlign: "center", color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{t}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

const FutureWithAI: React.FC = () => (
  <Section bgcolor="#0c868d">
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", color: "white", mb: 4, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>Data Science with AI is the Future</Typography>
      <Grid container spacing={3}>
        {[
          { title: "AI Basics Made Easy", desc: "Start from scratch with Python, SQL, and friendly AI tools — no tech background needed." },
          { title: "Dashboards That Wow", desc: "Turn dull numbers into smart Power BI dashboards with AI features that add predictions and insights." },
          { title: "Projects You'll Brag About", desc: "Build fun, real‑world projects — like forecasting trends, analyzing text, or creating a chatbot." },
          { title: "AI Mentors Who Get It", desc: "Learn directly from professionals who use Data Science and AI every day at work." }
        ].map((i) => (
          <Grid key={i.title} item xs={12} md={6}>
            <Card sx={{ bgcolor: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{i.title}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mt: 1, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{i.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center" sx={{ mt: 3 }}>
        <Button variant="contained" sx={{ bgcolor: "#1a1a1a", color: "white", "&:hover": { bgcolor: "#444" } }}>Request a Callback</Button>
      </Stack>
    </Container>
  </Section>
);

const ProgramHighlights: React.FC = () => (
  <Section bgcolor="#f8fafc">
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 800, 
            mb: 2, 
            color: "#1a202c",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: { xs: "2rem", md: "2.5rem" }
          }}
        >
          Program <Box component="span" sx={{ color: "#0c868d" }}>Highlights</Box>
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: "#4a5568", 
            maxWidth: "600px", 
            mx: "auto",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: 1.6
          }}
        >
          A complete 360° learning experience designed for outcomes
        </Typography>
      </Box>

      {/* Main Content Grid */}
      <Grid container spacing={4}>
        {/* Left Column - Interactive Learning */}
        <Grid item xs={12} md={4}>
          <Box sx={{ height: "100%" }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 3, 
                color: "#1a202c",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                display: "flex",
                alignItems: "center",
                gap: 1
              }}
            >
              <Box sx={{ 
                width: 4, 
                height: 40, 
                bgcolor: "#0c868d", 
                borderRadius: 2 
              }} />
              Interactive Learning
            </Typography>
            
            <Stack spacing={2}>
              {[
                { 
                  title: "Live Online Classes", 
                  desc: "Real-time interaction with expert instructors",
                  icon: "🎥"
                },
                { 
                  title: "Live Doubt Clearing", 
                  desc: "Get instant answers to your questions",
                  icon: "💬"
                }
              ].map((item, index) => (
                <Card 
                  key={item.title}
                  sx={{ 
                    p: 3,
                    borderRadius: 3,
                    bgcolor: "white",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 24px rgba(12, 134, 141, 0.15)",
                      borderColor: "#0c868d"
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ 
                      fontSize: "2rem", 
                      lineHeight: 1,
                      mt: 0.5
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          color: "#1a202c",
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                          mb: 0.5
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "#4a5568",
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Center Column - 360° Experience */}
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            height: "100%", 
            borderRadius: 4,
            bgcolor: "white",
            border: "2px solid #0c868d",
            boxShadow: "0 8px 32px rgba(12, 134, 141, 0.2)",
            position: "relative",
            overflow: "hidden"
          }}>
            <Box sx={{ 
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: "linear-gradient(90deg, #0c868d, #14b8a6, #0c868d)",
              backgroundSize: "200% 100%",
              animation: "gradient 3s ease infinite"
            }} />
            
            <CardContent sx={{ p: 4, textAlign: "center", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Box sx={{ 
                width: 120, 
                height: 120, 
                mx: "auto", 
                mb: 3,
                borderRadius: "50%",
                bgcolor: "#f0fdfa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #0c868d"
              }}>
                <Typography sx={{ fontSize: "3rem" }}>🎯</Typography>
              </Box>
              
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 800, 
                  color: "#1a202c",
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  mb: 2
                }}
              >
                360° Learning
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#0c868d",
                  fontWeight: 600,
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  mb: 2
                }}
              >
                Complete Experience
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "#4a5568",
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  lineHeight: 1.6
                }}
              >
                From theory to practice, mentorship to placement - everything you need for success
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Career Ready */}
        <Grid item xs={12} md={4}>
          <Box sx={{ height: "100%" }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 3, 
                color: "#1a202c",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                display: "flex",
                alignItems: "center",
                gap: 1
              }}
            >
              <Box sx={{ 
                width: 4, 
                height: 40, 
                bgcolor: "#0c868d", 
                borderRadius: 2 
              }} />
              Career Ready
            </Typography>
            
            <Stack spacing={2}>
              {[
                { 
                  title: "Real World Projects", 
                  desc: "Work on industry-relevant case studies",
                  icon: "🏗️"
                },
                { 
                  title: "Mock Interviews", 
                  desc: "Practice with industry experts",
                  icon: "🎤"
                },
                { 
                  title: "Job Portal Access", 
                  desc: "500+ hiring organizations",
                  icon: "💼"
                },
                { 
                  title: "Monthly Job Drives", 
                  desc: "Regular placement opportunities",
                  icon: "🚀"
                }
              ].map((item, index) => (
                <Card 
                  key={item.title}
                  sx={{ 
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: "white",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 24px rgba(12, 134, 141, 0.15)",
                      borderColor: "#0c868d"
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box sx={{ 
                      fontSize: "1.5rem", 
                      lineHeight: 1,
                      mt: 0.5
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 600, 
                          color: "#1a202c",
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                          mb: 0.5
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "#4a5568",
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Stats Section */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Grid container spacing={4}>
          {[
            { number: "20+", label: "Hands-on Projects" },
            { number: "100+", label: "Practice Materials" },
            { number: "500+", label: "Hiring Partners" },
            { number: "24/7", label: "Doubt Support" }
          ].map((stat, index) => (
            <Grid key={stat.label} item xs={6} md={3}>
              <Box sx={{ 
                p: 3,
                borderRadius: 3,
                bgcolor: "white",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 16px rgba(12, 134, 141, 0.1)"
                }
              }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 800, 
                    color: "#0c868d",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    mb: 1
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "#4a5568",
                    fontWeight: 500,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Section>
);

const CareersReadyFor: React.FC = () => {
  const roles = [
    "Business Analyst",
    "Marketing Analyst",
    "Data Scientist",
    "MIS Executive",
    "SQL developer",
    "Reporting Analyst",
    "BI Analyst",
    "Data Analyst",
    "Data Engineer",
    "Finance Analyst",
    "Power BI Developer",
    "Operations Analyst",
    "Product Analyst",
    "AI Associate"
  ];

  return (
    <Section bgcolor="#1a1a1a">
      <Container maxWidth="lg">
        <Stack spacing={1} alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
            Careers You'll <Box component="span" sx={{ color: "#0c868d" }}>Be Ready For</Box>
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>Roles our graduates commonly target after completion</Typography>
        </Stack>

        <Grid container spacing={2}>
          {roles.map((role) => (
            <Grid key={role} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: "100%", bgcolor: "#1a1a1a", border: "1px solid #444" }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#0c868d", color: "white", width: 40, height: 40 }}>
                      {role.split(" ").map((w) => w[0]).join("").slice(0,3)}
                    </Avatar>
                    <Typography sx={{ fontWeight: 600, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{role}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const Recruiters: React.FC = () => (
  <Section bgcolor="#2a2a2a">
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: "center", color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>600+ Hiring Organizations</Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {Array.from({ length: 10 }).map((_, i) => (
          <Grid key={i} item xs={6} sm={4} md={2}>
            <Box sx={{ p: 2, border: "1px solid #444", borderRadius: 1, textAlign: "center", bgcolor: "#1a1a1a" }}>
              <Box component="img" src="/low-quality-placeholder.webp" alt="logo" sx={{ maxWidth: "100%", height: 36, objectFit: "contain" }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);

const JobCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = 4; // Number of items to show at once
  const totalItems = DsMoreJobsData.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + itemsPerView >= totalItems ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView, totalItems]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - itemsPerView : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= totalItems ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const visibleItems = DsMoreJobsData.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <Section bgcolor="#1a1a1a">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 2, 
              color: "white", 
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' 
            }}
          >
            Real <Box component="span" sx={{ color: "#0c868d" }}>Success Stories</Box>
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#e0e0e0", 
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              maxWidth: "600px",
              mx: "auto"
            }}
          >
            Watch how our graduates landed their dream jobs at top companies
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#0c868d",
              color: "white",
              zIndex: 2,
              "&:hover": { bgcolor: "#0a6b70" },
              display: { xs: "none", md: "flex" }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#0c868d",
              color: "white",
              zIndex: 2,
              "&:hover": { bgcolor: "#0a6b70" },
              display: { xs: "none", md: "flex" }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Carousel Container */}
          <Box sx={{ 
            display: "flex", 
            gap: 3, 
            overflow: "hidden",
            px: { xs: 2, md: 0 }
          }}>
            {visibleItems.map((job) => (
              <Card 
                key={job.id}
                sx={{ 
                  minWidth: { xs: "280px", md: "320px" },
                  maxWidth: { xs: "280px", md: "320px" },
                  bgcolor: "#2a2a2a",
                  border: "1px solid #444",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(12, 134, 141, 0.2)",
                    borderColor: "#0c868d"
                  }
                }}
              >
                {/* Video Thumbnail */}
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={job.thumbnail}
                    alt={job.name}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover"
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "rgba(0,0,0,0.7)",
                      borderRadius: "50%",
                      p: 1,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(12, 134, 141, 0.9)",
                        transform: "translate(-50%, -50%) scale(1.1)"
                      }
                    }}
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${job.videoId}`, '_blank')}
                  >
                    <PlayCircleOutlineIcon sx={{ color: "white", fontSize: 40 }} />
                  </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  {/* Company Logo and Name */}
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Box
                      component="img"
                      src={job.companyLogo}
                      alt={`${job.name} logo`}
                      sx={{
                        width: 40,
                        height: 40,
                        objectFit: "contain",
                        borderRadius: 1
                      }}
                    />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          color: "white", 
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                          mb: 0.5
                        }}
                      >
                        {job.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "#0c868d", 
                          fontWeight: 500,
                          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                        }}
                      >
                        {job.designation}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Experience Highlight */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "#e0e0e0", 
                      mb: 2,
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                      fontSize: "0.85rem"
                    }}
                  >
                    {job.highlight}
                  </Typography>

                  {/* Skills Tags */}
                  <Box sx={{ mb: 2 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {job.tags.slice(0, 3).map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "#0c868d",
                            color: "white",
                            fontSize: "0.75rem",
                            height: 24,
                            "& .MuiChip-label": {
                              px: 1
                            }
                          }}
                        />
                      ))}
                      {job.tags.length > 3 && (
                        <Chip
                          label={`+${job.tags.length - 3}`}
                          size="small"
                          sx={{
                            bgcolor: "#444",
                            color: "#e0e0e0",
                            fontSize: "0.75rem",
                            height: 24
                          }}
                        />
                      )}
                    </Stack>
                  </Box>

                  {/* Salary */}
                  <Box sx={{ 
                    bgcolor: "#1a1a1a", 
                    p: 2, 
                    borderRadius: 2,
                    border: "1px solid #444"
                  }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#0c868d", 
                        fontWeight: 600,
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        textAlign: "center"
                      }}
                    >
                      {job.salary}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Dots Indicator */}
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 1, 
            mt: 4 
          }}>
            {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setCurrentIndex(index * itemsPerView);
                  setIsAutoPlaying(false);
                }}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: index === Math.floor(currentIndex / itemsPerView) ? "#0c868d" : "#444",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: index === Math.floor(currentIndex / itemsPerView) ? "#0a6b70" : "#666"
                  }
                }}
              />
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            sx={{ mt: 3, display: { xs: "flex", md: "none" } }}
          >
            <Button
              variant="outlined"
              onClick={handlePrevious}
              sx={{
                borderColor: "#0c868d",
                color: "#0c868d",
                "&:hover": { borderColor: "#0a6b70", color: "#0a6b70" }
              }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                bgcolor: "#0c868d",
                "&:hover": { bgcolor: "#0a6b70" }
              }}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Container>
    </Section>
  );
};

const Curriculum: React.FC = () => (
  <Section bgcolor="#1a1a1a">
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>What you will learn</Typography>
          <Typography sx={{ mb: 2, color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>A comprehensive, industry‑vetted curriculum</Typography>
          <List>
            {["Python & Statistics", "Data Wrangling", "EDA & Visualization", "Machine Learning", "Deep Learning Basics", "ML Ops Fundamentals"].map((t) => (
              <ListItem key={t}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#0c868d" }} />
                </ListItemIcon>
                <ListItemText primary={t} sx={{ color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }} />
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
            <Accordion key={m.title} defaultExpanded sx={{ mb: 1, bgcolor: "#1a1a1a", border: "1px solid #444" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
                <Typography sx={{ fontWeight: 600, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{m.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{m.body}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Section>
);



const Projects: React.FC = () => (
  <Section bgcolor="#2a2a2a">
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 4, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>20+ Hands‑on <Box component="span" sx={{ color: "#0c868d" }}>Projects</Box></Typography>
      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", bgcolor: "#1a1a1a", border: "1px solid #444" }}>
              <CardMedia component="img" image="/low-quality-placeholder.webp" alt="project" height="160" />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>Project {i + 1}</Typography>
                <Typography variant="body2" sx={{ color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>End‑to‑end work with real datasets: EDA, modeling, dashboards, and insights.</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
);



const Pricing: React.FC = () => (
  <Section bgcolor="#f0f8ff">
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Left Section - Course Details */}
        <Grid item xs={12} md={5}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: "#666", mb: 2, fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                Upcoming Cohort
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip 
                  label="31 October 2025" 
                  sx={{ 
                    bgcolor: "#0c868d", 
                    color: "white",
                    fontWeight: 600,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }} 
                />
                <Chip 
                  label="29 November 2025" 
                  variant="outlined"
                  sx={{ 
                    borderColor: "#0c868d",
                    color: "#666",
                    fontWeight: 600,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }} 
                />
              </Stack>
            </Box>
            
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: "#333", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                Fee Structure
              </Typography>
              <Typography sx={{ mb: 3, color: "#666", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
                Live Online Learning + Certificate
              </Typography>
              
              <List sx={{ p: 0 }}>
                {[
                  "Live Online Classes",
                  "Hands-on Learning", 
                  "20+ Projects",
                  "Career Services"
                ].map((feature) => (
                  <ListItem key={feature} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon sx={{ color: "#0c868d", fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={feature} 
                      sx={{ 
                        color: "#333", 
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        "& .MuiListItemText-primary": { fontSize: "0.95rem" }
                      }} 
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        </Grid>

        {/* Right Section - Pricing and Financing */}
        <Grid item xs={12} md={7}>
          <Stack spacing={3}>
            {/* Pricing Card */}
            <Card sx={{ 
              borderRadius: 2, 
              border: "2px solid #0c868d",
              bgcolor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        textDecoration: "line-through", 
                        color: "#8B4513",
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                      }}
                    >
                      ₹1,25,000 + GST
                    </Typography>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 700, 
                        color: "#2E7D32",
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                      }}
                    >
                      ₹80,000 + GST
                    </Typography>
                  </Stack>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "#0c868d", 
                      fontWeight: 600,
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                    }}
                  >
                    Limited Seats! Book Yours Before They're Gone.
                  </Typography>
                  
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      size="large"
                      sx={{ 
                        borderColor: "#ccc",
                        color: "#333",
                        fontWeight: 600,
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        "&:hover": { borderColor: "#0c868d", color: "#0c868d" }
                      }}
                    >
                      Enquire Now →
                    </Button>
                    <Button 
                      variant="contained" 
                      size="large"
                      sx={{ 
                        bgcolor: "#FFD700",
                        color: "#333",
                        fontWeight: 700,
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        "&:hover": { bgcolor: "#FFC107" }
                      }}
                    >
                      Register Now ►
                    </Button>
                  </Stack>
                  
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: "#666", 
                      mt: 1,
                      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                    }}
                  >
                    You can also reserve your seat with ₹5,000 + GST
                  </Typography>
                </Stack>
              </CardContent>
            </Card>

            {/* Scholarships & EMI Options */}
            <Card sx={{ 
              borderRadius: 2, 
              bgcolor: "#E8F5E8",
              border: "1px solid #4CAF50"
            }}>
              <Box sx={{ 
                bgcolor: "#2E7D32", 
                color: "white", 
                p: 1.5, 
                borderRadius: "8px 8px 0 0",
                textAlign: "center"
              }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 700,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }}
                >
                  Scholarships & EMI Options Available!
                </Typography>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: "#333", 
                    mb: 2,
                    lineHeight: 1.6,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }}
                >
                  At OdinSchool, we believe in making quality education accessible to everyone. 
                  We offer flexible EMI options and scholarships to help you achieve your career goals. 
                  <strong> No cost EMIs available!</strong>
                </Typography>
                
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 600, 
                    color: "#333", 
                    mb: 2,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                  }}
                >
                  Our Financing Partners:
                </Typography>
                
                <Grid container spacing={2}>
                  {[
                    { name: "feemonk", color: "#FF6B35" },
                    { name: "BAJAJ FINSERV", color: "#1976D2" },
                    { name: "AVANSE", color: "#2E7D32" }
                  ].map((partner) => (
                    <Grid key={partner.name} item xs={4}>
                      <Box 
                        sx={{ 
                          p: 2, 
                          border: "1px solid #ddd", 
                          borderRadius: 1, 
                          textAlign: "center",
                          bgcolor: "white",
                          minHeight: 60,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            fontWeight: 600, 
                            color: partner.color,
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                          }}
                        >
                          {partner.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Section>
);

const Faqs: React.FC = () => (
  <Section bgcolor="#2a2a2a">
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 4, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>Frequently Asked Questions</Typography>
      {[
        { q: "Who is this program for?", a: "Beginners and professionals looking to transition into data roles." },
        { q: "What are the prerequisites?", a: "Basic math and programming curiosity. We teach everything else." },
        { q: "Do you offer placement support?", a: "Yes, with portfolio building, mock interviews, and referrals." }
      ].map((f) => (
        <Accordion key={f.q} sx={{ mb: 1, bgcolor: "#1a1a1a", border: "1px solid #444" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}><Typography sx={{ fontWeight: 600, color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{f.q}</Typography></AccordionSummary>
          <AccordionDetails><Typography sx={{ color: "#e0e0e0", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>{f.a}</Typography></AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Section>
);

const CTA: React.FC = () => (
  <Section bgcolor="#1a1a1a">
    <Container maxWidth="md">
      <Card sx={{ p: { xs: 2, md: 4 }, bgcolor: "#1a1a1a", border: "1px solid #444" }}>
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center", color: "white", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>Ready to start your Data Science journey?</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" sx={{ bgcolor: "#0c868d", "&:hover": { bgcolor: "#0a6b70" } }}>Apply Now</Button>
              <Button variant="outlined" sx={{ color: "white", borderColor: "rgba(255,255,255,0.6)", "&:hover": { borderColor: "#0c868d", color: "#0c868d" } }}>Talk to an Advisor</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  </Section>
);

const DataScienceCoursePage: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Data Science Course | Greycampus</title>
        <meta name="description" content="Replicated data science course template using Material UI." />
      </Head>
      <Hero />
      <Highlights />
      <ThreePillars />
      <FutureWithAI />
      <ProgramHighlights />
      <CareersReadyFor />
      <Recruiters />
      <JobCarousel />
      <Curriculum />
      <Projects />
      {/* Jobs showcase and career services */}
      {/* Simplified versions inline with current design system */}
      
      <Pricing />
      <Faqs />
      <CTA />
    </ThemeProvider>
  );
};

// Opt-out of global Layout (no header/footer)
// This is picked up by pages/_app.tsx
(DataScienceCoursePage as any).disableLayout = false;

export default DataScienceCoursePage;


