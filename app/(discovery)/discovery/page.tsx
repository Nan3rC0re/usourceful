"use client";

import ResourceNav from "@/components/resource/resource-nav";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { allResources, getResourcesByTag } from "@/data";
import { RESOURCE_CATEGORIES } from "@/data/constants";
import EmptyResourceState from "@/components/others/empty-source-state";

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
              className="flex flex-col gap-2"
              key={index}
            >
              <div className="relative">
                {resource.isNew && (
                  <span className="absolute right-4 top-2 bg-violet-600 text-white text-xs px-2 py-1 rounded-full z-10">
                    New
                  </span>
                )}
                <Image
                  src={resource.image}
                  alt={resource.name}
                  width={400}
                  height={250}
                  className="aspect-[3/2] bg-gray-200 rounded-md border object-cover"
                  priority={index < 4}
                />
              </div>
              <h2 className="font-medium">{resource.name}</h2>
              <p className="text-muted-foreground font-normal text-sm line-clamp-2">
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
