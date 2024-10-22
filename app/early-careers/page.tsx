import Link from "next/link";

interface Internship {
  name: string;
  link: string;
  description: string;
  type: string;
}

const internships: Internship[] = [
  {
    name: "Salesforce Futureforce Tech Launchpad",
    link: "https://info.codepath.org/futureforce-tech-launchpad",
    description:
      "A Salesforce pre-internship program by CodePath, is back for its third summer. This immersive experience in full-stack web development, coupled with 1:1 mentorship, readies students for internships.",
    type: "early career",
  },
  {
    name: "Duolingo Thrive Program",
    link: "https://careers.duolingo.com/",
    description:
      "Is an immersive 10-week summer internship program that provides second-year students from communities underrepresented in tech the opportunity to develop their technical skills and experience what it’s like to work at Duolingo.",
    type: "early career",
  },
  {
    name: "Explore Microsoft Internship",
    link: "https://careers.microsoft.com/v2/global/en/exploremicrosoft",
    description:
      "Is a 12-week summer internship program specifically designed for first- and second-year college students. The program allows the opportunity to experience the product development cycle's primary phases: Design, Build and Quality.",
    type: "early career",
  },
  {
    name: "Google STEP",
    link: "https://buildyourfuture.withgoogle.com/programs/step",
    description:
      "Is open to all first or second year students (freshman and sophomores) enrolled full-time in a community college or university, regardless of race, gender, or ethnicity. UberSTAR connects students interested in working in tech with full-time internships at Uber to provide participants with real-work skills, experiences, and the professional networks they need to succeed.",
    type: "early career",
  },
  {
    name: "Meta University",
    link: "https://www.metacareers.com/careerprograms/pathways/metauniversity",
    description:
      "Is an immersive ten week paid internship program that enables students with a range of backgrounds, experiences and perspectives to get to know Meta’s people, products and services.",
    type: "early career",
  },
  {
    name: "UberSTAR Program",
    link: "https://www.uber.com/us/en/careers/uberstar/?uclick_id=bd7b436b-e9d9-466d-bdee-56c8d2352960",
    description:
      "Connects students interested in working in tech with full-time internships at Uber to provide participants with real-work skills, experiences, and the professional networks they need to succeed.",
    type: "early career",
  },
  {
    name: "NVIDIA Ignite Internship",
    link: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
    description:
      "Gives you everything you need to start building your career—a whole lot earlier than you might expect. This inclusive, 12-week summer pre-internship program was created to give current freshmen and sophomores from historically underrepresented communities a chance to work hands-on with real technical experts on real projects.",
    type: "early career",
  },
  {
    name: "IBM Accelerate Summer Program",
    link: "https://www.ibm.com/blogs/jobs/career-ready-skills-with-ibm-accelerate-summer-program/",
    description:
      "Runs for eight weeks, from early June through late July, and offers a live, virtual learning experience to participants from across the United States. The time commitment is three hours each week with two required evening sessions on Mondays and Wednesdays where students will learn about key foundational skills, as well as experience track-based learnings on a variety of tech and industry topics.",
    type: "early career",
  },
  {
    name: "Jane Street Immersion Program",
    link: "https://www.janestreet.com/join-jane-street/programs-and-events/jsip/",
    description:
      "Is a multi-week summer program that takes place in New York City. JSIP is intended for undergraduate students between their first and second years who are passionate about computer science and have also experienced barriers to opportunity within the field.",
    type: "early career",
  },
];

// const getFaviconUrl = (url: string) => {
//   const domain = new URL(url).hostname;
//   return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
// };

const InternshipItem = ({ name, link, description, type }: Internship) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="hover:bg-white/5 rounded-2xl p-6  w-full text-start flex "
    >
      {/* <div className=" rounded-md p-2 h-fit">
        <img
          src={getFaviconUrl(link)}
          alt={`${name} favicon`}
          width={60}
          height={50}
        />
      </div> */}
      <div className="">
        <h1 className="font-semibold max-sm:text-sm mb-1">{name}</h1>
        <p className="text-sm text-muted-foreground line-clamp-2 max-sm:text-xs">
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
        Programs and opportunities designed for first- and second-year Computer
        Science students to gain early exposure to the industry.
      </h1>
      {internships.map((internship, index) => (
        <InternshipItem key={index} {...internship} />
      ))}
    </div>
  );
}
