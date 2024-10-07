import { Metadata } from "next";
import { Icon, Markdown, StandardHeader } from "@/components";
import { getNowContent } from "@/lib/cosmic";

export const metadata: Metadata = {
  title: "Mario Villacreses' Now page",
  description:
    "My Now page offers a quick snapshot of where I've recently been investing my energy. If we haven't connected in the last six months, you can catch up on my latest endeavors here.",
};

const headerContent = `
Welcome to my [Now page](https://nownownow.com/about). My Now page offers a quick snapshot of where I've recently been investing my energy. If we haven't connected in the last six months, you can catch up on my latest endeavors here.
`;

export default async function NowPage() {
  const { entries, last_modified } = await getNowContent();

  const dateDisplayed = last_modified.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <StandardHeader title="Now">
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
      <article>
        <h2 className="text-2xl font-semibold">
          So what am I currently doing?
        </h2>
        <p className="text-xs mt-2 italic text-neutral-600 dark:text-neutral-400">
          <span className="mr-1.5">Last updated:</span>
          <time dateTime={last_modified.toJSON()}>{dateDisplayed}</time>
        </p>
        {entries.map(({ title, metadata: { icon_id, content } }) => (
          <section key={title}>
            <h3 className="font-bold uppercase tracking-widest mt-8 mb-3 flex flex-row items-center">
              <Icon iconId={icon_id} height="1.4em" className="mr-2" />
              <span>{title}</span>
            </h3>
            <Markdown className="ml-3">{content}</Markdown>
          </section>
        ))}
      </article>
    </>
  );
}
