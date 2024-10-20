import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import MarkdownBase from "react-markdown";

import styles from "./Markdown.module.css";
import { classNames } from "@/lib/utils";

export type MarkdownProps = ComponentProps<typeof MarkdownBase>;
export type MarkdownComponents = MarkdownProps["components"];

const defaultComponents: MarkdownComponents = {
  ul({ node, ...props }) {
    return (
      <ul
        className={classNames([styles["md-list"], "list-disc mt-2 prose"])}
        {...props}
      />
    );
  },
  ol({ node, ...props }) {
    return (
      <ol
        className={classNames([styles["md-list"], "list-decimal mt-2 prose"])}
        {...props}
      />
    );
  },
  li({ node, ...props }) {
    return <li className="mb-3" {...props} />;
  },
  a({ node, href = "#", ...props }) {
    return <Link href={href} {...props} />;
  },
  h1({
    node,
    className = "text-4xl font-extrabold text-center mb-5",
    ...props
  }) {
    return <h1 className={className} {...props} />;
  },
  em({ node, className = "mr-0.5", ...props }) {
    return <em className={className} {...props} />;
  },
  p({ node, className = "prose", ...props }) {
    return <p className={className} {...props} />;
  },
};

export function Markdown({ components, ...props }: MarkdownProps): ReactNode {
  return (
    <MarkdownBase
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
