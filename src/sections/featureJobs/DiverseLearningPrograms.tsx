'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  styled,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School'; // New icon for design

// 1. Inline JSON Data (data remains the same)
const programsData = [
  {
    id: 1,
    category: '',
    title: 'Data Science Bootcamp',
    description: 'Live, project-based program with dedicated placement support. Build a strong portfolio and secure your dream job.',
    image: 'https://strapi.odinschool.com/uploads/data_science_course_display_1_bcfa96067e_6301d52bbb.webp',
    alt: 'Data Science Bootcamp',
    link: '#',
  },
  {
    id: 2,
    category: '',
    title: 'Data Analyst Bootcamp',
    description: 'Master Data Analytics and get job-ready before you graduate. Includes projects, tools, and interview preparation.',
    image: 'https://strapi.odinschool.com/uploads/Data_Analyst_d85d3f99aa.webp',
    alt: 'Data Analyst Bootcamp',
    link: '#',
  },
  {
    id: 3,
    category: '',
    title: 'AI and ML Bootcamp',
    description: 'Master Artificial Intelligence, Generative AI, and LLMs with India\'s only AI program. Project-driven learning approach.',
    image: 'https://strapi.odinschool.com/uploads/AIML_9ee02fd058.png',
    alt: 'AI Course with Machine Learning',
    link: '#',
  },
];

// 2. Custom Styled Components for the NEW DESIGN

// *** NEW DESIGN STYLES ***
const SectionWrapper = styled(Box)(({ theme }) => ({
  // Darker, modern background
  backgroundColor: '#1a1a2e', 
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: '2.4rem',
  fontWeight: 600,
  textAlign: 'center',
  color: '#ffffff', // White title text
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '2.2rem',
  },
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1rem',
  textAlign: 'center',
  color: '#c5c5c5', // Light gray description text
  maxWidth: 800,
  margin: '0 auto',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(5),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  // Clean white card background
  backgroundColor: '#ffffff', 
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Stronger shadow
  borderRadius: theme.spacing(2), // More rounded corners
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderBottom: '4px solid #0c868d', // Primary color accent bar
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 360,
    margin: 'auto',
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 800, // Bolder title
  color: '#1b2a4a', // Dark primary text
  marginBottom: theme.spacing(1),
  minHeight: '3rem',
  // Line clamping CSS remains
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#495057', // Darker description text
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  flexGrow: 1,
  // Line clamping CSS remains
  display: '-webkit-box',
  WebkitLineClamp: 3, 
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const KnowMoreButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase', // Uppercase button text
  color: '#0c868d', 
  fontWeight: 700,
  padding: theme.spacing(0.5, 0), // Small vertical padding
  border: 'none',
  '& .MuiButton-endIcon': {
    marginLeft: theme.spacing(1),
    transition: 'margin-left 0.3s',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#1b2a4a', // Darker on hover
    '& .MuiButton-endIcon': {
        marginLeft: theme.spacing(1.5), // Subtle right movement on hover
    },
  },
}));
// *** END NEW DESIGN STYLES ***

const DiverseLearningPrograms: React.FC = () => {
  return (
    <SectionWrapper>
      {/* Container for content, centered and padded using MUI's sx */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        
        {/* Title Section */}
        <SectionTitle variant="h2">

            Explore GreyCampus's <br />
            <Box component="span" sx={{ color: '#0c868d' }}>Diverse Learning Programs</Box>
        </SectionTitle>
        <SectionDescription variant="body1">
          Designed to help you crack great jobs in emerging technologies and in-demand areas.
        </SectionDescription>

        {/* Card Grid */}
        <Grid container spacing={4} justifyContent="center">
          {programsData.map((program) => (
            <Grid item xs={12} sm={6} md={4} key={program.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="180" // Slightly taller image area
                  image={program.image}
                  alt={program.alt}
                  sx={{ 
                    objectFit: 'cover',
                    // Apply a subtle color filter to the image for a modern look
                    filter: 'brightness(0.8) contrast(1.1)', 
                  }}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 3 }}>
                
                  <CardTitle variant="h5">
                    {program.title}
                  </CardTitle>
                  
                  <CardDescription variant="body2">
                    {program.description}
                  </CardDescription>
                  
                  {/* Button Wrapper: mt: 'auto' pushes the button to the bottom */}
                  <Box sx={{ mt: 'auto', pt: 2 }}> 
                    <KnowMoreButton
                      variant="text"
                      endIcon={<ArrowForwardIcon fontSize="small" />}
                      href={program.link}
                    >
                      Know more
                    </KnowMoreButton>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default DiverseLearningPrograms;