import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";

import styles from "./Markdown.module.css";
import { classNames } from "@/lib/utils";
import { CodeBlock } from "./MarkdownCode";

export type MarkdownProps = ComponentProps<typeof ReactMarkdown>;
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
  div({ node, className, ...props }) {
    console.log("cl", className);

    const divClass = className === 'callout' ? styles.callout : className
    
    return <div className={divClass} {...props} />;
  },
};

export function Markdown({
  components,
  className,
  ...props
}: MarkdownProps): ReactNode {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className={classNames([styles.markdown_root, className])}
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
