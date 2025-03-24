import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Head from "next/head";
import ContactUsForm from "@components/ContactUsForm";

const styles = {
    iconStyle: {
        color: '#0C868D',
        mr: '8px'
    }
}

const ContactUsSection: React.FC = () => {
    return (
        <>
        <Head>
        <title>Contact Us | GreyCampus</title>
    <meta name="description" content="Got a Query!! Worry not. You can drop an e-mail or call us anytime. Our 24*7 support service will get query answered and solved." />
    <meta property="og:description" content="Got a Query!! Worry not. You can drop an e-mail or call us anytime. Our 24*7 support service will get query answered and solved." />
    <meta property="og:title" content="Contact Us | GreyCampus" />
    <meta name="twitter:description" content="Got a Query!! Worry not. You can drop an e-mail or call us anytime. Our 24*7 support service will get query answered and solved." />
    <meta name="twitter:title" content="Contact Us | GreyCampus" />
    <link rel="canonical" href='https://www.greycampus.com/contact' />


        </Head>
       
        <Box
            sx={{
                bgcolor: "#000", // Black background
                color: "#fff", // White text
                py: 6,
                px: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Block on small screens, flex on larger screens
                justifyContent: "center",
                alignItems: "stretch", // Ensure children stretch vertically
                gap: 4,
            }}
        >
            {/* Left Side - Contact Form */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: "500px",
                    bgcolor: "#000",
                    borderRadius: "12px",
                    p: 3,
                    color: "#fff",
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        mb: 3,
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bold",
                    }}
                >
                    Contact Us
                </Typography>
                <Box
      sx={{
        backgroundColor: "white", // Set background to white
        padding: "20px", // Add padding
        borderRadius: "8px", // Optional: Add rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add shadow
        maxWidth: "600px", // Limit the width
        margin: "20px auto", // Center the box
      }}
    >
        <ContactUsForm/>
    </Box>
              
            </Box>

            {/* Vertical Divider */}
            <Box
                sx={{
                    width: "1px",
                    bgcolor: "#0C868D", // Divider color
                    height: "auto", // Auto adjusts based on the parent container
                    minHeight: "100%", // Stretch vertically
                    display: { xs: "none", md: "block" }, // Hide on small screens
                }}
            />

            {/* Right Side - Contact Details */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: "500px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        mb: 2,
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bold",
                    }}
                >
                    Contact Details
                </Typography>

                {/* Address */}
                <Paper
                    sx={{
                        bgcolor: "#212529",
                        color: "#fff",
                        borderRadius: "8px",
                        p: 2,
                        display: 'flex'
                    }}
                >   
                    <FmdGoodOutlinedIcon sx={styles.iconStyle}/>
                    <Typography sx={{ fontFamily: "Poppins, sans-serif", }}>
                        GreyCampus Edutech Private Limited, Aikya Vihar, Plot 218, B Block,
                        Kavuri Hills Phase - II, Hyderabad - 500033
                    </Typography>
                </Paper>

                {/* Phone */}
                <Paper
                    sx={{
                        bgcolor: "#212529",
                        color: "#fff",
                        borderRadius: "8px",
                        p: 2,
                        display: 'flex'
                    }}
                >   
                    <EmailOutlinedIcon sx={styles.iconStyle}/>
                    <Typography sx={{ fontFamily: "Poppins, sans-serif", }}>+91 630 010 5523</Typography>
                </Paper>

                {/* Email */}
                <Paper
                    sx={{
                        bgcolor: "#212529",
                        color: "#fff",
                        borderRadius: "8px",
                        p: 2,
                        display: 'flex'
                    }}
                >   
                    <LocalPhoneOutlinedIcon sx={styles.iconStyle}/>
                    <Typography sx={{ fontFamily: "Poppins, sans-serif", }}>enterprise@greycampus.com</Typography>
                </Paper>

                {/* Map */}
                <Box
                    sx={{
                        borderRadius: "8px",
                        overflow: "hidden",
                    }}
                >
                    <iframe
                        title="location"
                        width="100%"
                        height="200"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30538.140612651147!2d78.37327772517094!3d17.44892769735157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOdinSchool%20-%20Data%20Science!5e0!3m2!1sen!2sin!4v1711234567890"
                        loading="lazy"
                        style={{
                            border: 0,
                        }}
                    ></iframe>
                </Box>
            </Box>
        </Box>
        </>
    );
};

export default ContactUsSection;