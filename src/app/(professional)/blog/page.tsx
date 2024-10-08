import { BlogPostPreview, Markdown, StandardHeader } from "@/components";
import { BlogService } from "@/lib/cosmic";
import { Metadata } from "next";

const PAGE_TITLE = "Blog | Mario Villacreses";

const headerContent = `
This page is under construction while I test out a new content
management system (CMS). Nothing to see just yet, please excuse the current appearance!
`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: headerContent,
  keywords: ["blog", "software engineer"],
  openGraph: {
    type: "website",
    url: `https://mariovillacreses.com/blog`,
    title: PAGE_TITLE,
    description: headerContent,
  },
};

export default async function BlogHome() {
  const posts = await BlogService.getAllPosts();

  return (
    <main className="max-w-[85ch] w-full mx-auto">
      <StandardHeader title="Blog Home">
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
      <div className="flex flex-col gap-14">
        {posts.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
