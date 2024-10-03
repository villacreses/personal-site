import { StandardHeader } from "@/components";

export default function ReadingPage() {
  return (
    <>
      <StandardHeader title="Now">
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
    </>
  );
}