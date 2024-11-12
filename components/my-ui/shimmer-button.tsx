"use client";

import { motion } from "framer-motion";

export default function ShimmerDiv() {
  return (
    <div className="relative overflow-hidden border py-2 px-4 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-600 mb-6">
      {/* Fast shimmer layer */}
      <motion.div
        className="absolute inset-0 origin-center"
        initial={{ x: "-100%", rotate: -1 }}
        animate={{ x: "100%", rotate: 1 }}
        transition={{
          x: {
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            repeatDelay: 3,
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
            repeatDelay: 3,
          },
        }}
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.07) 20%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.07) 60%, rgba(0,0,0,0) 100%)",
          backgroundSize: "200%",
        }}
      />

      <motion.div
        className="absolute inset-0 origin-center"
        initial={{ x: "-100%", rotate: -1 }}
        animate={{ x: "100%", rotate: 1 }}
        transition={{
          x: {
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            repeatDelay: 3,
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
            repeatDelay: 3,
          },
        }}
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.07) 20%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.07) 60%, rgba(255,255,255,0) 100%)",
          backgroundSize: "200%",
        }}
      />

      <h2 className="relative text-xs z-10">✨ Light mode is now available</h2>
    </div>
  );
}
