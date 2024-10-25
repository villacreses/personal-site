import { TPostWithCalcData, CosmicEntWithSlug } from "@/lib/cosmic";
import { FC, Fragment, PropsWithChildren } from "react";
import { CosmicImage } from ".";

type BlogPostMetadataProps = {
  post: CosmicEntWithSlug<TPostWithCalcData>;
  includeAuthor?: boolean;
};

const FixedMetadata: FC<Pick<BlogPostMetadataProps, "post">> = ({ post }) => (
  <div className="flex flex-row text-sm text-neutral-500 dark:text-neutral-400">
    <dt className="sr-only">Publish date</dt>
    <dd>
      <time dateTime={post.metadata.published_date}>{post.metadata.date}</time>
    </dd>
    <div aria-hidden="true" className="mx-1.5">
      &#x2022;
    </div>
    <dt className="sr-only">Estimated reading time</dt>
    <dd>{post.metadata.readingTime} minute read</dd>
  </div>
);

const AuthorImageWrapper: FC<PropsWithChildren<BlogPostMetadataProps>> = ({
  children,
  includeAuthor,
  post,
}) =>
  includeAuthor && post.metadata.author ? (
    <div className="flex flex-row mt-3 mb-6 items-center">
      <CosmicImage
        src={post.metadata.author.metadata.image!}
        alt={`An image of the author, ${post.metadata.author.title}`}
        height={36}
        width={36}
        className="mr-3 rounded-full medium-zoom-image"
      />
      {children}
    </div>
  ) : (
    <Fragment>{children}</Fragment>
  );

export const BlogPostMetadata: FC<BlogPostMetadataProps> = ({
  post,
  includeAuthor,
}) => {
  return (
    <AuthorImageWrapper post={post} includeAuthor={includeAuthor}>
      <dl className="flex flex-col flex-grow">
        {includeAuthor && post.metadata.author && (
          <>
            <dt className="sr-only">Author</dt>
            <dd className="prose-color">{post.metadata.author?.title}</dd>
          </>
        )}
        <FixedMetadata post={post} />
      </dl>
    </AuthorImageWrapper>
  );
};
