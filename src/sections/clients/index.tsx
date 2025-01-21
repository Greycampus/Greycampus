import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { API_URL } from "src/utilities/resources";

// Styles Object
const styles = {
    container: {
        backgroundColor: "#fff",
        color: "#000",
        padding: "80px 2rem", // 80px padding on top and bottom, 2rem on left and right
        textAlign: "center",
        fontFamily: 'Poppins, sans-serif',
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "3rem",
    },
    logoImage: {
        maxWidth: "120px",
        height: "auto",
        margin: "auto",
        display: "block",
    },
};

// Array of Client Logos
const clientLogos = [
    {
        id: 1, src: `${API_URL}/uploads/Deloitte_logo_e2409d806c.webp`, alt: "Deloitte" },
    {
        id: 2, src: `${API_URL}/uploads/Ola_Cabs_logo_svg_aa02f2a83f.webp`, alt: "OLA" },
    { id: 3, src: `${API_URL}/uploads/wipro_logo_ea6b7b53ad.webp`, alt: "Wipro" },
    { id: 4, src: `${API_URL}/uploads/ADP_logo_0646b41923.webp`, alt: "ADP" },
    { id: 5, src: `${API_URL}/uploads/oxfam_logo_cc5d2bfaea.webp`, alt: "Oxfam" },
    { id: 6, src: `${API_URL}/uploads/DFS_Group_logo_b92b48f364.webp`, alt: "DFS" },
    { id: 7, src: `${API_URL}/uploads/Neuland_Master_Logo_Tagline_RGB_ec62ab7a10.webp`, alt: "Neuland" },
    { id: 8, src: `${API_URL}/uploads/indian_navy_976a76f2a2.webp`, alt: "Indian Navy" },
    { id: 9, src: `${API_URL}/uploads/trantor_OG_TAG_LOGO_688b6490c8.webp`, alt: "Trantor" },
    { id: 10, src: `${API_URL}/uploads/Johnson_Johnson_Logo_3b008f861c.webp`, alt: "Johnson & Johnson" },
    {
        id: 11, src: `${API_URL}/uploads/ABBOTT_LOGO_9962c9da42.webp`, alt: "Abbott" },
    { id: 12, src: `${API_URL}/uploads/Saudi_Aramco_Logo_c6fffda38f.webp`, alt: "Aramco" },
    { id: 13, src: `${API_URL}/uploads/Mahindra_Finance_logo_Vector_f3f4e65400.webp`, alt: "Mahindra Finance" },
    { id: 14, src: `${API_URL}/uploads/Pfizer_Logo_PNG_45de4f0469.webp`, alt: "Pfizer" },
    { id: 15, src: `${API_URL}/uploads/Coca_Cola_Logo_1934_99c7d82293.webp`, alt: "Coca Cola" },
    { id: 16, src: `${API_URL}/uploads/hewlett_packard_logo_png_transparent_f81f754775.webp`, alt: "HP" },
    { id: 17, src: `${API_URL}/uploads/Otis_Logo_1fce5aec28.webp`, alt: "OTIS" },
    {
        id: 18, src: `${API_URL}/uploads/Sabre_web_logo_1c88f786bd.webp`, alt: "Sabre Industries" },
];

const EnterpriseClients = () => {
    return (
        <Box sx={styles.container}>
            {/* Title */}
            <Typography sx={styles.title}>Our Enterprise Clients</Typography>

            {/* Grid of Logos */}
            <Grid container spacing={4}>
                {clientLogos.map((logo) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={logo.id}>
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            style={styles.logoImage}
                            loading="lazy"
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EnterpriseClients;