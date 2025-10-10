"use client";

import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// JSON data inside the component
const programs = [
  {
    id: "data-science",
    title: "Data Science Bootcamp",
    price: "₹5,000 + GST",
    duration: "3 months • Self-paced + Live sessions",
    description:
      "Master Python, SQL, ML, and Power BI. Build data pipelines and predictive models for business impact.",
    highlights: [
      "Python & SQL mastery",
      "Machine Learning algorithms",
      "Power BI dashboards",
      "Real-world projects",
      "100% placement assistance",
    ],
    badge: "Most Popular",
    icon: "📊",
    link: "https://bootcamp.greycampus.com/data-science-bootcamp",
  },
  {
    id: "data-analyst",
    title: "Data Analyst Bootcamp",
    price: "₹5,000 + GST",
    duration: "3 months • Self-paced + Live sessions",
    description:
      "Transform data into insights. Learn SQL, Excel, Power BI, and Tableau for data-driven decision making.",
    highlights: [
      "SQL & Excel expertise",
      "Power BI & Tableau",
      "Statistical analysis",
      "Business intelligence",
      "100% placement assistance",
    ],
    badge: "Highest ROI",
    icon: "📈",
    link: "https://bootcamp.greycampus.com/data-analyst-bootcamp",
  },
  {
    id: "aiml",
    title: "AI/ML Bootcamp",
    price: "₹5,000 + GST",
    duration: "3 months • Self-paced + Live sessions",
    description:
      "Build production AI systems. Deep learning, LLMs, RAG systems, and autonomous agents.",
    highlights: [
      "Deep Learning & Neural Networks",
      "LLMs & Transformers",
      "RAG systems",
      "AI agents",
      "100% placement assistance",
    ],
    badge: "Cutting Edge",
    icon: "🤖",
    link: "https://bootcamp.greycampus.com/aiml-bootcamp",
  },
];

const ProgramsSection = () => {
  return (
    <Box
      id="programs"
      sx={{
        bgcolor: "#121212",
        color: "#e0e0e0",
        py: { xs: 6, sm: 8, lg: 10 },
        px: { xs: 6, sm: 8, lg: 10 },
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          Choose Your Path to Success
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "700px", mx: "auto", color: "#b0b0b0" }}
        >
          Three comprehensive bootcamps designed for career transformation
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {programs.map((program) => (
          <Grid item xs={12} md={4} key={program.id}>
            <Card
              sx={{
                height: "100%",
                position: "relative",
                backgroundColor: "#1e1e1e",
                border: "2px solid #2a2a2a",
                borderRadius: "10px",
                transition: "0.3s",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 0 20px #0c868d`,
                  borderColor: "#0c868d",
                },
              }}
            >
              {/* Badge */}
              <Chip
                label={program.badge}
                size="small"
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontWeight: "bold",
                  bgcolor: "#0c868d",
                  color: "#fff",
                }}
              />

              <CardContent
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                {/* Icon */}
                <Typography variant="h2" component="div" mb={2}>
                  {program.icon}
                </Typography>

                {/* Title */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#0c868d" }}
                >
                  {program.title}
                </Typography>

                {/* Price */}
                <Typography variant="h5" gutterBottom sx={{ color: "#0c868d" }}>
                  {program.price}
                </Typography>

                {/* Duration */}
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ color: "#b0b0b0" }}
                >
                  {program.duration}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{ mt: 2, mb: 3, color: "#e0e0e0" }}
                >
                  {program.description}
                </Typography>

                {/* Highlights */}
                <Box mb={3}>
                  {program.highlights.map((highlight, idx) => (
                    <Box key={idx} display="flex" alignItems="center" mb={1}>
                      <CheckCircleIcon
                        fontSize="small"
                        sx={{ mr: 1, color: "#0c868d" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "#fff" }}
                      >
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* CTA */}
                <Box mt="auto">
                  <Button
                    variant="contained"
                    fullWidth
                    endIcon={<ArrowRightAltIcon />}
                     onClick={() => window.open(program.link, '_blank')}
                    sx={{
                      bgcolor: "#0c868d",
                      "&:hover": { bgcolor: "#0a6f73" },
                      fontWeight: "bold",
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProgramsSection;
