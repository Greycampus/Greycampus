'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper, // Using Paper for the cards for elevation
  styled,
} from '@mui/material';

// 1. Inline JSON Data for the feature cards
const featuresData = [
  {
    id: 1,
    image: 'https://strapi.odinschool.com/uploads/Live_instructor_led_5186610ca9.webp', // Placeholder URL, replace with actual
    alt: 'Instructor-Led Classes',
    label: 'Instructor-Led Classes',
  },
  {
    id: 2,
    image: 'https://strapi.odinschool.com/uploads/Hands_on_labs_c697eba9a8.webp', // Placeholder URL, replace with actual
    alt: 'Hands-on Projects and Labs',
    label: 'Hands-on Projects and Labs',
  },
  {
    id: 3,
    image: 'https://strapi.odinschool.com/uploads/500_hiring_organisations_c7884faed5.webp', // Placeholder URL, replace with actual
    alt: 'Mock Interviews and Soft Skills',
    label: 'Mock Interviews and Soft Skills',
  },
  {
    id: 4,
    image: 'https://strapi.odinschool.com/uploads/Admissions_portal_a48e2e9db2.webp', // Placeholder URL, replace with actual
    alt: 'Dedicated Career Assistance',
    label: 'Dedicated Career Assistance',
  },
];

// 2. Custom Styled Components for precise design matching
const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#262626', // White background
  padding: theme.spacing(10, 0), // Adjust padding as needed
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: '2.4rem',
  textAlign: 'center',
  fontWeight: 600,
  color: '#fff', // Dark text
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
}));

const HighlightedText = styled('span')({
  color: '#0c868d', // Blue color for the highlight
});

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.05rem',
  textAlign: 'center',
  color: '#6c757d', // Muted text color
  maxWidth: 700,
  margin: '0 auto',
  marginBottom: theme.spacing(8), // Space before the cards
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
    marginBottom: theme.spacing(6),
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', // Soft shadow
  backgroundColor: '#ffffff',
  height: '100%', // Ensure consistent height if needed
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const FeatureImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px', // Slight border-radius for images
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Subtle shadow for the image itself
});

const FeatureLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#212529', // Dark text for label
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const CareerNextLevelSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Title and Subtitle */}
        <MainTitle variant="h2">
          Everything you need to take your <br />
          <HighlightedText>career to the next level</HighlightedText>
        </MainTitle>
        <Subtitle variant="body1">
          There's no time like the present to upskill your career. Start your upskilling journey now to grab the
          best opportunities in the market.
        </Subtitle>

        {/* Feature Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {featuresData.map((feature) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={feature.id}>
              <FeatureCard elevation={0}> {/* elevation 0 to use custom boxShadow */}
                <FeatureImage src={feature.image} alt={feature.alt} />
                <FeatureLabel variant="body1">
                  {feature.label}
                </FeatureLabel>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default CareerNextLevelSection;