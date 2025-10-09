import React from "react";

// 🚀 Load the first two components eagerly for improved LCP
import ImpactSection from "src/sections/impactSection";
import lazyLoadHydrate from "next-lazy-hydrate";
import Head from "next/head";
import HeroSection from "src/sections/heroSection/HeroSection";
import DiverseLearningPrograms from "src/sections/featureJobs/DiverseLearningPrograms";
import CareerNextLevelSection from "src/sections/CareerNext/CareerNextLevelSection";

import TrainingProgramsSection from "src/sections/trainingSolution";
import GetInTouch from "src/sections/getInTouch";
import HowWeWork from "src/sections/howWeWork";
import TopSection from "src/sections/topSection";
import { API_URL } from "src/utilities/resources";

// 📦 Dynamically import the rest of the sections
// const TrainingProgramsSection = lazyLoadHydrate(() => import("src/sections/trainingSolution"));
const ProgramHighlights = lazyLoadHydrate(() => import("src/sections/highlights"));
const AreasOfExpertise = lazyLoadHydrate(() => import("src/sections/areaOfExpertise"));
const EnterpriseClients = lazyLoadHydrate(() => import("src/sections/clients"));
// const GetInTouch = lazyLoadHydrate(() => import("src/sections/getInTouch"));

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
    <link rel="preload" as="image" href={`${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`} />
    <link rel="canonical" href='https://www.greycampus.com' />


    </Head>
    
      {/* 🚀 Eagerly Load First Two Sections for Improved LCP */}

      <HeroSection />
      <section>
        <img   style={{
                  width: "100%",
                  height: "auto",
                }} src="https://strapi.odinschool.com/uploads/Screenshot_from_2025_10_09_12_00_19_b68ce06d7d.png" alt="logos"  />
      </section>

      <DiverseLearningPrograms />
      <CareerNextLevelSection />


    </>
  );
};

export default Home;