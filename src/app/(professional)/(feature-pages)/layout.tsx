import { StandardHeader } from "@/components";
import { PageService } from "@/lib/cosmic";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";

const getPageSlug = () => {
  const path = headers().get("x-current-path");
  const slug = path!.slice(1);
  return slug;
};

export async function generateMetadata() {
  const slug = getPageSlug();
  return await PageService.getPageMetadata(slug);
}

export default async function FeaturePageLayout({
  children,
}: PropsWithChildren) {
  const slug = getPageSlug();
  const content = await PageService.getPageHeadingContent(slug);

  return (
    <main className="max-w-[70ch] mx-auto">
      <StandardHeader
        title={content.title!}
        description={content.description!}
      />
      {children}
    </main>
  );
}
