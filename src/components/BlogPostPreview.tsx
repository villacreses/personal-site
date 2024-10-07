import { CosmicEntWithSlug, TPostWithCalcData } from "@/lib/cosmic";
import { BlogPostBanner, BubbleList, Markdown } from ".";
import Link from "next/link";
import { BlogPostMetadata } from ".";

export function BlogPostPreview({
  post,
}: {
  post: CosmicEntWithSlug<TPostWithCalcData>;
}) {
  return (
    <article className="flex flex-col gap-y-2 gap-x-6 sm:flex-row">
      <BlogPostBanner post={post} width={118} height={157} />
      <div>
        <h2 className="text-xl font-bold tracking-wider">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <dl>
          <BlogPostMetadata post={post} />
        </dl>
        <Markdown className="prose-color font-light mt-1.5">
          {post.metadata.teaser}
        </Markdown>
        <BubbleList items={post.metadata.tags?.map(({ title }) => title)} /> 
      </div>
    </article>
  );
}
