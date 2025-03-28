"use client";

import ResourceNav from "@/components/resource/resource-nav";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getResourcesByTag } from "@/data";
import { RESOURCE_CATEGORIES } from "@/data/constants";
import EmptyResourceState from "@/components/others/empty-source-state";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function DiscoveryPage() {
  const [selectedTag, setSelectedTag] = useState<string>(
    RESOURCE_CATEGORIES.ALL
  );
  const filteredResources = getResourcesByTag(selectedTag);

  const handleFilterChange = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <main className="discovery-section">
      <h1 className="md:text-5xl text-2xl font-medium">Discovery</h1>
      <ResourceNav
        onFilterChange={handleFilterChange}
        selectedTag={selectedTag}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
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
                  className="aspect-[16/9] bg-gray-200 rounded-md border object-cover group-hover:scale-105 transition-transform duration-200"
                  priority={index < 4}
                />
              </div>
              <h2 className="font-medium">{resource.name}</h2>
              <p className="text-muted-foreground font-normal text-sm line-clamp-3">
                {resource.description}
              </p>
            </Link>
          ))
        ) : (
          <EmptyResourceState />
        )}
      </div>
    </main>
  );
}
