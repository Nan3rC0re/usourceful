"use client";

import Header from "@/components/Landing/Header";
import CategoryShowcase from "@/components/Landing/CategoryShowcase";
// import IsoBadges from "@/components/landing/IsoBadges";

import React from "react";

const Landing = () => {
  return (
    <div className="landing-section">
      {/* <IsoBadges /> */}
      <Header />
      <CategoryShowcase />
    </div>
  );
};

export default Landing;
