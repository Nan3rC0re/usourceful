import CTA from "@/components/Landing/CTA";
import DemoImg from "@/components/Landing/DemoImg";
import Features from "@/components/Landing/Features/Features";
import Header from "@/components/Landing/Header";
import React from "react";

const Landing = () => {
  return (
    <div className="landing-section">
      <Header />
      <div className="landing-sub-section">
        <DemoImg />
        <Features />
        <CTA />
      </div>
    </div>
  );
};

export default Landing;
