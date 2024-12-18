import ContactForm from "@components/contact";
import WidthWrapper from "@components/widthWrapper";
import { Box } from "@mui/material";
import React from "react";

const styles = {
    mobContainer: {
        px: '20px',
        py: '80px',
        fontFamily: 'Poppins'
    },
    lgContainer: {
        backgroundImage: `url("https://www.greycampus.com/hubfs/GC%28B2B%29/gc-bg.webp")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",   // Adjust as needed
        alignItems: 'center',
        fontFamily: 'Poppins'
    }
}

const VideoSection = () => {
    return (
        <video
            src="https://www.odinschool.com/hubfs/GC(B2B)/Shruti%20Corporate%20video%20-%20GC%20Enterprise.mp4"  // Local video file in public/videos folder
            controls
            autoPlay={false}
            muted={false}
            loop={false}
            poster="https://www.odinschool.com/hubfs/GC(B2B)/GC%20-%20Enterprise%20Intro.webp"
            style={{ width: "100%", height: 'auto', objectFit: "cover", borderRadius: '16px' }}
        >
            Your browser does not support the video tag.
        </video>
    )
}

const TopSection = () => {

    return (
        <Box sx={styles.lgContainer}>
            <Box sx={{
                    py: '80px',
                    display: { md: 'flex'},
                    justifyContent: 'space-between',
                    px: '20px',
                    maxWidth: '1280px',
                    flex: 1
                }} 
            >   
                <Box sx={{ flex: 1, mr: { sm: '0px', md: '40px'}, mb: '16px' }}>
                    <VideoSection />
                </Box>
                <Box sx={{ flex: 1, }}>
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    )
}

export default TopSection;