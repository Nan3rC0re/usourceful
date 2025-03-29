"use client";

import ResourceNav from "@/components/resource/resource-nav";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, Suspense } from "react";
import { getResourcesByTag } from "@/data";
import { RESOURCE_CATEGORIES, ResourceCategory } from "@/data/constants";
import EmptyResourceState from "@/components/others/empty-source-state";
import { ExternalLinkIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

// Create a separate component that uses useSearchParams
function DiscoveryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedTag, setSelectedTag] = useState<string>(
    categoryParam &&
      Object.values(RESOURCE_CATEGORIES).includes(
        categoryParam as ResourceCategory
      )
      ? categoryParam
      : RESOURCE_CATEGORIES.ALL
  );

  // Get resources filtered by tag
  const resourcesByTag = getResourcesByTag(selectedTag);

  // Further filter resources by search query
  const filteredResources = searchQuery
    ? resourcesByTag.filter(
        (resource) =>
          resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          resource.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : resourcesByTag;

  // Update selected tag when URL parameters change
  useEffect(() => {
    if (
      categoryParam &&
      Object.values(RESOURCE_CATEGORIES).includes(
        categoryParam as ResourceCategory
      )
    ) {
      setSelectedTag(categoryParam);
    }
  }, [categoryParam]);

  const handleFilterChange = (tag: string) => {
    setSelectedTag(tag);
    setSearchQuery(""); // Clear search when changing categories
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <h1 className="md:text-5xl text-2xl font-medium">Discovery</h1>

      {/* Search bar */}
      <div className="max-w-xl mx-auto my-12 w-full">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search resources..."
            className="pl-10 w-full text-base"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <ResourceNav
        onFilterChange={handleFilterChange}
        selectedTag={selectedTag}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 w-full mt-6">
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
                  className="aspect-[16/9] w-full bg-gray-200 rounded-md border object-cover group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>
              <h2 className="font-medium text-sm md:text-base">
                {resource.name}
              </h2>
              <p className="text-muted-foreground font-normal text-xs md:text-sm line-clamp-3">
                {resource.description}
              </p>
            </Link>
          ))
        ) : (
          <EmptyResourceState />
        )}
      </div>
    </>
  );
}

// Create a loading fallback
function DiscoveryLoading() {
  return <div>Loading discovery resources...</div>;
}

// Main component that uses Suspense
export default function DiscoveryPage() {
  return (
    <main className="discovery-section">
      <Suspense fallback={<DiscoveryLoading />}>
        <DiscoveryContent />
      </Suspense>
    </main>
  );
}
