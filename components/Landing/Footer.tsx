import React from "react";
import { Icons } from "../icons/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-12 flex justify-center border-t">
      <div className="flex  w-full max-w-[1356px] flex-col gap-6 md:flex-row justify-between items-start">
        <Link href="/" className="flex items-center gap-1">
          <Icons.logo className="w-8 h-8" />
          <h1 className="text-xl font-medium">usourceful</h1>
        </Link>
        <div className="flex flex-col gap-4 text-sm">
          <p>Connect</p>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link
              href="https://x.com/kofi_okae"
              className="transition-colors duration-200 hover:text-neutral-800"
              target="_blank"
            >
              X(Twitter)
            </Link>
            <Link
              href="https://www.linkedin.com/in/nana-kofi-okae/"
              className="transition-colors duration-200 hover:text-neutral-800"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
