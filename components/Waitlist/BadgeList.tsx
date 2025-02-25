"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const BadgeList = () => {
  return (
    <div className="md:w-full  gap-2 lg:gap-20 pb-6 justify-center flex">
      <motion.div
        initial={{ y: -2, opacity: 0, filter: "blur(6px)", scale: 0.2 }}
        animate={{
          y: [0, -4, 0],
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          y: {
            delay: 0.8,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          duration: 0.4,
          ease: "easeOut",
          delay: 0.6,
        }}
      >
        <Image
          src="/Waitlist/icon-yellow.png"
          alt="demoImg"
          width={150}
          height={150}
          priority
          className="w-20 h-20 md:w-[150px] md:h-[150px]"
        />
      </motion.div>
      <motion.div
        initial={{ y: -2, opacity: 0, filter: "blur(6px)", scale: 0.2 }}
        animate={{
          y: [0, -4, 0],
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          y: {
            delay: 1.5,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          duration: 0.4,
          ease: "easeOut",
          delay: 0.7,
        }}
      >
        <Image
          src="/Waitlist/icon-pink.png"
          alt="demoImg"
          width={150}
          height={150}
          priority
          className="w-20 h-20 md:w-[150px] md:h-[150px]"
        />
      </motion.div>
      <motion.div
        initial={{ y: -2, opacity: 0, filter: "blur(6px)", scale: 0.2 }}
        animate={{
          y: [0, -4, 0],
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          y: {
            delay: 1,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          duration: 0.4,
          ease: "easeOut",
          delay: 0.8,
        }}
      >
        <Image
          src="/Waitlist/icon-green.png"
          alt="demoImg"
          width={150}
          height={150}
          priority
          className="w-20 h-20 md:w-[150px] md:h-[150px]"
        />
      </motion.div>
      <motion.div
        initial={{ y: -2, opacity: 0, filter: "blur(6px)", scale: 0.2 }}
        animate={{
          y: [0, -4, 0],
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          y: {
            delay: 2,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          duration: 0.4,
          ease: "easeOut",
          delay: 0.9,
        }}
      >
        <Image
          src="/Waitlist/icon-blue.png"
          alt="demoImg"
          width={150}
          height={150}
          priority
          className="w-20 h-20 md:w-[150px] md:h-[150px]"
        />
      </motion.div>
    </div>
  );
};

export default BadgeList;
