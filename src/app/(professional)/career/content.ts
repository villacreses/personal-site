export type TWorkEntry = {
  org: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  location?: string;
  description?: string;
  techUsed?: string[];
};

export type TSchoolEntry = {
  schoolName: string;
  credential: string;
  graduationDate: string;
  startDate?: string;
  location: string;
  description: string;
};

export type THackathonEntry = {};

export const headerContent = `
This page highlights my work history, along with any significant 
accomplishments that shaped me as I've navigated the tech industry. Be sure
to also check out [my latest resume](/docs/resume.pdf).
`;

export const workEntries: TWorkEntry[] = [
  {
    org: "GoDaddy",
    role: "Senior Software Engineer",
    startDate: "2022-11-14T09:00-0500",
    endDate: "2024-01-30T16:00-0500",
    location: "New York City (remote)",
    description: [
      "Spearheaded overhaul of frontend and devops architectures for legacy e-commerce platform.",
      "Reengineered the pricing fee architecture to give customers the freedom to set their own",
      "custom transaction costs for their credit card terminals.",
    ].join(" "),
    techUsed: [
      "Javascript",
      "Ember.js",
      "Typescript",
      "MySQL",
      "AWS ECS",
      "Github Actions",
      "Docker",
      "Express.js",
      "Next.js",
      "React",
      "Tailwind",
      "Elasticsearch",
    ],
  },
  {
    org: "Meta (Facebook)",
    role: "Software Engineer",
    startDate: "2021-08-26T09:00-0800",
    endDate: "2022-08-26T17:00-0800",
    location: "Menlo Park, CA (hybrid)",
    description: [
      "Contributed to the new universal metrics platform designed to standardize metrics lookup",
      "and integration for the entire company. Enhanced backend reliability of Metric Authoring",
      "API, resulting in a 20% reduction in latency issues and improved overall performance.",
    ].join(" "),
    techUsed: ["Javascript", "GraphQL", "Python", "PHP/Hack"],
  },
  {
    org: "doc.ai",
    role: "Software Engineer",
    startDate: "2021-02-21T09:00-0800",
    endDate: "2021-12-18T20:00-0500",
    location: "Boston, MA (remote)",
    description: [
      "Headed development of UI library for company's new flagship app.",
      "Created real-time geographic visualization of COVID-19 outbreak,",
      "increasing brand awareness by over 100%.",
    ].join(" "),
    techUsed: [
      "React Native",
      "Typescript",
      "Redux",
      "hapi.js",
      "Express.js",
      "CSS",
      "styled components",
    ],
  },
  {
    org: "Knovva Academy",
    role: "Full Stack Developer",
    startDate: "2018-11-05T09:00-0500",
    endDate: "2020-01-07T17:00-0500",
    location: "Boston, MA",
    description: [
      "Collaborated with cloud architect to build administrative tools to streamline customer",
      "management, recruiting, and real-time analytics.",
      "Refactored existing codebase to the latest standards and optimized for scalability.",
    ].join(" "),
    techUsed: [
      "Javascript",
      "React",
      "Redux",
      "MongoDB",
      "GraphQL",
      "Express.js",
      "SCSS",
      "AWS S3",
    ],
  },
];

export const educationEntries: TSchoolEntry[] = [
  {
    schoolName: "CUNY Queens College",
    credential: "Bachelor of Arts - Applied Mathematics",
    graduationDate: "2016-05-30T17:00-0500",
    location: "Flushing, NY",
    description: [
      "Bachelor of Arts in Applied Mathematics with concentrations in computer science and operations research",
    ].join(" "),
  },
];
