import React from "react";

import { Cards, Footer, Header, Main } from "@components/css";
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
      <Header />
      <TopSection />
      <ImpactSection />
      <TrainingProgramsSection />
      <HowWeWork />
      <ProgramHighlights />
      <AreasOfExpertise />
      <EnterpriseClients />
      <GetInTouch />
    </div>
  );
};

export default Home;
