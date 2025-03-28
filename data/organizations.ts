import { Resource } from "./types";

export const organizations: Resource[] = [
  {
    name: "Tech Diversity Initiative",
    link: "https://example.com/tdi",
    image: "https://your-s3-bucket.amazonaws.com/tdi-org.jpg",
    description:
      "Promoting diversity and inclusion in the technology industry through mentorship and education.",
    tags: ["organizations", "diversity", "mentorship"],
    isNew: true,
  },
  {
    name: "Code for Good",
    link: "https://example.com/code-for-good",
    image: "https://your-s3-bucket.amazonaws.com/cfg-org.jpg",
    description:
      "Nonprofit organization connecting developers with social impact projects.",
    tags: ["organizations", "nonprofit", "social-impact"],
  },
  // Add 6 more organizations following the same pattern...
  {
    name: "Women Who Code",
    link: "https://example.com/wwc",
    image: "https://your-s3-bucket.amazonaws.com/wwc-org.jpg",
    description:
      "Global nonprofit dedicated to inspiring women to excel in technology careers.",
    tags: ["organizations", "diversity", "women-in-tech"],
  },
  {
    name: "Developer Student Clubs",
    link: "https://example.com/dsc",
    image: "https://your-s3-bucket.amazonaws.com/dsc-org.jpg",
    description:
      "University-based community groups for students interested in Google developer technologies.",
    tags: ["organizations", "students", "early-career"],
  },
  {
    name: "Open Source Initiative",
    link: "https://example.com/osi",
    image: "https://your-s3-bucket.amazonaws.com/osi-org.jpg",
    description:
      "Promoting and protecting open source software and communities.",
    tags: ["organizations", "open-source", "advocacy"],
    isNew: true,
  },
  {
    name: "Tech For All",
    link: "https://example.com/tech-for-all",
    image: "https://your-s3-bucket.amazonaws.com/tfa-org.jpg",
    description:
      "Making technology education accessible to underserved communities globally.",
    tags: ["organizations", "education", "accessibility"],
  },
  {
    name: "AI Ethics Coalition",
    link: "https://example.com/ai-ethics",
    image: "https://your-s3-bucket.amazonaws.com/aiec-org.jpg",
    description:
      "Advocating for responsible AI development and implementation.",
    tags: ["organizations", "ethics", "ai"],
  },
  {
    name: "Startup Accelerator Network",
    link: "https://example.com/san",
    image: "https://your-s3-bucket.amazonaws.com/san-org.jpg",
    description:
      "Global network supporting early-stage tech startups through mentorship and funding.",
    tags: ["organizations", "startups", "entrepreneurship"],
  },
];
