import React from "react";
import Box from "@mui/material/Box";
import { API_URL } from "src/utilities/resources";
import HubspotForm from "../../components/hubspot-form/index";
import ContactUsForm from "@components/ContactUsForm";

const styles = {
    container: {
        padding: "80px 30px", // Adjust padding for responsiveness
        backgroundImage: `url(${ API_URL }/uploads/blog_post_bg_3725fb4e57.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%", // Ensure it doesn't exceed the parent width
        overflow:'hidden',
        maxWidth: "100vw", // Prevent overflow
        display: "flex",
        flexDirection: "column", // Fixed typo
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box", // Include padding in width calculation
        fontFamily: 'Poppins, sans-serif',
    },
    formContainer: {
        maxWidth: "580px", // Restrict the form width
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "24px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
};

const GetInTouch = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.formContainer}>
          <ContactUsForm/>
            </Box>
        </Box>
    );
};

export default GetInTouch;
