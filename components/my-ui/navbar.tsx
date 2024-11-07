import React from "react";
import Link from "next/link";

interface Navigation {
  name: string;
  href: string;
}

const navLinks: Navigation[] = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className=" p-6  w-full flex justify-center ">
      <div className="text-sm flex items-center text-[#525252] w-[80rem] gap-6 ">
        {navLinks.map((links, index) => (
          <Link href={links.href} key={index} className="hover:text-white/75" >
            {links.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
