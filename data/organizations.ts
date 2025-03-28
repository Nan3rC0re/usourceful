import { Resource } from "./types";

export const organizations: Resource[] = [
  {
    name: "ColorStack",
    link: "https://www.colorstack.org/",
    image: "/colorstack.png",
    description:
      "Promoting diversity and inclusion in the technology industry through mentorship and education.",
    tags: ["organizations", "diversity", "mentorship"],
    isNew: true,
  },
  {
    name: "Society of Hispanic Professional Engineers",
    link: "https://www.shpe.org/",
    image: "https://your-s3-bucket.amazonaws.com/cfg-org.jpg",
    description:
      "Nonprofit organization connecting developers with social impact projects.",
    tags: ["organizations", "nonprofit", "social-impact"],
  },
  {
    name: "National Society of Black Engineers",
    link: "https://www.nsbe.org/",
    image: "https://your-s3-bucket.amazonaws.com/cfg-org.jpg",
    description:
      "Nonprofit organization connecting developers with social impact projects.",
    tags: ["organizations", "nonprofit", "social-impact"],
  },
  {
    name: "Women Who Code",
    link: "https://www.womenwhocode.com/",
    image: "https://your-s3-bucket.amazonaws.com/wwc-org.jpg",
    description:
      "Global nonprofit dedicated to inspiring women to excel in technology careers.",
    tags: ["organizations", "diversity", "women-in-tech"],
  },
];
