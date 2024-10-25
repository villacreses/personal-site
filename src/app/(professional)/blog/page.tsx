import { BlogPostPreview, StandardHeader } from "@/components";
import { BlogService, PageService } from "@/lib/cosmic";

const PAGE_SLUG = "blog";

export async function generateMetadata() {
  return await PageService.getPageMetadata(PAGE_SLUG);
}

export default async function BlogHome() {
  const [heading, posts] = await Promise.all([
    PageService.getPageHeadingContent(PAGE_SLUG),
    BlogService.getAllPosts(),
  ]);

  return (
    <main className="max-w-[85ch] w-full mx-auto">
      <StandardHeader
        title={heading.title!}
        description={heading.description!}
      />
      <div className="flex flex-col gap-14 items-center sm:items-start">
        {posts.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
