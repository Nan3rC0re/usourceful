"use client";
import React, { useState } from "react";
import ResourceNav from "@/components/my-ui/resource-nav";
import EarlyCareers from "@/app/early-careers/page";
import Organizations from "@/app/organizations/page";
import CareerPath from "@/app/career-paths/page";
import Courses from "@/app/courses/pages";
import ShimmerDiv from "@/components/my-ui/shimmer-button";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Early Careers");

  const renderContent = () => {
    switch (currentPage) {
      case "Early Careers":
        return <EarlyCareers />;
      case "Organizations":
        return <Organizations />;
      case "Career Paths":
        return <CareerPath />;
      case "Courses":
        return <Courses />;
      default:
        return <EarlyCareers />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen p-4 flex justify-center w-full"
    >
      <main className="flex flex-col mt-[80px] w-[80rem] items-center text-center ">
        <ShimmerDiv />
        <h1 className="md:text-4xl text-2xl font-semibold dark:text-white/85 text-neutral-900">
          A library of resources for computer science students
        </h1>
        <p className="md:text-lg text-sm mt-1 text-muted-foreground">
          New resources added frequently
        </p>

        <div className="new-additions-container flex flex-col gap-4 h-[100%] w-full max-w-4xl mt-[100px]">
          <ResourceNav
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <div className="list-of-additions flex flex-col h-full overflow-hidden">
            {renderContent()}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
