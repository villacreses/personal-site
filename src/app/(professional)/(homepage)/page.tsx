import {
  CosmicImage,
  Credentials,
  Markdown,
  MarkdownComponents,
  SocialLinks,
} from "@/components";
import { BlogService, PageService } from "@/lib/cosmic";

import styles from "./homepage.module.css";
import { classNames } from "@/lib/utils";

const components: MarkdownComponents = {
  p({ node, ...props }) {
    return <p className="pb-4 " {...props} />;
  },
};

export default async function Home() {
  const [author, content] = await Promise.all([
    BlogService.getAuthor("Mario Villacreses"),
    PageService.getPageHeadingContent("home"),
  ]);

  return (
    <main className="grow">
      <article className="flex flex-col items-center justify-center text-center">
        <div>
          <header className="mb-3">
            <CosmicImage
              src={author.metadata.image!}
              alt={`A picture of ${author.title}`}
              height={144}
              width={144}
              className="mb-4 mx-auto rounded-full h-36 w-36 border-4 medium-zoom-image border-slate-900/80 dark:border-blue-100"
            />
            <hgroup>
              <h1 className="text-3xl 3xs:text-4xl font-extrabold">
                Mario Villacreses
              </h1>
              <h2 className="text-sm 3xs:text-lg text-neutral-500 dark:text-neutral-400">
                Software Engineer & Math Enthusiast
              </h2>
            </hgroup>
          </header>
          <Credentials />
          <hr />
        </div>
        <Markdown
          className={classNames([styles.description, "prose-color"])}
          components={components}
        >
          {content.description}
        </Markdown>
        <SocialLinks />
      </article>
    </main>
  );
}
