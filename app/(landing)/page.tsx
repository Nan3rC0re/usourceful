"use client";
import CTA from "@/components/Landing/CTA";
import DemoImg from "@/components/Landing/DemoImg";
import Features from "@/components/Landing/Features/Features";
import Header from "@/components/Landing/Header";
import IsoBadges from "@/components/Landing/IsoBadges";
import { motion } from "motion/react";
import React from "react";

const Landing = () => {
  return (
    <div className="landing-section">
      <IsoBadges />
      <Header />
      <motion.div
        initial={{ y: -4, opacity: 0, filter: "blur(6px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.6,
        }}
        className="landing-sub-section"
      >
        <DemoImg />
        <Features />
        <CTA />
      </motion.div>
    </div>
  );
};

export default Landing;
