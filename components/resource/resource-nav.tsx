"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { RESOURCE_CATEGORIES } from "@/data/constants";

const categoryData = [
  { name: "All", tag: RESOURCE_CATEGORIES.ALL },
  { name: "Organizations", tag: RESOURCE_CATEGORIES.ORGANIZATIONS },
  { name: "Early Career Programs", tag: RESOURCE_CATEGORIES.EARLY_CAREER },
  { name: "Project Development", tag: RESOURCE_CATEGORIES.PROJECT_DEVELOPMENT },
  { name: "Interview Prep", tag: RESOURCE_CATEGORIES.INTERVIEW_PREP },
  // { name: "Courses", tag: RESOURCE_CATEGORIES.COURSES },
  // { name: "Certifications", tag: RESOURCE_CATEGORIES.CERTIFICATIONS },
];

interface ResourceNavProps {
  onFilterChange?: (tag: string) => void;
  selectedTag?: string;
}

export default function ResourceNav({
  onFilterChange,
  selectedTag = RESOURCE_CATEGORIES.ALL,
}: ResourceNavProps) {
  const handleFilterClick = (tag: string) => {
    if (onFilterChange) {
      onFilterChange(tag);
    }
  };

  return (
    <nav className="flex justify-between sm:items-center gap-12 flex-col sm:flex-row mt-12 -mx-6">
      <div className="overflow-x-auto scrollbar-hide flex gap-2 w-full px-6">
        {categoryData.map((category, index) => (
          <Button
            key={index}
            variant={selectedTag === category.tag ? "black" : "outline"}
            className="rounded-full shrink-0 px-4 py-2 text-xs md:text-sm"
            onClick={() => handleFilterClick(category.tag)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </nav>
  );
}
