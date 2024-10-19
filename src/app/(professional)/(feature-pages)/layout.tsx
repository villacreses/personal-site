import { Markdown, StandardHeader } from "@/components";
import { PageService } from "@/lib/cosmic";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";

const usePageSlug = () => {
  const path = headers().get("x-current-path");
  const slug = path!.slice(1);
  return slug;
};

export async function generateMetadata() {
  const slug = usePageSlug();
  return await PageService.getPageMetadata(slug);
}

export default async function FeaturePageLayout({
  children,
}: PropsWithChildren) {
  const slug = usePageSlug();
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
