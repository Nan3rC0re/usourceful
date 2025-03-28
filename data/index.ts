import { Resource, newResourcesFirst } from "./types";
import { courses } from "./courses";
import { organizations } from "./organizations";
import { interviewPrep } from "./interview-prep";
import { certificates } from "./certificates";
import { earlyCareerPrograms } from "./early-career-programs";
import { projectDevelopment } from "./project-development";

// Combine all resources into a single array
export const allResources: Resource[] = newResourcesFirst([
  ...courses,
  ...organizations,
  ...certificates,
  ...interviewPrep,
  ...earlyCareerPrograms,
  ...projectDevelopment,
]);

// Helper function to filter resources by tag
export function getResourcesByTag(tag: string): Resource[] {
  if (tag === "all") {
    return allResources;
  }

  return allResources.filter((resource) => resource.tags.includes(tag));
}

// Get all new resources
export function getNewResources(): Resource[] {
  return allResources.filter((resource) => resource.isNew);
}
