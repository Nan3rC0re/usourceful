"use client";
import { Icons } from "@/components/icons/icons";
import BadgeList from "@/components/Waitlist/BadgeList";
import Header from "@/components/Waitlist/Header";
import Link from "next/link";
import React from "react";

const Waitlist = () => {
  return (
    <main className="waitlist-container">
      <div className=" pb-20 lg:pb-40  w-full max-w-[95rem] pt-3">
        <Link href="/" className="flex items-center gap-1 w-fit">
          <Icons.logo className="w-8 h-8" />
          <h1 className="text-xl font-medium">usourceful</h1>
        </Link>
      </div>
      <BadgeList />
      <Header />
    </main>
  );
};

export default Waitlist;
