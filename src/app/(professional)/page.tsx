import { Icon } from "@/components";
import {
  credentials,
  homepageMain,
  homepageLead,
  socialLinkItems,
} from "./content";
import Markdown from "react-markdown";
import Link from "next/link";

const bottomBorderStyles =
  "after:content-[' '] after:block after:border after:opacity-25 after:border-neutral-700 after:-mx-6";

const SocialLinks = () => (
  <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6">
    {socialLinkItems.map(({ slug, href, label }) => (
      <li key={slug} className="p-2 text-lg sm:text-sm">
        <Link href={href} className="flex flex-row items-center gap-x-1.5">
          <Icon iconId={slug} height="1.2em" />
          <span className="font-semibold tracking-tight">{label}</span>
        </Link>
      </li>
    ))}
  </ul>
);

const Credentials = () => (
  <ul className={`text-sm text-gray-300 mb-6 ${bottomBorderStyles}`}>
    {credentials.map(({ iconId, text }) => (
      <li
        key={text}
        className="mb-2 grid grid-cols-2 grid-cols-[1em_1fr] items-center gap-x-4"
      >
        <Icon iconId={iconId} height={"1em"} className="justify-self-center" />
        <span className="justify-self-start">{text}</span>
      </li>
    ))}
  </ul>
);

const MyImage = () => (
  <div className="mb-4 mx-auto rounded-full h-36 w-36 border-4 medium-zoom-image" />
);

export default function Home() {
  return (
    <main className="grow">
      <article className="h-full flex flex-col items-center justify-center text-center">
        <header className="mb-3">
          <MyImage />
          <hgroup>
            <h1 className="text-4xl font-extrabold">Mario Villacreses</h1>
            <h2 className="text-lg text-neutral-500 dark:text-neutral-400">
              Software Engineer & Math Enthusiast
            </h2>
          </hgroup>
        </header>
        <Credentials />
        <p className="prose text-gray-400 text-xl">{homepageLead}</p>
        <Markdown className="prose max-w-[60ch] text-gray-200">
          {homepageMain}
        </Markdown>
        <SocialLinks />
      </article>
    </main>
  );
}
