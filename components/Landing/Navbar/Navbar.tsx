import React from "react";
import Link from "next/link";
import { Icons } from "../../icons/icons";
import { Button } from "@/components/ui/button";

// interface Navigation {
//   name: string;
//   href: string;
// }

// const navLinks: Navigation[] = [
//   { name: "Home", href: "/" },
//   { name: "Resources", href: "/resources" },
//   { name: "Blog", href: "/blog" },
// ];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 pt-6  w-full flex justify-center items-center">
      <div className="text-sm flex items-center bg-[#e5e5e5] px-6 py-2 rounded-3xl  gap-6 bg-opacity-45 backdrop-blur-md ">
        <div className="flex items-center gap-1">
          <Icons.logo className="w-8 h-8" />
          <h1 className="text-xl font-medium">usourceful</h1>
        </div>
        <Button className="text-sm">Join Waitlist</Button>
      </div>
    </nav>
  );
}
