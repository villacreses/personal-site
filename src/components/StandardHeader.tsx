import { PropsWithChildren } from "react";

export function StandardHeader({
  children,
  className,
  title,
}: PropsWithChildren<{ className?: string; title?: string }>) {
  const classes = className || "mb-12";

  return (
    <header className={classes}>
      {!!title && (
        <h1 className="text-4xl font-extrabold text-center mb-5">{title}</h1>
      )}
      {children}
      <hr />
    </header>
  );
}
