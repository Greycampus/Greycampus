import React from "react";

// 🚀 Load the first two components eagerly for improved LCP
import TopSection from "src/sections/topSection";
import ImpactSection from "src/sections/impactSection";
import lazyLoadHydrate from "next-lazy-hydrate";
import Head from "next/head";

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
    <Head>
    <title>Upskilling Professionals with Outcome-Driven Training Solutions | Boost Efficiency and Performance | BrandName</title>
    <meta name="description" content="Upskill professionals with outcome-driven training solutions. Customized programs in new hire training, executive upskilling, leadership training, and more. Winner of Deloitte Fastest 50 Awards." />
    <meta property="og:description" content="Upskill professionals with outcome-driven training solutions. Customized programs in new hire training, executive upskilling, leadership training, and more. Winner of Deloitte Fastest 50 Awards." />
    <meta property="og:title" content="Upskilling Professionals with Outcome-Driven Training Solutions | Boost Efficiency and Performance | BrandName" />
    <meta name="twitter:description" content="Upskill professionals with outcome-driven training solutions. Customized programs in new hire training, executive upskilling, leadership training, and more. Winner of Deloitte Fastest 50 Awards." />
    <meta name="twitter:title" content="Upskilling Professionals with Outcome-Driven Training Solutions | Boost Efficiency and Performance | BrandName" />
    </Head>
    
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