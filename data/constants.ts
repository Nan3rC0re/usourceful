export const RESOURCE_CATEGORIES = {
  ALL: "all",
  ORGANIZATIONS: "organizations",
  EARLY_CAREER: "early-career-programs",
  PROJECT_DEVELOPMENT: "project-development",
  INTERVIEW_PREP: "interview-prep",
  COURSES: "courses",
  CERTIFICATIONS: "certifications",
} as const;

export type ResourceCategory =
  (typeof RESOURCE_CATEGORIES)[keyof typeof RESOURCE_CATEGORIES];

export interface Resource {
  name: string;
  link: string;
  image: string;
  description: string;
  tags: string[];
  isNew?: boolean;
  publishedDate?: Date;
  addedDate: Date;
}
