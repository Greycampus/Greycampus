import Box from "@mui/material/Box";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const VideoSection = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: "16px" }}>
      <video
  src={`${API_URL}/uploads/Shruti_Corporate_video_GC_Enterprise_8a697545f0.mp4`}
  preload="none" // ✅ Prevents auto-loading of the video
  controls
  muted
  playsInline
  poster={`${API_URL}/uploads/GC_20_20_Enterprise_20_Intro_65f395cc1d.webp`}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "16px"
  }}
/>

    </Box>
  );
};

export default VideoSection;
