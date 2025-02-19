"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header>
      <div className="header-section">
        <motion.h1
          initial={{ y: -2, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0,
          }}
          className="font-medium text-4xl md:text-6xl"
        >
          Explore amazing academic and career resources.
        </motion.h1>

        <motion.p
          initial={{ y: -2, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="sub-header"
        >
          A library of useful resources for computer science students. New
          resources added weekly.
        </motion.p>

        <motion.div
          initial={{ y: -2, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <Button>Join Waitlist</Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
