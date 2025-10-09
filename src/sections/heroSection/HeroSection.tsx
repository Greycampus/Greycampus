"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
} from "@mui/material";
import { ArrowForward, Close as CloseIcon } from "@mui/icons-material";

const SecondaryForm = () => (
  <Box>
    <Typography variant="body1" color="text.primary">
      Form goes here...
    </Typography>
  </Box>
);

const HeroSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
        color: "text.primary",
        background: "linear-gradient(135deg, #0f111a, #1a1a2e)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - 2 Images */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="center">
              <Box
                component="img"
                src="https://strapi.odinschool.com/uploads/image1_5d9dce47c3.webp"
                alt="Student 1"
                sx={{
                  width: "65%",
                  maxWidth: 220,
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box
                component="img"
                src="https://strapi.odinschool.com/uploads/img2_a118e82026.webp"
                alt="Student 2"
                sx={{
                  width: "65%",
                  maxWidth: 220,
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Stack>
          </Grid>

          {/* Center Column - Content */}
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <Typography
                variant="h6"
                color="#fff"
                fontWeight="400"
                mb={2}
              >
                Upgrade Your Skills
              </Typography>
              <Typography
                color="#0c868d"
                variant="h2"
                fontWeight="bold"
                sx={{ lineHeight: 1.2, mb: 3 }}
              >
                Build Your Future <br />
                <Box component="span" color="#fff">
                  With GreyCampus
                </Box>
              </Typography>
              <Typography
                variant="body1"
                color="#d9d9d9"
                sx={{ maxWidth: 500, mx: "auto", mb: 4 }}
              >
                Join industry-focused bootcamps to gain hands-on experience and
                become job-ready in today’s tech landscape.
              </Typography>

              {/* CTA */}
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => setFormOpen(true)}
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontWeight: "bold",
                  backgroundColor: "#FFD700", // Yellow CTA
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#FFC107",
                  },
                }}
              >
                Talk to an Expert
              </Button>
            </Box>
          </Grid>

          {/* Right Column - 2 Images */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2} alignItems="center">
              <Box
                component="img"
                src="https://strapi.odinschool.com/uploads/img2_fc7fbb8c4e_04cd97dfc2.webp"
                alt="Student 3"
                sx={{
                  width: "65%",
                  maxWidth: 220,
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box
                component="img"
                src="https://strapi.odinschool.com/uploads/img3_d2a7f5236c_ce387f9b52.webp"
                alt="Student 4"
                sx={{
                  width: "65%",
                  maxWidth: 220,
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Modal Form */}
      <Dialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>
          Enquire Now
          <IconButton
            aria-label="close"
            onClick={() => setFormOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <SecondaryForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default HeroSection;
