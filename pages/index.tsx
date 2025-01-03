import React from "react";
import dynamic from "next/dynamic";

// 🚀 Load essential components normally (Above-the-fold content)
import TopSection from "src/sections/topSection";
import ImpactSection from "src/sections/impactSection";

// 🚀 Keep lazy loading for non-essential components (Below-the-fold content)
const TrainingProgramsSection = dynamic(() => import("src/sections/trainingSolution"));
const HowWeWork = dynamic(() => import("src/sections/howWeWork"));
const ProgramHighlights = dynamic(() => import("src/sections/highlights"));
const AreasOfExpertise = dynamic(() => import("src/sections/areaOfExpertise"));
const EnterpriseClients = dynamic(() => import("src/sections/clients"));
const GetInTouch = dynamic(() => import("src/sections/getInTouch"));

export const getStaticProps = async () => {
  // Pre-render the page during build time
  // Add any necessary static props here (if needed)
  return {
    props: {}, // No dynamic data needed
  };
};

const Home: React.FC = () => {
  return (
    <>
      <TopSection />
      <ImpactSection />
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