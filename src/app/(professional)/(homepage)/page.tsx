import { Icon, Markdown, TMarkdownComponents } from "@/components";
import {
  credentials,
  homepageMain,
  homepageLead,
  socialLinkItems,
} from "./content";
import Link from "next/link";
import Image from 'next/image';

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
  <ul className={`text-sm text-gray-600 dark:text-gray-300 mb-6`}>
    {credentials.map(({ iconId, text }) => (
      <li
        key={text}
        className="mb-2 grid grid-cols-2 grid-cols-[1em_1fr] xxs:items-center gap-x-4 text-left"
      >
        <Icon
          iconId={iconId}
          height={"1em"}
          className="justify-self-center mt-[0.241rem] xxs:mt-0"
        />
        <span className="justify-self-start">{text}</span>
      </li>
    ))}
  </ul>
);

const MyImage = () => (
  <Image
    alt="A picture of Mario Villacreses"
    src="/images/mario_small.jpg"
    placeholder="blur"
    blurDataURL="/images/mario_blur.jpg"
    height={144}
    width={144}
    className="mb-4 mx-auto rounded-full h-36 w-36 border-4 medium-zoom-image border-slate-900/80 dark:border-blue-100"
  />
);

const components: TMarkdownComponents = {
  p({ node, ...props }) {
    return <p className="pb-4 " {...props} />;
  },
};

export default function Home() {
  return (
    <main className="grow">
      <article className="flex flex-col items-center justify-center text-center">
        <div>
          <header className="mb-3">
            <MyImage />
            <hgroup>
              <h1 className="text-3xl xxs:text-4xl font-extrabold">
                Mario Villacreses
              </h1>
              <h2 className="text-sm xxs:text-lg text-neutral-500 dark:text-neutral-400">
                Software Engineer & Math Enthusiast
              </h2>
            </hgroup>
          </header>
          <Credentials />
          <hr />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-xl my-6">
          {homepageLead}
        </p>
        <Markdown
          className="prose max-w-[60ch] text-gray-200"
          components={components}
        >
          {homepageMain}
        </Markdown>
        <SocialLinks />
      </article>
    </main>
  );
}
