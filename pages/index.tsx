import React from "react";

import Footer from "@components/css/footer";
import ResponsiveHeader from "@components/css/header";
import ContactForm from "@components/contact";
import TopSection from "src/sections/topSection";
import HowWeWork from "src/sections/howWeWork";
import ImpactSection from "src/sections/impactSection";
import TrainingProgramsSection from "src/sections/trainingSolution";
import ProgramHighlights from "src/sections/highlights";
import AreasOfExpertise from "src/sections/areaOfExpertise";
import EnterpriseClients from "src/sections/clients";
import GetInTouch from "src/sections/getInTouch";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <ResponsiveHeader />
      <TopSection />
      <ImpactSection />
      <TrainingProgramsSection />
      <HowWeWork />
      <ProgramHighlights />
      <AreasOfExpertise />
      <EnterpriseClients />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
