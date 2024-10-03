import { IconID } from "@/components";

type TNowSection = {
  icon: IconID;
  heading: string;
  content: string;
};

export const headerContent = `
Welcome to my [Now page](https://nownownow.com/about), where I share what I'm currently focusing on in my life. If we haven't connected in the last six months, you can catch up on my latest endeavors here.
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
    content: `
- *Fundamentals of Software Architecture* by Mark Richards
    `,
  },
];
