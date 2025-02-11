import Box from "@mui/material/Box";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const VideoSection = () => {
    return (
        <Box sx={{ position: "relative", width: "100%", borderRadius: "16px" }}>
            <video
                src={`${API_URL}/uploads/Shruti_Corporate_video_GC_Enterprise_8a697545f0.mp4`}
                preload="metadata"
                controls
                muted
                playsInline
                poster={`${API_URL}/uploads/GC_20_20_Enterprise_20_Intro_65f395cc1d.webp`} // ✅ Show Image Before Video Loads
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