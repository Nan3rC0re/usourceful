"use client";

import Header from "@/components/Landing/Header";
import IsoBadges from "@/components/Landing/IsoBadges";
import ResourcePreview from "@/components/Resources/ResourcePreview";
import { motion } from "motion/react";
import React from "react";

const Landing = () => {
  return (
    <div className="landing-section">
      <IsoBadges />
      <Header />
      <ResourcePreview />
    </div>
  );
};

export default Landing;
