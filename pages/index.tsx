import React from "react";

// 🚀 Load all components normally (No lazy loading)
import TopSection from "src/sections/topSection";
import ImpactSection from "src/sections/impactSection";
import TrainingProgramsSection from "src/sections/trainingSolution";
import HowWeWork from "src/sections/howWeWork";
import ProgramHighlights from "src/sections/highlights";
import AreasOfExpertise from "src/sections/areaOfExpertise";
import EnterpriseClients from "src/sections/clients";
import GetInTouch from "src/sections/getInTouch";

export const getStaticProps = async () => {
  // Pre-render the page during build time
  return {
    props: {}, // No dynamic data needed
  };
};

const Home: React.FC = () => {
  return (
    <>
      {/* 🚀 Eagerly Load All Sections for Improved LCP */}
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
