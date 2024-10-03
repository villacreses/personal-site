import { Icon, Markdown, StandardHeader } from "@/components";
import { nowSections, timestamp, headerContent } from "./content";

const dateDisplayed = new Date(timestamp).toLocaleString("default", {
  month: "long",
  year: "numeric",
});

export default function NowPage() {
  return (
    <>
      <StandardHeader title="Now">
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
      <article>
        <h2 className="text-2xl font-semibold">
          So what am I currently doing?
        </h2>
        <p className="text-xs mt-2 italic">
          <span className="mr-1.5">Last updated:</span>
          <time dateTime={timestamp}>{dateDisplayed}</time>
        </p>
        {nowSections.map(({ heading, icon, content }) => (
          <section key={heading}>
            <h3 className="font-bold uppercase tracking-widest mt-8 mb-3 flex flex-row items-center">
              <Icon iconId={icon} height="1.4em" className="mr-2" />
              <span>{heading}</span>
            </h3>
            <Markdown className="ml-3">{content}</Markdown>
          </section>
        ))}
      </article>
    </>
  );
}
