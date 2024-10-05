import { PostWithCalcData } from "@/lib/types";
import { FC } from "react";

type BlogPostMetadataProps = {
  post: PostWithCalcData;
};

export const BlogPostMetadata: FC<BlogPostMetadataProps> = ({ post }) => {
  return (
    <div className="flex flex-row text-sm text-neutral-500 dark:text-neutral-400">
      <dt className="sr-only">Publish date</dt>
      <dd>
        <time dateTime={post.metadata.published_date}>{post.date}</time>
      </dd>
      <div aria-hidden="true" className="mx-1.5">
        &#x2022;
      </div>
      <dt className="sr-only">Estimated reading time</dt>
      <dd>{post.readingTime} minute read</dd>
    </div>
  );
};
