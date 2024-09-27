import { ComponentProps } from "react";
import Markdown from "react-markdown";

export { default as Markdown } from "react-markdown";

export type TMarkdownComponents = ComponentProps<typeof Markdown>["components"];
