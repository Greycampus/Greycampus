import Box from "@mui/material/Box";
import Image from "next/image";
import ContactForm from "@components/contact";
import dynamic from "next/dynamic";
const DynaminContactForm = dynamic(() => import("src/sections/trainingSolution"));

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const VideoSection = () => {
    return (
        <Box sx={{ position: "relative", width: "100%", borderRadius: "16px" }}>
            <video
                src={`${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/uploads/Shruti_Corporate_video_GC_Enterprise_5843c07baf.mp4`}
                preload="metadata"
                controls
                muted
                playsInline
                poster="https://www.odinschool.com/hubfs/GC(B2B)/GC%20-%20Enterprise%20Intro.webp" // ✅ Show Image Before Video Loads
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "16px"
                }}
            />
        </Box>
    );
};

const TopSection = () => {
    return (
        <Box sx={{
            position: "relative", width: "100%", overflow: "hidden", }}>
            <Image
                src={'https://www.greycampus.com/hubfs/GC%28B2B%29/gc-bg.webp'}
                alt="Background"
                objectFit="cover"
                priority
                layout="fill"
                decoding="async" // ✅ Ensures non-blocking rendering
                loading="eager"  // ✅ Forces immediate rendering
            />
            <Box sx={{
                position: "relative",
                zIndex: 1,
                py: '80px',
                display: { md: 'flex' },
                justifyContent: 'space-between',
                px: '20px',
                maxWidth: '1280px',
                flex: 1
            }}>
                <Box sx={{ flex: 1, mr: { sm: '0px', md: '40px' }, mb: '16px' }}>
                    <VideoSection />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    );
};

export default TopSection;