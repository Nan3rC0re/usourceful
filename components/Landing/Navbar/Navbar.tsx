import React from "react";
import { Icons } from "../../icons/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

interface Navigation {
  name: string;
  href: string;
}

const navLinks: Navigation[] = [{ name: "Discover", href: "/discovery" }];

export default function Navbar() {
  return (
    <nav className="fixed z-50  px-6 py-2 w-full flex justify-center items-center border-b  bg-white">
      <div className="text-sm flex  items-center w-full justify-between py-2">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1 lg:pr-8">
            <Icons.logo className="w-8 h-8" />
            <h1 className="text-xl font-medium">usourceful</h1>
          </Link>
          <div className="max-lg:hidden">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <Button variant="ghost" className="px-4">
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button className="max-lg:hidden">Submit</Button>
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
