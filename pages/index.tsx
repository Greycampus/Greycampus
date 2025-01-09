import React from "react";
import dynamic from "next/dynamic";

// 🚀 Load the first two components eagerly for improved LCP
import TopSection from "src/sections/topSection";
import ImpactSection from "src/sections/impactSection";

// 📦 Dynamically import the rest of the sections
const TrainingProgramsSection = dynamic(() => import("src/sections/trainingSolution"));
const HowWeWork = dynamic(() => import("src/sections/howWeWork"));
const ProgramHighlights = dynamic(() => import("src/sections/highlights"));
const AreasOfExpertise = dynamic(() => import("src/sections/areaOfExpertise"));
const EnterpriseClients = dynamic(() => import("src/sections/clients"));
const GetInTouch = dynamic(() => import("src/sections/getInTouch"));

export const getStaticProps = async () => {
  return {
    props: {}, // No dynamic data needed
  };
};

const Home: React.FC = () => {
  return (
    <>
      {/* 🚀 Eagerly Load First Two Sections for Improved LCP */}
      <TopSection />
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