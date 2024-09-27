import { PropsWithChildren } from "react";
import { classNames } from "@/utils";

const bottomBorderStyles =
  "after:content-[' '] after:block after:relative after:border-b after:opacity-25 after:border-neutral-700 after:-mx-3 after:pb-8 after:z-0";

export default function StandardHeader({
  children,
  className,
  title,
}: PropsWithChildren<{ className?: string; title?: string }>) {
  const classes = classNames(["mb-12", bottomBorderStyles, className]);

  return (
    <header className={classes}>
      {!!title && (
        <h1 className="text-4xl font-extrabold text-center mb-5">{title}</h1>
      )}
      {children}
    </header>
  );
}
