import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import React from "react";
import { API_URL } from "src/utilities/resources";
import Head from "next/head";


const TopAbout = () => {
    return (
        <>
            <Head>
                <title>GreyCampus | Thank you</title>
            </Head>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px',  // Adjust the height as needed
                    backgroundImage: `url(${API_URL}/uploads/about_us_bg_1ffec84c94.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    mb: '0px'
                }}
            >

                <Box sx={{ maxWidth: '1280px', flex: 1, width: '100%', px: '16px' }}>
                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Typography sx={{ fontSize: '16px', }}>
                            Thank you
                        </Typography>
                        <Divider sx={{ bgcolor: '#0C868D', height: '6px', borderRadius: '4px', width: '160px', mb: '20px' }} />
                        <Typography variant="h3" sx={{ fontWeight: 800 }}>
                        We appreciate your interest. Our team will get in touch with you shortly!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const Body = () => {

    return (<div></div>)
}


const Thankyou = () => {
    return (
        <Box sx={{ bgcolor: '#000', fontFamily: 'Poppins, sans-serif', }}>
            <TopAbout />
            <Body />
        </Box>
    )
}

export default Thankyou;