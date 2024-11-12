"use client";

import React from "react";
import { Button } from "@/components/ui/button";
// import { SuggestionForm } from "./suggestion-form";
// import { RequestForm } from "./request-resource";

interface ResourceLink {
  name: string;
  href: string;
}

const componentsData: ResourceLink[] = [
  { name: "Early Careers", href: "/" },
  { name: "Organizations", href: "/organizations" },
  { name: "Career Paths", href: "/career-paths" },
  { name: "Courses", href: "/courses" },
];

interface ResourceNavProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export default function ResourceNav({
  setCurrentPage,
  currentPage,
}: ResourceNavProps) {
  return (
    <nav className="flex  justify-between sm:items-center gap-12 flex-col sm:flex-row">
      <div className="order-1 sm:order-2 flex gap-3">
        {/* <SuggestionForm />
        <RequestForm /> */}
      </div>
      {/* make this scrollable rather than being wrapped */}
      <div className="flex flex-wrap  w-full gap-2 order-2 sm:order-1 ">
        {componentsData.map((nav, index) => (
          <Button
            key={index}
            size="sm"
            className={`rounded-full ${
              currentPage === nav.name
                ? "dark:bg-neutral-800 bg-neutral-200 "
                : ""
            }`}
            variant="outline"
            onClick={() => setCurrentPage(nav.name)}
          >
            {nav.name}
          </Button>
        ))}
      </div>
    </nav>
  );
}
