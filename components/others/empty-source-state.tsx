import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all resource collections
import { projectDevelopment } from "@/data/project-development";
import { organizations } from "@/data/organizations";
import { courses } from "@/data/courses";
import { interviewPrep } from "@/data/interview-prep";
import { certificates } from "@/data/certificates";
import { earlyCareerPrograms } from "@/data/early-career-programs";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function EmptyResourceState() {
  const navigateToRandomResource = () => {
    const allResources = [
      ...projectDevelopment,
      ...organizations,
      ...courses,
      ...interviewPrep,
      ...certificates,
      ...earlyCareerPrograms,
    ];

    // Get a random resource
    const randomIndex = Math.floor(Math.random() * allResources.length);
    const randomResource = allResources[randomIndex];

    // Navigate to the random resource link
    if (randomResource && randomResource.link) {
      window.open(randomResource.link, "_blank");
    }
  };

  return (
    <div className="col-span-full hover:bg-neutral-1 w-ful h-[20rem] lg:h-[40rem]  rounded-xl flex items-center justify-center">
      <div className="flex flex-col gap-2 items-center p-4">
        <Search size={28} />
        <h1 className="text-sm font-semibold">No resources found</h1>
        <p className="text-xs text-muted-foreground">
          Discover a random resource instead.
        </p>
        <Button
          onClick={navigateToRandomResource}
          className="mt-2 text-sm"
          variant="outline"
        >
          I'm feeling lucky
        </Button>
      </div>
    </div>
  );
}
