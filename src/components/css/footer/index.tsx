import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import Image from "next/image";
import { LOGO_URl } from "src/utilities/resources";

const Footer = () => {
  const backgroundImageURL = "https://www.greycampus.com/hubfs/footer%20bg.webp"; // Replace this URL

  // Define links for each section
  const footerLinks = {
    company: [
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ],
    resources: [
      { name: "Blog", link: "/blog" },
      { name: "OpenCampus", link: "/openCampus" },
    ],
    bootcamps: [
      { name: "Data Science Course", link: "/bootcamps/data-science" },
      { name: "React Web Development", link: "/bootcamps/react-web" },
      { name: "Power BI Course", link: "/bootcamps/power-bi" },
      { name: "Digital Marketing Course", link: "/bootcamps/digital-marketing" },
      { name: "Certified Business Accountant", link: "/bootcamps/accounting" },
      { name: "Online MBA - Manipal University Jaipur", link: "/bootcamps/online-mba-jaipur" },
      { name: "Online MCA - Manipal University Jaipur", link: "/bootcamps/online-mca-jaipur" },
      { name: "Online MCA - Sikkim Manipal University", link: "/bootcamps/online-mca-sikkim" },
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
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Company
            </Typography>
            {footerLinks.company.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                underline="none"
                color="inherit"
                display="block"
                sx={{ mb: 1, "&:hover": { textDecoration: "underline" } }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            {footerLinks.resources.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                underline="none"
                color="inherit"
                display="block"
                sx={{ mb: 1, "&:hover": { textDecoration: "underline" } }}
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
                sx={{ mb: 1, "&:hover": { textDecoration: "underline" } }}
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