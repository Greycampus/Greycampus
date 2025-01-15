import React from "react";

// 🚀 Load the first two components eagerly for improved LCP
import TopSection from "src/sections/topSection";
import ImpactSection from "src/sections/impactSection";
import lazyLoadHydrate from "next-lazy-hydrate";

// 📦 Dynamically import the rest of the sections
const TrainingProgramsSection = lazyLoadHydrate(() => import("src/sections/trainingSolution"));
const HowWeWork = lazyLoadHydrate(() => import("src/sections/howWeWork"));
const ProgramHighlights = lazyLoadHydrate(() => import("src/sections/highlights"));
const AreasOfExpertise = lazyLoadHydrate(() => import("src/sections/areaOfExpertise"));
const EnterpriseClients = lazyLoadHydrate(() => import("src/sections/clients"));
const GetInTouch = lazyLoadHydrate(() => import("src/sections/getInTouch"));

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