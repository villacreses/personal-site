import { IconLink, Icon } from "@/components";
import {
  credentials,
  experienceEntries,
  homepageIntro,
  socialLinkItems,
} from "./content";
import { yearsSince } from "@/utils";
import Markdown from "react-markdown";

const yearsExp = Math.ceil(
  yearsSince(experienceEntries[experienceEntries.length - 1].startDate),
);

const SocialLinks = () => (
  <ul className="text-2xl flex flex-row mt-3 mb-2 justify-center">
    {socialLinkItems.map((props) => (
      <li key={props.slug} className="px-1.5">
        <IconLink {...props} iconProps={{ height: "1em" }} />
      </li>
    ))}
  </ul>
);

const Credentials = () => (
  <ul className="text-sm mb-4">
    {credentials.map(({ iconId, text }) => (
      <li key={text} className="mb-3 grid grid-cols-2 grid-cols-[1.5em_1fr] items-center gap-x-4">
        <Icon iconId={iconId} height={"1em"} className="justify-self-center"/>
        <span className="justify-self-start">{text}</span>
      </li>
    ))}
  </ul>
);

export default function Home() {
  return (
    <main className="grow">
      <article className="h-full flex flex-col items-center justify-center text-center">
        <header>
          <hgroup>
            <h1 className="text-4xl font-extrabold">Mario Villacreses</h1>
            <h2 className="text-lg text-neutral-500 dark:text-neutral-400">
              Software Engineer & Math Enthusiast
            </h2>
          </hgroup>
          
        </header>
        <hr className="mx-auto lg:mx-0 h-1 w-4/5 mt-2 mb-6 border-b-2 border-neutral-700 opacity-25" />
        <Credentials />
        <Markdown className="prose">{homepageIntro}</Markdown>
        <SocialLinks />
      </article>
    </main>
  );
}
