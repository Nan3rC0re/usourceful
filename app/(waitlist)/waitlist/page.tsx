"use client";
import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Waitlist = () => {
  return (
    <main className="waitlist-container">
      <div className="pb-40  w-full max-w-[95rem] pt-3">
        <Link href="/" className="flex items-center gap-1 w-fit">
          <Icons.logo className="w-8 h-8" />
          <h1 className="text-xl font-medium">usourceful</h1>
        </Link>
      </div>
      <header>
        <div className="header-section">
          <motion.h1
            initial={{ y: -4, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0,
            }}
            className="font-medium text-4xl md:text-6xl"
          >
            Explore amazing academic and career resources.
          </motion.h1>

          <motion.p
            initial={{ y: -3, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="sub-header"
          >
            A library of useful resources for computer science students. New
            resources added weekly.
          </motion.p>

          <motion.div
            initial={{ y: -4, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.6,
            }}
            className="flex  flex-col md:flex-row gap-2 w-full max-w-xl"
          >
            <Input
              placeholder="School email"
              type="email"
              className="w-full text-base"
            />
            <Link href="/waitlist" passHref>
              <Button className="max-md:w-full">Join Waitlist</Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -4, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.6,
            }}
          >
            <p className="text-muted-foreground text-xs">
              You will be emailed only for Usourceful&apos;s launch — no
              spamming.
            </p>
          </motion.div>
        </div>
      </header>
      <div className="w-full  gap-2 lg:gap-20 flex-1 items-center justify-center flex">
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
            delay: 0.6,
          }}
        >
          <Image
            src="/Waitlist/icon-yellow.png"
            alt="demoImg"
            width={300}
            height={300}
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
            delay: 0.7,
          }}
        >
          <Image
            src="/Waitlist/icon-pink.png"
            alt="demoImg"
            width={300}
            height={300}
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
        >
          <Image
            src="/Waitlist/icon-green.png"
            alt="demoImg"
            width={300}
            height={300}
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
            delay: 0.9,
          }}
        >
          <Image
            src="/Waitlist/icon-blue.png"
            alt="demoImg"
            width={300}
            height={300}
            priority
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Waitlist;
