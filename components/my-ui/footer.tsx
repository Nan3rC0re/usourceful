import Link from "next/link";
import React from "react";
import { FeedbackForm } from "./feedback-form";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 p-4  w-full flex justify-center">
      <div className="text-sm flex max-md:text-[12px] justify-between items-center text-white/85 w-[80rem] ">
        <span className="text-xs">
          Made by
          <Link
            className="hover:underline font-medium  ml-1"
            href="https://www.nanakofiokae.com"
            target="_blank"
          >
            Nana
          </Link>
        </span>
        <div className="flex gap-4">
          <FeedbackForm />
        </div>
      </div>
    </footer>
  );
}
