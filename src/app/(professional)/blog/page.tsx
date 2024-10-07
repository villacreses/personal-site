import { BlogPostPreview, Markdown, StandardHeader } from "@/components";
import { BlogService } from "@/lib/cosmic";

const headerContent = `
This page is under construction while I test out a new content
management system (CMS). Nothing to see just yet, please excuse the current appearance!
`;

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
