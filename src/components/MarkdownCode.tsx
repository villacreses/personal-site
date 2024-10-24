import { ExtraProps } from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function extractLanguage(classString?: string) {
  if (!classString) return undefined;

  const regex = /language-([a-zA-Z]+)/;
  const match = classString.match(regex);
  return match ? match[1] : undefined;
}

const inlineStyles = {
  ...a11yDark['pre[class*="language-"]'],
  padding: "0.125em",
  paddingLeft: "0.25em",
  paddingRight: "0.25em",
};

export function CodeBlock({
  node,
  children,
  className,
  ...props
}: JSX.IntrinsicElements["code"] & ExtraProps) {
  const content = children as string;

  const language = extractLanguage(className);

  const isInline =
    node &&
    node.position &&
    node.position.start.line === node.position.end.line;

  if (isInline) {
    return <code style={inlineStyles}>{children}</code>;
  }
  console.log(language, isInline);
  return (
    <Prism
      style={a11yDark}
      language={extractLanguage(className)}
      showLineNumbers
    >
      {content}
    </Prism>
  );
}
