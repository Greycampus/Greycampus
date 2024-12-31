import React from "react";
import { Box, Typography, Grid } from "@mui/material";

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
        id: 1, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Deloitte-logo.webp?width=300&name=Deloitte-logo.webp", alt: "Deloitte" },
    {
        id: 2, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Ola_Cabs_logo.svg.webp?width=150&name=Ola_Cabs_logo.svg.webp", alt: "OLA" },
    { id: 3, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/wipro-logo.webp?width=300&name=wipro-logo.webp", alt: "Wipro" },
    { id: 4, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/ADP-logo.webp?width=300&name=ADP-logo.webp", alt: "ADP" },
    { id: 5, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/oxfam-logo.webp?width=300&name=oxfam-logo.webp", alt: "Oxfam" },
    { id: 6, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/DFS_Group_logo.webp?width=150&name=DFS_Group_logo.webp", alt: "DFS" },
    { id: 7, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Neuland-Master-Logo-Tagline-RGB.webp?width=150&name=Neuland-Master-Logo-Tagline-RGB.webp", alt: "Neuland" },
    { id: 8, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/indian%2Bnavy.webp?width=300&name=indian%2Bnavy.webp", alt: "Indian Navy" },
    { id: 9, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/trantor-OG-TAG-LOGO.webp?width=150&name=trantor-OG-TAG-LOGO.webp", alt: "Trantor" },
    { id: 10, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Johnson-Johnson-Logo.webp?width=150&name=Johnson-Johnson-Logo.webp", alt: "Johnson & Johnson" },
    {
        id: 11, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/ABBOTT-LOGO.webp?width=300&name=ABBOTT-LOGO.webp", alt: "Abbott" },
    { id: 12, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Saudi-Aramco-Logo.webp?width=150&name=Saudi-Aramco-Logo.webp", alt: "Aramco" },
    { id: 13, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Mahindra-Finance-logo-Vector.webp?width=150&name=Mahindra-Finance-logo-Vector.webp", alt: "Mahindra Finance" },
    { id: 14, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Pfizer-Logo-PNG.webp?width=150&name=Pfizer-Logo-PNG.webp", alt: "Pfizer" },
    { id: 15, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Coca-Cola-Logo-1934.webp?width=150&name=Coca-Cola-Logo-1934.webp", alt: "Coca Cola" },
    { id: 16, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/hewlett-packard-logo-png-transparent.webp?width=150&name=hewlett-packard-logo-png-transparent.webp", alt: "HP" },
    { id: 17, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Otis-Logo.webp?width=300&name=Otis-Logo.webp", alt: "OTIS" },
    {
        id: 18, src: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/Sabre_web_logo.webp?width=150&name=Sabre_web_logo.webp", alt: "Sabre Industries" },
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