import { BlogPostPreview, StandardHeader } from "@/components";
import { PageService } from "@/lib/cosmic";
import { getBlog } from "@/lib/notion";

const PAGE_SLUG = "blog";

export async function generateMetadata() {
  return await PageService.getPageMetadata(PAGE_SLUG);
}

export default async function BlogHome() {
  const [heading, blog] = await Promise.all([
    PageService.getPageHeadingContent(PAGE_SLUG),
    getBlog(),
  ]);

  console.log("blog", blog);

  return (
    <main className="max-w-[85ch] w-full mx-auto">
      <StandardHeader
        title={heading.title!}
        description={heading.description!}
      />
      <div className="flex flex-col gap-8 items-start mx-auto">
        {blog.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
