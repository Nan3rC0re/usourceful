"use client";

import React from "react";
import { Button } from "@/components/shadcn-ui/button";
import { SuggestionForm } from "./suggestion-form";

interface ResourceLink {
  name: string;
  href: string;
}

const componentsData: ResourceLink[] = [
  { name: "Early Careers", href: "/" },
  { name: "Organizations", href: "/organizations" },
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
    <nav className="flex justify-between sm:items-center gap-4 flex-col sm:flex-row">
      <SuggestionForm />
      <div className="flex gap-2 order-2 sm:order-1">
        {componentsData.map((nav, index) => (
          <Button
            key={index}
            size="sm"
            className={`rounded-full ${
              currentPage === nav.name ? "bg-neutral-800 " : ""
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
