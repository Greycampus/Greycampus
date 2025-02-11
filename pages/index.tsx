import React from "react";

// 🚀 Load the first two components eagerly for improved LCP
import ImpactSection from "src/sections/impactSection";
import lazyLoadHydrate from "next-lazy-hydrate";
import Head from "next/head";
import TrainingProgramsSection from "src/sections/trainingSolution";
import GetInTouch from "src/sections/getInTouch";
import HowWeWork from "src/sections/howWeWork";
// 📦 Dynamically import the rest of the sections
// const TrainingProgramsSection = lazyLoadHydrate(() => import("src/sections/trainingSolution"));
const TopSection = lazyLoadHydrate(() => import("src/sections/topSection"));
const VideoSection= lazyLoadHydrate(() => import("src/sections/topSection/videoComponent"));
const ProgramHighlights = lazyLoadHydrate(() => import("src/sections/highlights"));
const AreasOfExpertise = lazyLoadHydrate(() => import("src/sections/areaOfExpertise"));
const EnterpriseClients = lazyLoadHydrate(() => import("src/sections/clients"));
// const GetInTouch = lazyLoadHydrate(() => import("src/sections/getInTouch"));
import { Box } from "@mui/material";
import HubspotForm from "@components/hubspot-form";
export const getStaticProps = async () => {
  return {
    props: {}, // No dynamic data needed
  };
};

const Home: React.FC = () => {
  return (
    <>
    <Head>
    <title>Upskilling Professionals with Outcome-Driven Training Solutions | Boost Efficiency and Performance | BrandName</title>
    <meta name="description" content="Upskill professionals with outcome-driven training solutions. Customized programs in new hire training, executive upskilling, leadership training, and more. Winner of Deloitte Fastest 50 Awards." />
    <meta property="og:description" content="Upskill professionals with outcome-driven training solutions. Customized programs in new hire training, executive upskilling, leadership training, and more. Winner of Deloitte Fastest 50 Awards." />
    <meta property="og:title" content="Upskilling Professionals with Outcome-Driven Training Solutions | Boost Efficiency and Performance | BrandName" />
    <meta name="twitter:description" content="Upskill professionals with outcome-driven training solutions. Customized programs in new hire training, executive upskilling, leadership training, and more. Winner of Deloitte Fastest 50 Awards." />
    <meta name="twitter:title" content="Upskilling Professionals with Outcome-Driven Training Solutions | Boost Efficiency and Performance | BrandName" />
    </Head>
    
      {/* 🚀 Eagerly Load First Two Sections for Improved LCP */}
      <Box
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
            }}
        >
      <TopSection />

      <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    py: "80px",
                    px: "20px",
                    width: "100%",
                    display: { md: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "40px",
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <VideoSection />
                </Box>
                <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    {/* ✅ HubSpot Form (Commented Out for Now) */}
                    <Box
                        sx={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            minHeight: "365px",
                        }}
                    >
                        <HubspotForm formId="hubspotForm2" />
                    </Box>
                </Box>
            </Box>
      </Box>
      <ImpactSection />

      {/* 📦 Lazy Load Remaining Sections to Improve Performance */}
      <TrainingProgramsSection />
      <HowWeWork />
      <ProgramHighlights />
      <AreasOfExpertise />
      <EnterpriseClients />
      <GetInTouch />
    </>
  );
};

export default Home;