import Link from "next/link";
import React from "react";
import FeedbackForm from "@/components/my-ui/feedback-form";
import { ModeToggle } from "../ui/mode-toggle";

export default function Footer() {
  return (
    <footer className="border-t dark:border-neutral-800 p-4  w-full flex justify-center">
      <div className="text-sm flex max-md:text-[12px] justify-between items-center w-[80rem] ">
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
        <div className="flex items-center gap-4">
          <ModeToggle />
          <FeedbackForm />
        </div>
      </div>
    </footer>
  );
}
