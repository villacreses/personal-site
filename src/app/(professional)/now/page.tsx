import { Icon } from "@/components";
import StandardHeader from "@/components/StandardHeader";
import { ComponentProps } from "react";
import Markdown from "react-markdown";
import { nowSections, timestamp, headerContent } from "./content";

const dateDisplayed = new Date(timestamp).toLocaleString("default", {
  month: "long",
  year: "numeric",
});

const components: ComponentProps<typeof Markdown>["components"] = {
  ul({ node, ...props }) {
    return <ul className="list-disc mt-2 pl-5 prose" {...props} />;
  },
  li({ node, ...props }) {
    return <li className="mb-3" {...props} />;
  },
};

export default function NowPage() {
  return (
    <main className="h-full max-w-[70ch] mx-auto">
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
            <Markdown components={components} className="ml-3">
              {content}
            </Markdown>
          </section>
        ))}
      </article>
    </main>
  );
}
