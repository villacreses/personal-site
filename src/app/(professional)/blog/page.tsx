import { BlogPostPreview, StandardHeader } from "@/components";
import { BlogService, PageService } from "@/lib/cosmic";

export default async function BlogHome() {
  const content = await PageService.getPageHeadingContent("blog");
  const posts = await BlogService.getAllPosts();

  return (
    <main className="max-w-[85ch] w-full mx-auto">
      <StandardHeader
        title={content.title!}
        description={content.description!}
      />
      <div className="flex flex-col gap-14">
        {posts.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
