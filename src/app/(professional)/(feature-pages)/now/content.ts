import { IconID } from "@/components";

type TNowSection = {
  icon: IconID;
  heading: string;
  content: string;
};

export const headerContent = `
Welcome to my [Now page](https://nownownow.com/about). While my blog dives deep into topics that pique my interest, my Now page offers a quick snapshot of where I've recently been investing my energy. If we haven't connected in the last six months, you can catch up on my latest endeavors here.

`;

export const timestamp = "2024-09-25T22:31:00-0400";

export const nowSections: TNowSection[] = [
  {
    icon: "tools",
    heading: "Working on",
    content: `
- **Master's Degree:** I've begun my journey towards earning a Master of Computer Science at Arizona State University. Expected graduation: Spring 2026.

- **Learning Rust:**  I'm super excited to dive into Rust after spending most of my career with JavaScript. Discovering the [pax.dev](https://www.pax.dev/) project has sparked my enthusiasm since it aims to simplify modern web development and harnesses the power of WebAssembly. I can't wait to learn Rust and contribute to this game-changing initiative!
    `,
  },
  {
    icon: "book",
    heading: "Reading",
    content: `You can see my [reading log](/reading) to keep up with what I've been reading.`,
  },
];
