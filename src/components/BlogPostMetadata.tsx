import { BlogService, TImage } from "@/lib/cosmic";
import { FC, Fragment, PropsWithChildren } from "react";
import { CosmicImage } from ".";
import { BlogPostListing } from "@/lib/notion";
import { formatBlogPostDate } from "@/lib/utils";

type BlogPostMetadataProps = {
  authorName?: string;
  includeAuthor?: boolean;
  post: BlogPostListing;
};

type AuthorImageWrapperProps = {
  includeAuthor?: boolean;
  authorImage?: TImage;
  post: BlogPostListing;
};

const FixedMetadata: FC<Pick<BlogPostMetadataProps, "post">> = ({ post }) => (
  <div className="flex flex-row text-xs text-neutral-500 dark:text-neutral-400">
    <dt className="sr-only">Publish date</dt>
    <dd>
      <time dateTime={post.datePublished}>
        {formatBlogPostDate(post.datePublished!)}
      </time>
    </dd>
    <div aria-hidden="true" className="mx-1.5">
      &#x2022;
    </div>
    <dt className="sr-only">Estimated reading time</dt>
    <dd>{post.readingTime} minute read</dd>
  </div>
);

const AuthorImageWrapper: FC<
  PropsWithChildren<AuthorImageWrapperProps>
> = async ({ children, includeAuthor, authorImage }) => {
  const author = await BlogService.getAuthor("Mario Villacreses");
  return includeAuthor && authorImage ? (
    <div className="flex flex-row mt-3 mb-6 items-center">
      <CosmicImage
        src={authorImage}
        alt={`An image of the author, ${author.name}`}
        height={36}
        width={36}
        className="mr-3 rounded-full medium-zoom-image"
      />
      {children}
    </div>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export const BlogPostMetadata: FC<BlogPostMetadataProps> = async ({
  includeAuthor,
  authorName = "Mario Villacreses",
  post,
}) => {
  const author = await BlogService.getAuthor(authorName);
  return (
    <AuthorImageWrapper
      post={post}
      includeAuthor={includeAuthor}
      authorImage={author.image}
    >
      <dl className="flex flex-col flex-grow">
        {includeAuthor && (
          <>
            <dt className="sr-only">Author</dt>
            <dd className="prose-color">{author.name}</dd>
          </>
        )}
        <FixedMetadata post={post} />
      </dl>
    </AuthorImageWrapper>
  );
};
