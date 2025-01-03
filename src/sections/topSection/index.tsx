import { Box } from "@mui/material";
import Image from "next/image";
import ContactForm from "@components/contact";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const VideoSection = () => {
    return (
        <video
            src={`${API_URL}/uploads/Shruti_Corporate_video_GC_Enterprise_5843c07baf.mp4`}
            preload="metadata" // ✅ Loads only metadata first
            controls
            poster="https://www.odinschool.com/hubfs/GC(B2B)/GC%20-%20Enterprise%20Intro.webp"
            style={{ width: "100%", height: 'auto', objectFit: "cover", borderRadius: '16px' }}
        />
    );
};

const TopSection = () => {
    return (
        <Box sx={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
            <Image
                src={`${API_URL}/uploads/gc_bg_6fa78c7ac0.webp?format=webp&width=1920&quality=70`} // ✅ Optimized image request
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority
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