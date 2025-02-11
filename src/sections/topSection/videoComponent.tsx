import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const VideoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (videoRef.current) observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    // ✅ Function to play video when clicking the Play button
    const handlePlayVideo = () => {
        setIsVisible(true); // Show the video
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play(); // ✅ Auto-play video when play button is clicked
            }
        }, 200); // Small delay to ensure video is rendered before playing
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "black",
            }}
        >
            {isVisible ? (
                <video
                    ref={videoRef}
                    src={`${API_URL}/uploads/Shruti_Corporate_video_GC_Enterprise_8a697545f0.mp4`}
                    controls
                    muted
                    playsInline
                    poster={`${API_URL}/uploads/GC_20_20_Enterprise_20_Intro_65f395cc1d.webp`}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: "16px",
                    }}
                />
            ) : (
                <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
                    {/* ✅ Video Thumbnail */}
                    <img
                        src={`${API_URL}/uploads/GC_20_20_Enterprise_20_Intro_65f395cc1d.webp`}
                        alt="Video Thumbnail"
                        width="100%"
                        height="auto"
                        style={{
                            borderRadius: "16px",
                            display: "block",
                        }}
                    />

                    {/* ✅ Play Button Overlay (Only Clicking This Will Play Video) */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "50%",
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#ff7a59",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "0.3s ease-in-out",
                            cursor: "pointer",
                        }}
                        onClick={handlePlayVideo} // ✅ Only clicking this plays the video
                    >
                        <PlayArrowIcon sx={{ color: "white", fontSize: "40px" }} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default VideoSection;
