import Link from "next/link";
import { ComponentProps } from "react";
import Markdown from "react-markdown";

const content = `
&copy; 2024 Mario Villacreses

Powered by [Next.js](https://nextjs.org/) & inspired by [Blowfish](https://blowfish.page/)
`;

const markdownComponents: ComponentProps<typeof Markdown>["components"] = {
  p: ({ node, ...props }) => (
    <p className="last:text-right opacity-70" {...props} />
  ),
};

export default function PageFooter() {
  return (
    <footer className="mt-auto pt-20 pb-10 print:hidden relative">
      <Markdown
        className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-row justify-between"
        components={markdownComponents}
      >
        {content}
      </Markdown>
      <small
        aria-hidden="true"
        className="block absolute bottom-0 inset-x-0 text-transparent cursor-default"
      >
        Still using Netscape? Check out my{" "}
        <Link
          href="/90s"
          tabIndex={-1}
          className="text-transparent underline dark:text-transparent hover:text-transparent dark:hover:text-transparent cursor-not-allowed"
        >
          optimized site
        </Link>
        .
      </small>
    </footer>
  );
}
