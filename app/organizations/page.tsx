import Link from "next/link";

interface Organizations {
  name: string;
  link: string;
  description: string;
}

const orgs: Organizations[] = [
  {
    name: "Codepath",
    link: "https://www.codepath.org/",
    description:
      "CodePath is reprogramming higher education to create the most diverse generation of engineers, CTOs, and founders. We deliver industry-vetted courses and career support centered on the needs of Black, Latino/a, Indigenous, and low-income students. Our students train with senior engineers, intern at top companies, and rise together to become the tech leaders of tomorrow.",
  },
  {
    name: "Colorstack",
    link: "https://www.colorstack.org/",
    description:
      "ColorStack's mission is to increasethe number of Black and Latinx Computer Science graduatesthat go on to start rewarding technical careers.",
  },
  {
    name: "National Society of Black Engineers (NSBE)",
    link: "https://nsbe.org/",
    description:
      "To increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community.",
  },
  {
    name: "Society of Hispanic Professional Engineers (SHPE)",
    link: "https://shpe.org/",
    description:
      "SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.",
  },
  {
    name: "Society of Women Engineers (SWE)",
    link: " https://swe.org/",
    description:
      "For more than seven decades, SWE has given women engineers a unique place and voice within the engineering industry.",
  },
  {
    name: "Women in Cybersecurity (WiCyS)",
    link: "https://www.wicys.org/",
    description:
      "Recruit, retain and advance women in cybersecurity to build a robust and diverse cybersecurity workforce.",
  },
];

const OrgItems = ({ name, link, description }: Organizations) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="hover:bg-white/5 rounded-2xl p-6  w-full text-start flex "
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
    <div className="w-full flex flex-col mt-2  text-start  p-1  overflow-hidden h-full mb-40 ">
      <h1 className="mb-12 text-sm border-b py-4 border-neutral-800">
        Communities and programs designed to support, mentor, and provide
        opportunities for students pursuing a career in technology.
      </h1>
      {orgs.map((orgs, index) => (
        <OrgItems key={index} {...orgs} />
      ))}
    </div>
  );
}
