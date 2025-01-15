import Box from "@mui/material/Box";
import Image from "next/image";
import ContactForm from "@components/contact";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const VideoSection = () => {
    return (
        <Box sx={{ position: "relative", width: "100%", borderRadius: "16px" }}>
            <video
                src={`${API_URL}/uploads/Shruti_Corporate_video_GC_Enterprise_5843c07baf.mp4`}
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

export default VideoSection;