import { Icon, Markdown } from "@/components";
import { getNowContent } from "@/lib/cosmic";

export default async function NowPage() {
  const { entries, last_modified } = await getNowContent();

  const dateDisplayed = last_modified.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article>
        <h2 className="text-2xl font-semibold">
          So what am I currently doing?
        </h2>
        <p className="text-xs mt-2 italic prose-color">
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
