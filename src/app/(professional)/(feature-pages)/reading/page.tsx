import { Markdown, StandardHeader, ToggleSection } from "@/components";
import { currentlyReading } from "../content-shared";
import { readingHistory } from "./content";

const headerContent = `
# Reading

I've always loved reading, and I've recently been trying to get back in the habit of reading every day. My favorite genres tend to be science fiction, history, and cultural studies. I am, however, open to recommendations of any genre.
`;

export default function ReadingPage() {
  return (
    <>
      <StandardHeader>
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
      <section>
        <h2 className="section-header">Currently reading</h2>
        <Markdown>{currentlyReading}</Markdown>
      </section>
      <section>
        {Object.entries(readingHistory).map(([title, content]) => (
          <ToggleSection title={title}>{content}</ToggleSection>
        ))}
      </section>
    </>
  );
}
