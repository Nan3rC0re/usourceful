"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const IsoBadges = () => {
  return (
    <div className="w-full absolute">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[1350px] h-[300px] overflow-hidden">
        <div className="relative w-full h-full ">
          <motion.div
            initial={{ y: 0, opacity: 0, filter: "blur(6px)", scale: 0.2 }}
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
            className="absolute top-2 left-0"
          >
            <Image
              src="/Landing/icon-iso-yellow.png"
              alt="Yellow ISO badge"
              width={150}
              height={150}
              priority
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
            className="absolute top-2 right-0"
          >
            <Image
              src="/Landing/icon-iso-pink.png"
              alt="Pink ISO badge"
              width={150}
              height={150}
              priority
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
            className="absolute top-36 left-36"
          >
            <Image
              src="/Landing/icon-iso-green.png"
              alt="Green ISO badge"
              width={150}
              height={150}
              priority
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
            className="absolute top-36 right-36"
          >
            <Image
              src="/Landing/icon-iso-blue.png"
              alt="Blue ISO badge"
              width={150}
              height={150}
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IsoBadges;
