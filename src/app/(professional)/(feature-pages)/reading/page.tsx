import {
  Markdown,
  MarkdownComponents,
  StandardHeader,
  ToggleSection,
} from "@/components";
import { currentlyReading, readingHistory } from "./content";
import styles from '@/components/ToggleSection.module.css'

const headerContent = `
# Reading

I've always loved reading, and I've recently been trying to get back in the habit of reading every day. My favorite genres tend to be science fiction, history, and cultural studies. I am, however, open to recommendations of any genre.
`;

const markdownComponents: MarkdownComponents = {
  p({ node, className, ...props }) {
    return <p className="mt-2" {...props} />;
  },
  li({ node, className, ...props }) {
    return <li className={styles.entry} {...props} />;
  },
};

export default function ReadingPage() {
  return (
    <>
      <StandardHeader>
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
      <section>
        <h2 className="section-header mb-4">Currently reading</h2>
        <Markdown components={markdownComponents} className="a">
          {currentlyReading}
        </Markdown>
      </section>
      <section>
        {Object.entries(readingHistory).map(([title, content]) => (
          <ToggleSection key={title} title={title}>
            {content}
          </ToggleSection>
        ))}
      </section>
    </>
  );
}
