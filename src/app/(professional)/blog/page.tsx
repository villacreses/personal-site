import { StandardHeader } from "@/components";
import BlogPostPreview from "@/components/BlogPostPreview";
import { getAllPosts } from "@/lib/cosmic";

export default async function BlogHome() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-[85ch] w-full mx-auto">
      <StandardHeader title="Blog Home"></StandardHeader>
      {posts.map((post) => (
        <BlogPostPreview key={post.slug} post={post} />
      ))}
    </main>
  );
}
