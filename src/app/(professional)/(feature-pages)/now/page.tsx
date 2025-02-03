import { Icon, InlineLink, Markdown, StandardHeader } from "@/components";
import { PageService, getNowContent } from "@/lib/cosmic";
import { getNowEntries } from "@/lib/notion";

const PAGE_SLUG = "now";

export async function generateMetadata() {
  return await PageService.getPageMetadata(PAGE_SLUG);
}

export default async function NowPage() {
  const [nowEntries, heading] = await Promise.all([
    getNowEntries(),
    PageService.getPageHeadingContent(PAGE_SLUG),
  ]);

  const lastModified = nowEntries
    .map(({ lastEdited }) => new Date(lastEdited))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  return (
    <>
      <StandardHeader
        title={heading.title!}
        description={heading.description!}
      />
      <article>
        <h2 className="text-2xl font-semibold">
          So what am I currently doing?
        </h2>
        <p className="text-xs mt-2 italic prose-color">
          <span className="mr-1.5">Last updated:</span>
          <time dateTime={lastModified.toJSON()}>
            {lastModified.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </time>
        </p>
        {nowEntries.map(({ heading, iconId, markdown }) => (
          <section key={heading}>
            <h3 className="font-bold uppercase tracking-widest mt-8 mb-3 flex flex-row items-center">
              <Icon iconId={iconId} height="1.4em" className="mr-2" />
              <span>{heading}</span>
            </h3>
            <Markdown className="ml-3">{markdown}</Markdown>
          </section>
        ))}
        <p className="">
          You can check out my{" "}
          <InlineLink href="/reading">reading log</InlineLink> to keep up with
          everything {"I've"} read.
        </p>
      </article>
    </>
  );
}
