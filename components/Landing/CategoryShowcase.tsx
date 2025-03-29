"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { RESOURCE_CATEGORIES } from "@/data/constants";
import { getResourcesByTag } from "@/data";

// Category data with display names
const categoryData = [
  { name: "Organizations", tag: RESOURCE_CATEGORIES.ORGANIZATIONS },
  { name: "Early Career Programs", tag: RESOURCE_CATEGORIES.EARLY_CAREER },
  { name: "Project Development", tag: RESOURCE_CATEGORIES.PROJECT_DEVELOPMENT },
  { name: "Interview Prep", tag: RESOURCE_CATEGORIES.INTERVIEW_PREP },
];

export default function CategoryShowcase() {
  return (
    <section>
      {categoryData.map((category) => {
        // Get resources for this category and limit to first 4
        const resources = getResourcesByTag(category.tag).slice(0, 4);

        return (
          <div key={category.tag} className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h3 className="  text-xl md:text-2xl lg:text-3xl font-semibold">
                {category.name}
              </h3>
              <Link href={`/discovery?category=${category.tag}`} passHref>
                <Button variant="link" className="gap-2 text-xs">
                  View More <ArrowRightIcon />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
              {resources.map((resource, index) => (
                <Link
                  href={resource.link}
                  target="_blank"
                  className="flex flex-col gap-2 group"
                  key={index}
                >
                  <div className="relative overflow-hidden rounded-md">
                    {resource.isNew && (
                      <span className="absolute right-4 top-2 bg-violet-600 text-white text-xs px-2 py-1 rounded-full z-10">
                        New
                      </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
                      <div className="text-white font-medium flex items-center gap-2">
                        View Resource <ExternalLinkIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <Image
                      src={resource.image}
                      alt={resource.name}
                      width={400}
                      height={225}
                      className="aspect-[16/9] w-full bg-gray-200 rounded-md border object-cover group-hover:scale-105 transition-transform duration-200"
                      priority
                    />
                  </div>
                  <h2 className="font-medium text-sm md:text-base">
                    {resource.name}
                  </h2>
                  <p className="text-muted-foreground font-normal text-xs md:text-sm line-clamp-2">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
