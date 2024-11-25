import { PropsWithChildren } from "react";
import { Markdown } from ".";

export async function StandardHeader({
  className,
  title,
  description,
}: PropsWithChildren<{
  className?: string;
  title: string;
  description: string;
}>) {
  const classes = className || "mb-12";

  return (
    <header className={classes}>
      <h1 className="text-4xl font-extrabold text-center mb-5">{title}</h1>
      <Markdown className="text-sm">{description}</Markdown>
      <hr />
    </header>
  );
}
