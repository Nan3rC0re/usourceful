import React from "react";
import Link from "next/link";
import EmptyResourceState from "@/components/my-ui/empty-source-state";

interface Careers {
  name: string;
  link: string;
  description: string;
  img: string;
}

const careers: Careers[] = [
  {
    name: "Frontend Engineer",
    link: "/frontend-eng.mdx",
    description: "A description for frontend engineering",
    img: "",
  },
  {
    name: "Backend Engineer",
    link: "",
    description: "A description for backend engineering",
    img: "",
  },
  {
    name: "Full Stack Engineer",
    link: "",
    description: "A description for full stack engineering",
    img: "",
  },
  { name: "DevOps Engineer", link: "", description: "", img: "" },
];

const CareerItem = ({ name, link, description }: Careers) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="dark:hover:bg-white/5 hover:bg-neutral-100 rounded-2xl p-6  w-full text-start flex "
    >
      <div className="">
        <h1 className="font-semibold max-sm:text-sm mb-1">{name}</h1>
        <p className="text-sm w-full text-muted-foreground line-clamp-2 max-sm:text-xs">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function EarlyCareers() {
  return (
    <>
      <div className="w-full flex flex-col mt-2  text-start  p-1  overflow-hidden h-full ">
        <h1 className="mb-12 text-sm border-b py-4 dark:border-neutral-800">
          A deep dive into the career paths in the tech industry, the industry
          standard tech stacks.
        </h1>
        {/* {careers.map((orgs, index) => (
          <CareerItem key={index} {...orgs} />
        ))} */}
        <EmptyResourceState />
      </div>
    </>
  );
}
