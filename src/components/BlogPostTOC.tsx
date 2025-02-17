import Markdown from "react-markdown";
import { MarkdownComponents, ToggleSectionProps } from ".";

import styles from "./Markdown.module.css";

interface BlogPostTOCProps extends ToggleSectionProps {
  className?: string;
  children: string;
}

const components: MarkdownComponents = {
  ul: function ul({ node, className = "ml-3", ...props }) {
    return <ul className={className} {...props} />;
  },
  li: function li({ node, className = "my-2", ...props }) {
    return <li className={className} {...props} />;
  },
};

const format = (content: string) =>
  content
    .split("\n")
    .filter((line) => line[0] === "#" && !line.startsWith("###"))
    .map((line, idx) => {
      const replaced = line.replace("# ", "- ").replaceAll("#-", "  -");
      const heading = replaced.substring(replaced.indexOf("- ") + 2);
      const prefix = replaced.substring(0, replaced.indexOf("-") + 1);
      const output = `${prefix} [${heading}](#mdh-${idx})`;

      return output;
    })
    .join("\n");

// External div is required for sticky to work
export const BlogPostTOC = ({ children = "" }: BlogPostTOCProps) => {
  if (!children.length) return null;

  const content = format(children);
  return (
    <div className="lg:mt-16 lg:text-sm">
      <details open className="lg:sticky top-[60px] min-w-[220px]">
        <summary className="lg:hidden font-bold uppercase tracking-widest">
          Table of Contents
        </summary>
        <nav className="border-l ml-4 mt-1 lg:py-0.5">
          <Markdown className={styles["toc-root"]} components={components}>
            {content}
          </Markdown>
        </nav>
      </details>
      <hr className="lg:hidden mx-0" />
    </div>
  );
};
