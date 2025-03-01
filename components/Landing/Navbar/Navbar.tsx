import React from "react";
import { Icons } from "../../icons/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <nav className="navbar">
      <div className="navbar-bg ">
        <Link href="/" className="flex items-center gap-1">
          <Icons.logo className="w-8 h-8" />
          <h1 className="text-xl font-medium">usourceful</h1>
        </Link>
        <Link href="/waitlist" passHref>
          <Button>Join Waitlist</Button>
        </Link>
      </div>
    </nav>
  );
}
