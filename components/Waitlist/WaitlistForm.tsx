'use client'
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const WaitlistForm = () => {
  return (
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
  );
};

export default WaitlistForm;
