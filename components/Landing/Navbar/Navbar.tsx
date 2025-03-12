import React from "react";
import { Icons } from "../../icons/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Navigation {
  name: string;
  href: string;
}

const navLinks: Navigation[] = [
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-bg ">
        <Link href="/" className="flex items-center gap-1">
          <Icons.logo className="w-8 h-8" />
          <h1 className="text-xl font-medium">usourceful</h1>
        </Link>
        <div className="flex gap-2 lg:ml-12">
          <Link href="/sign-in" passHref>
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/sign-up" passHref>
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
