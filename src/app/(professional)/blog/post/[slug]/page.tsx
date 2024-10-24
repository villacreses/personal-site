import Link from "next/link";
import {
  BlogPostBanner,
  BlogPostShareButtons,
  BlogPostTOC,
  CosmicImage,
  Markdown,
} from "@/components";
import { BlogService } from "@/lib/cosmic";
import { classNames } from "@/lib/utils";
import { BlogPostMetadata } from "@/components";
import { Metadata } from "next";

import styles from "@/components/blogpost.module.css";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  const post = await BlogService.getPost(params.slug);
  const tags = post.metadata.tags?.map(({ title }) => title) || [];

  return {
    title: `${post.title} | Mario Villacreses`,
    keywords: ["blog", "software engineer"].concat(tags),
    description: post.metadata.teaser,
    openGraph: {
      type: "website",
      url: `https://mariovillacreses.com/blog/post/${params.slug}`,
      title: post.title,
      siteName: "Mario Villacreses",
      description: post.metadata.teaser,
      images: post.metadata.banner.imgix_url,
    },
  };
}

function ArticleMarkdown({ children }: { children: string }) {
  let headingCounter = 0;
  return (
    <div
      id="markdown"
      className="flex flex-1 flex-col-reverse lg:gap-6 lg:flex-row"
    >
      <Markdown
        className={classNames([styles.md_root, "max-w-[70ch] lg:flex-1"])}
        components={{
          h1({ node, className = "text-3xl font-bold mt-11", ...props }) {
            return (
              <h2
                id={`mdh-${headingCounter++}`}
                className={className}
                {...props}
              />
            );
          },
          h2({ node, className = "text-2xl font-medium mt-7", ...props }) {
            return (
              <h3
                id={`mdh-${headingCounter++}`}
                className={className}
                style={{ scrollMarginTop: 100 }}
                {...props}
              />
            );
          },
          h3({ node, className = "text-md font-medium mt-5", ...props }) {
            return (
              <h4
                className={className}
                style={{ scrollMarginTop: 100 }}
                {...props}
              />
            );
          },
          p({ node, className = "prose-color", ...props }) {
            return <p className={className} {...props} />;
          },
          blockquote({ node, className = "", ...props }) {
            return (
              <blockquote
                className={classNames([className, styles.quote])}
                {...props}
              />
            );
          },
        }}
      >
        {children}
      </Markdown>
      <BlogPostTOC
        title="Table of Contents"
        className="min-w-[220px] rounded-lg"
      >
        {children}
      </BlogPostTOC>
    </div>
  );
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await BlogService.getPost(params.slug);
  const author = post.metadata.author!;

  return (
    <main className="max-w-7xl">
      <article id="blog-post">
        <BlogPostBanner post={post} className="mb-5" />
        <header className="mb-10">
          <p className="text-sm mb-1">
            <Link href="/blog">{"Mario's Blog"}</Link>
            <span className="px-1.5">/</span>
          </p>
          <h1 className="text-4xl font-extrabold tracking-wide">
            {post.title}
          </h1>
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
        <ArticleMarkdown>{post.metadata.content}</ArticleMarkdown>
      </article>
    </main>
  );
}
