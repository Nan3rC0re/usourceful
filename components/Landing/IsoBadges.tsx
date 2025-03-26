"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const IsoBadges = () => {
  return (
    <div className="w-full flex justify-center md:absolute top-[8rem] ">
      <div className="md:absolute md:left-1/2 md:-translate-x-1/2  md:w-[1350px] md:h-[300px] md:overflow-hidden ">
        <div className="relative w-full h-full flex  justify-center items-center">
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
            className="m-2 md:m-0 md:absolute md:top-2 md:left-0"
          >
            <Image
              src="/Landing/icon-iso-yellow.png"
              alt="Yellow ISO badge"
              width={150}
              height={150}
              priority
              className="w-20 h-20 md:w-[150px] md:h-[150px] aspect-square object-contain"
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
            className="m-2 md:m-0 md:absolute md:top-2 md:right-0"
          >
            <Image
              src="/Landing/icon-iso-pink.png"
              alt="Pink ISO badge"
              width={150}
              height={150}
              priority
              className="w-20 h-20 md:w-[150px] md:h-[150px] aspect-square object-contain"
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
            className="m-2 md:m-0 md:absolute md:top-36 md:left-36"
          >
            <Image
              src="/Landing/icon-iso-green.png"
              alt="Green ISO badge"
              width={150}
              height={150}
              priority
              className="w-20 h-20 md:w-[150px] md:h-[150px] aspect-square object-contain"
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
            className="m-2 md:m-0 md:absolute md:top-36 md:right-36"
          >
            <Image
              src="/Landing/icon-iso-blue.png"
              alt="Blue ISO badge"
              width={150}
              height={150}
              priority
              className="w-20 h-20 md:w-[150px] md:h-[150px] aspect-square object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IsoBadges;
