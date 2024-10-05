import { Post } from "@/lib/types";
import { BubbleList, Markdown } from ".";
import Link from "next/link";

export default function BlogPostPreview({ post }: { post: Post }) {
  const date = new Date(post.metadata.published_date).toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric",
      day: "numeric",
    },
  );

  return (
    <article className="my-8">
      <time
        dateTime={post.metadata.published_date}
        className="text-sm text-neutral-500 dark:text-neutral-400"
      >
        {date}
      </time>
      <h2 className="text-lg font-bold tracking-wider">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <Markdown className="prose-color font-light mt-1">
        {post.metadata.teaser}
      </Markdown>
      <BubbleList items={post.metadata.categories?.map(({ title }) => title)} />
    </article>
  );
}
