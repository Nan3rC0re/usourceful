"use client";
import Image from "next/image";
import { motion } from "motion/react";

const DemoImg = () => {
  return (
    <div className="demo-section-bg">
      <div className="relative size-full overflow-hidden">
        <motion.div
          initial={{ y: -2, opacity: 0, filter: "blur(6px)", scale:1.04}}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale:1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.9,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/Landing/demo.png"
            alt="demoImg"
            width={1208}
            height={902}
            className="demo-img "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DemoImg;
