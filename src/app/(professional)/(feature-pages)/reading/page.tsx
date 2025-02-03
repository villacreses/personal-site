import {
  Markdown,
  MarkdownComponents,
  StandardHeader,
  ToggleSection,
} from "@/components";
import styles from "@/components/ToggleSection.module.css";
import { PageService } from "@/lib/cosmic";
import { getReadingEntries } from "@/lib/notion";

const markdownComponents: MarkdownComponents = {
  p({ node, className, ...props }) {
    return <p className="mt-2" {...props} />;
  },
  li({ node, className, ...props }) {
    return <li className={styles.entry} {...props} />;
  },
};

const PAGE_SLUG = "reading";

export async function generateMetadata() {
  return await PageService.getPageMetadata(PAGE_SLUG);
}

export default async function ReadingPage() {
  const [entries, heading] = await Promise.all([
    getReadingEntries(),
    PageService.getPageHeadingContent(PAGE_SLUG),
  ]);

  const [current, ...byYear] = entries;

  return (
    <>
      <StandardHeader
        title={heading.title!}
        description={heading.description!}
      />
      <section>
        <h2 className="section-header mb-4">{current.heading}</h2>
        <Markdown components={markdownComponents}>{current.markdown}</Markdown>
      </section>
      <section>
        {byYear.map(({ heading: year, markdown }) => (
          <ToggleSection key={year} title={year}>
            {markdown}
          </ToggleSection>
        ))}
      </section>
    </>
  );
}
