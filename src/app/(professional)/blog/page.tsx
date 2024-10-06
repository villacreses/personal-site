import { BlogPostPreview, StandardHeader } from "@/components";
import { PostService } from "@/lib/cosmic";

export default async function BlogHome() {
  const posts = await PostService.getAll();

  return (
    <main className="max-w-[85ch] w-full mx-auto">
      <StandardHeader title="Blog Home"></StandardHeader>
      {posts.map((post) => (
        <BlogPostPreview key={post.slug} post={post} />
      ))}
    </main>
  );
}
