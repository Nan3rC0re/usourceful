import React from "react";
import Link from "next/link";
export default function Navbar() {
  interface Navigation {
    name: string;
    href: string;
  }

  const navLinks: Navigation[] = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className=" p-4  w-full flex justify-center ">
      <div className="text-sm flex items-center text-[#525252] w-[80rem] gap-6 ">
        {navLinks.map((links, index) => (
          <Link href={links.href} key={index} className="hover:underline">
            {links.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
