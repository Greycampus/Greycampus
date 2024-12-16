import ContactForm from "@components/contact";
import WidthWrapper from "@components/widthWrapper";
import { Box } from "@mui/material";
import React from "react";

const styles = {
    mobContainer: {
        px: '20px',
        py: '80px',
    },
    lgContainer: {
        backgroundImage: `url("https://www.greycampus.com/hubfs/GC%28B2B%29/gc-bg.webp")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "400px", // Adjust as needed
        width: "100%",   // Adjust as needed
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
            style={{ width: "100%", height: 'auto', maxWidth: '480px', objectFit: "cover", marginRight: '40px' }}
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
                display: 'flex',
                justifyContent: 'space-between',}} 
            >
                <VideoSection />
                <ContactForm />
            </Box>
        </Box>
    )
}

export default TopSection;