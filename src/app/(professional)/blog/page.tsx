import { BlogPostPreview, StandardHeader } from "@/components";
import { PostService } from "@/lib/cosmic";

export default async function BlogHome() {
  const posts = await PostService.getAll();

  return (
    <main className="max-w-[85ch] w-full mx-auto">
      <StandardHeader title="Blog Home">
        This page is under construction while I test out a new content management system (CMS). Please excuse the current appearance!
      </StandardHeader>
      {posts.map((post) => (
        <BlogPostPreview key={post.slug} post={post} />
      ))}
    </main>
  );
}
