import { BubbleList, BlogPostMetadata } from ".";
import Link from "next/link";
import { BlogPostListing } from "@/lib/notion";

export function BlogPostPreview({ post }: { post: BlogPostListing }) {
  return (
    <article className="flex flex-col gap-y-2 gap-x-6 max-w-[400px] xs:flex-row xs:max-w-[725px]">
      <div>
        <h2 className="font-bold tracking-wider">
          <Link href={`/blog/post/${post.slug}`}>{post.title}</Link>
        </h2>
        <BlogPostMetadata post={post} />
        <p className="prose-color font-light mt-1 mb-1.5 text-sm">
          {" "}
          {post.description}
        </p>
        <BubbleList items={post.tags} />
      </div>
    </article>
  );
}
