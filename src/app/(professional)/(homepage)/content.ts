import { IconID, IconLinkProps } from "@/components";

export const homepageLead = `
I'm Mario, a fullstack engineer with 6 years of experience. 
`;

export const homepageMain = `
Over the course of my career, I&apos;ve had the privilege of working
for companies of all sizes and across multiple industries, including
education, healthcare, social media, and e-commerce. Currently I'm on a hiatus from the tech industry in order to complete my master's degree.

Take a look at my [resume](/docs/resume.pdf) and skills, and get in touch via my social links below.
`;

type TCredential = {
  iconId: IconID;
  text: string;
  size?: string;
};

export const credentials: TCredential[] = [
  {
    iconId: "suitcase",
    text: "Senior Software Engineer @ Godaddy.com",
    size: ".8rem",
  },
  {
    iconId: "school",
    text: "B.A. Applied Math @ CUNY Queens College",
    size: ".95rem",
  },
  { iconId: "location", text: "New York City", size: ".875rem" },
];

export const socialLinkItems: IconLinkProps[] = [
  {
    slug: "envelope",
    label: "Send me an email",
    href: "mailto:MarioVillacreses@outlook.com",
  },
  {
    slug: "github",
    label: "Follow me on GitHub",
    href: "https://github.com/villacreses",
  },
  {
    slug: "linkedin",
    label: "Add me on LinkedIn",
    href: "https://www.linkedin.com/in/villacreses",
  },
];

export const projectEntries = [
  {
    title: "Chronos",
    description: [
      "My capstone team project while attending Fullstack Academy. Chronos is a data visualization",
      "interface that allows users to create and  share high quality interactive graphics.",
    ].join(" "),
    techUsed: ["React", "Redux", "D3"],
    links: [
      {
        iconId: "github",
        text: "Github",
        href: "https://github.com/Capstone-Chronos/chronos",
      },
      {
        iconId: "link",
        text: "Demo",
        href: "https://chronos-d08ff.firebaseapp.com/",
      },
    ],
  },
  {
    title: "8-Bit Bargains",
    description: [
      "My first collaborative project while attending Fullstack Academy. 8-bit Bargains is an",
      "e-commerce platform for classic video game cartridges.",
    ].join(" "),
    techUsed: ["React", "Redux", "Express.js", "Stripe"],
    links: [
      {
        iconId: "github",
        text: "Github",
        href: "https://github.com/8BitBargains/8bitBargains",
      },
    ],
  },
];
