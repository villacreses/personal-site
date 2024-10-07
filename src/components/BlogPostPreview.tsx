import { CosmicEntWithSlug, TPostWithCalcData } from "@/lib/cosmic";
import {
  BubbleList,
  Markdown,
  BlogPostMetadata,
  CosmicImage,
} from ".";
import Link from "next/link";

export function BlogPostPreview({
  post,
}: {
  post: CosmicEntWithSlug<TPostWithCalcData>;
}) {
  return (
    <article className="flex flex-col mx-auto gap-y-2 gap-x-6 max-w-[400px] xs:flex-row xs:max-w-[725px]">
      <CosmicImage
        src={post.metadata.banner}
        alt={post.metadata.banner_alt_text}
        height={118}
        width={150}
        className="w-full xs:h-[118px] xs:w-[150px]"
      />
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
