import CTA from "@/components/Landing/CTA";
import DemoImg from "@/components/Landing/DemoImg";
import Features from "@/components/Landing/Features";
import Header from "@/components/Landing/Header";
import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen mt-[168px] flex flex-col items-center max-w-[1356px] w-full gap-40">
      <Header />
      <div className="flex flex-col w-full gap-60 items-center">
        <DemoImg />
        <Features />
        <CTA/>
      </div>
    </div>
  );
};

export default Landing;
