import { Markdown, MarkdownComponents, ToggleSection } from "@/components";
import styles from "@/components/ToggleSection.module.css";
import { getReadingLogs } from "@/lib/cosmic";

const markdownComponents: MarkdownComponents = {
  p({ node, className, ...props }) {
    return <p className="mt-2" {...props} />;
  },
  li({ node, className, ...props }) {
    return <li className={styles.entry} {...props} />;
  },
};

export default async function ReadingPage() {
  const { current, byYear } = await getReadingLogs();
  return (
    <>
      {current?.metadata.content && (
        <section>
          <h2 className="section-header mb-4">Currently reading</h2>
          <Markdown components={markdownComponents}>
            {current.metadata.content}
          </Markdown>
        </section>
      )}
      <section>
        {byYear.map(({ title: year, metadata: { content } }) => (
          <ToggleSection key={year} title={year}>
            {content}
          </ToggleSection>
        ))}
      </section>
    </>
  );
}
