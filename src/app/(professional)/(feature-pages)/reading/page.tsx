import { Metadata } from "next";
import {
  Markdown,
  MarkdownComponents,
  StandardHeader,
  ToggleSection,
} from "@/components";
import styles from "@/components/ToggleSection.module.css";
import { getReadingLogs } from "@/lib/cosmic";

const PAGE_TITLE = "Reading Log | Mario Villacreses";

const PAGE_DESC =
  "This is an active record of books I've read and am currently reading.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: "website",
    url: `https://mariovillacreses.com/now`,
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

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

export default async function ReadingPage() {
  const { current, byYear } = await getReadingLogs();
  return (
    <>
      <StandardHeader>
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
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
