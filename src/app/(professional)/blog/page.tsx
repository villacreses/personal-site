import { StandardHeader } from "@/components";
import BlogPostPreview from "@/components/BlogPostPreview";
import { getAllPosts } from "@/lib/cosmic";

export default async function BlogHome() {
  const posts = await getAllPosts();
  const e = JSON.stringify(posts);

  return (
    <main>
      <StandardHeader title="Blog Home"></StandardHeader>
      {posts.map((post) => (
        <BlogPostPreview post={post} />
      ))}
    </main>
  );
}
