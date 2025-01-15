import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Image from "next/image";
import { LOGO_URl } from "src/utilities/resources";
import { API_URL } from "src/utilities/resources";

const Footer = () => {
  const backgroundImageURL = `${API_URL}/uploads/footer_bg_c2518bb467.webp`; // Replace this URL

  // Define links for each section
  const footerLinks = {
    company: [
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
      { name: "Terms of Use", link: "/termsOfUse" },
      { name: "Privacy Policy", link: "/privacyPolicy" },
    ],
    resources: [
      { name: "Blog", link: "/blog" },
      { name: "OpenCampus", link: "/openCampus" },
    ],
    bootcamps: [
      { name: "Data Science Course", link: "https://www.odinschool.com/data-science-course" },
      { name: "Power BI Course", link: "https://www.odinschool.com/power-bi-certification-course" },
      { name: "Applied Generative AI Course", link: "https://www.odinschool.com/generative-ai-course-iitg" },
      { name: "Certificate Program in Data Science and Machine Learning", link: "https://www.odinschool.com/certificate-program-in-data-science-and-machine-learning" },
    ],
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    > 
      <Box sx={{ py: '16px', px: 4}}>
        <Image src={LOGO_URl} alt="GreyCampus Logo" width={150} height={40} priority />
      </Box>
      <Divider sx={{ bgcolor: '#0C868D' }}/>
      <Box sx={{ p: 4, mt: '16px'}}>
        <Grid container spacing={4}>
          {/* Company Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "Poppins, sans-serif", }}>
              Company
            </Typography>
            {footerLinks.company.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                underline="none"
                color="inherit"
                display="block"
                sx={{ mb: 1, "&:hover": { textDecoration: "underline", fontFamily: "Poppins, sans-serif", } }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: "Poppins, sans-serif", }}>
              Resources
            </Typography>
            {footerLinks.resources.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                underline="none"
                color="inherit"
                display="block"
                sx={{ mb: 1, "&:hover": { textDecoration: "underline", fontFamily: "Poppins, sans-serif", } }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          {/* Bootcamps Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Bootcamps
            </Typography>
            {footerLinks.bootcamps.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                underline="none"
                color="inherit"
                display="block"
                sx={{ mb: 1, "&:hover": { textDecoration: "underline", fontFamily: "Poppins, sans-serif", } }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;