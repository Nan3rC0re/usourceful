import { motion } from "motion/react";
import React from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
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
            <Button className="max-md:w-full text-base">Join Waitlist</Button>
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
            You will be emailed only for Usourceful&apos;s launch — no spamming.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
