import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import MarkdownBase from "react-markdown";

import styles from "./Markdown.module.css";
import { classNames } from "@/lib/utils";
import { CodeBlock } from "./MarkdownCode";

export type MarkdownProps = ComponentProps<typeof MarkdownBase>;
export type MarkdownComponents = MarkdownProps["components"];

const shouldOpenInNewWindow = (href: string) =>
  !(href.charAt(0) === "#" || href.charAt(0) === "/") ||
  href.indexOf("/docs") === 0;

const defaultComponents: MarkdownComponents = {
  code: CodeBlock,
  ul({ node, ...props }) {
    return <ul className="prose" {...props} />;
  },
  ol({ node, ...props }) {
    return <ol className="prose" {...props} />;
  },
  a({ node, href = "#", ...props }) {
    const target = shouldOpenInNewWindow(href) ? "_blank" : undefined;
    return <Link href={href} target={target} {...props} />;
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
