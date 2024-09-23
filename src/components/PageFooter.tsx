import Markdown from "react-markdown"

const content = `
&copy; 2024 Mario Villacreses

Powered by [Next.js](https://nextjs.org/) & inspired by [Blowfish](https://blowfish.page/)
`;

export default function PageFooter() {
  return (
    <footer className="py-10 print:hidden">
      <Markdown className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-row justify-between">
        {content}
      </Markdown>
    </footer>
  );
}
