import {
  Credentials,
  Markdown,
  MarkdownComponents,
  SocialLinks,
} from "@/components";
import { homepageMain, homepageLead } from "./content";
import Image from "next/image";

const components: MarkdownComponents = {
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
            <Image
              alt="A picture of Mario Villacreses"
              src="/images/mario_small.jpg"
              placeholder="blur"
              blurDataURL="/images/mario_blur.jpg"
              height={144}
              width={144}
              className="mb-4 mx-auto rounded-full h-36 w-36 border-4 medium-zoom-image border-slate-900/80 dark:border-blue-100"
            />
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
        <Markdown className="prose-color max-w-[60ch]" components={components}>
          {homepageMain}
        </Markdown>
        <SocialLinks />
      </article>
    </main>
  );
}
