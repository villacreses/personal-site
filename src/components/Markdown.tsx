import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import MarkdownBase from "react-markdown";

import styles from "./Markdown.module.css";
import { classNames } from "@/lib/utils";
import { CodeBlock } from "./MarkdownCode";

export type MarkdownProps = ComponentProps<typeof MarkdownBase>;
export type MarkdownComponents = MarkdownProps["components"];

const defaultComponents: MarkdownComponents = {
  code: CodeBlock,
  ul({ node, ...props }) {
    return <ul className="prose" {...props} />;
  },
  ol({ node, ...props }) {
    return <ol className="prose" {...props} />;
  },
  a({ node, href = "#", ...props }) {
    return <Link href={href} {...props} />;
  },
  p({ node, className = "prose", ...props }) {
    return <p className={className} {...props} />;
  },
};

export function Markdown({
  components,
  className,
  ...props
}: MarkdownProps): ReactNode {
  return (
    <MarkdownBase
      className={classNames([styles.markdown_root, className])}
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
