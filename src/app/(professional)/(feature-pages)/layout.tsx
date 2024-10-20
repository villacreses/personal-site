import { PropsWithChildren } from "react";

export default async function FeaturePageLayout({
  children,
}: PropsWithChildren) {
  return <main className="max-w-[70ch] mx-auto">{children}</main>;
}
