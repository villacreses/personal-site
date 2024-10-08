import Link from "next/link";
import {
  BlogPostBanner,
  BlogPostShareButtons,
  BlogPostTOC,
  CosmicImage,
  Markdown,
  ShareButtonEmail,
  ShareButtonFacebook,
  ShareButtonTwitter,
} from "@/components";
import { BlogService } from "@/lib/cosmic";

import styles from "./blogpost.module.css";
import { classNames } from "@/lib/utils";
import { BlogPostMetadata } from "@/components";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostParams) {
  const post = await BlogService.getPost(params.slug);

  return {
    title: `${post.title} | Mario Villacreses`,
  };
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await BlogService.getPost(params.slug);
  const author = post.metadata.author!;
  let headingCounter = 0;

  return (
    <main className="max-w-7xl">
      <article id="blog-post">
        <BlogPostBanner post={post} className="mb-5" />
        <header className="mb-10">
          <p className="text-sm mb-1">
            <Link href="/blog">{"Mario's Blog"}</Link>
            <span className="px-1.5">/</span>
          </p>
          <h1 className="text-4xl font-extrabold">{post.title}</h1>
          <div className="flex flex-row mt-3 mb-6 items-center">
            <CosmicImage
              src={author?.metadata.image!}
              alt={`An image of the author, ${author.title}`}
              height={36}
              width={36}
              className="mr-3 rounded-full medium-zoom-image"
            />
            <dl className="flex flex-col flex-grow">
              <dt className="sr-only">Author</dt>
              <dd className="prose-color">{author.title}</dd>
              <BlogPostMetadata post={post} />
            </dl>
          </div>
          <BlogPostShareButtons author={author.title} />
        </header>
        <div
          id="markdown"
          className="flex flex-col-reverse lg:gap-6 lg:flex-row"
        >
          <Markdown
            className="max-w-[70ch]"
            components={{
              h2({ node, className = "text-2xl font-bold mt-7", ...props }) {
                return (
                  <h2
                    id={`mdh-${headingCounter++}`}
                    className={className}
                    style={{ scrollMarginTop: 100 }}
                    {...props}
                  />
                );
              },
              h3({
                node,
                className = "text-xl font-semibold mt-5 -mb-3",
                ...props
              }) {
                return (
                  <h3
                    id={`mdh-${headingCounter++}`}
                    className={className}
                    style={{ scrollMarginTop: 100 }}
                    {...props}
                  />
                );
              },
              p({ node, className = "mt-5 prose", ...props }) {
                return <p className={className} {...props} />;
              },
              blockquote({
                node,
                className = "pl-6 py-1 mt-5 border-l-8 ml-3 text-neutral-600 dark:text-neutral-400 border-prose",
                ...props
              }) {
                return (
                  <blockquote
                    className={classNames([className, styles.quote])}
                    {...props}
                  />
                );
              },
            }}
          >
            {post.metadata.content}
          </Markdown>
          <BlogPostTOC
            title="Table of Contents"
            className="min-w-[220px] rounded-lg"
          >
            {post.metadata.content}
          </BlogPostTOC>
        </div>
      </article>
    </main>
  );
}
