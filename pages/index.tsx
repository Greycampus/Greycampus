import React from "react";

import { Cards, Footer, Header, Main } from "@components/css";
import ContactForm from "@components/contact";
import TopSection from "src/sections/topSection";

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
      <Footer />
    </div>
  );
};

export default Home;
