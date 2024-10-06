import { CosmicEntWithSlug, TPostWithCalcData } from "@/lib/cosmic";
import { BubbleList, Markdown } from ".";
import Link from "next/link";
import { BlogPostMetadata } from ".";

export function BlogPostPreview({
  post,
}: {
  post: CosmicEntWithSlug<TPostWithCalcData>;
}) {
  return (
    <article className="my-8">
      <h2 className="text-xl font-bold tracking-wider">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <dl>
        <BlogPostMetadata post={post} />
      </dl>
      <Markdown className="prose-color font-light mt-1.5">
        {post.metadata.teaser}
      </Markdown>
      <BubbleList items={post.metadata.categories?.map(({ title }) => title)} />
    </article>
  );
}
