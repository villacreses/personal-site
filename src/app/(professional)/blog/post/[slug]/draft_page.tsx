import Link from "next/link";
import {
  BlogPostBanner,
  BlogPostShareButtons,
  BlogPostTOC,
  CosmicImage,
  Markdown,
} from "@/components";
import { BlogService } from "@/lib/cosmic";
import { BlogPostMetadata } from "@/components";
import { Metadata } from "next";

import styles from "@/components/Markdown.module.css";

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
        className={styles.blogpost}
        components={{
          h1({ node, ...props }) {
            return <h2 id={`mdh-${headingCounter++}`} {...props} />;
          },
          h2({ node, ...props }) {
            return <h3 id={`mdh-${headingCounter++}`} {...props} />;
          },
          h3({ node, ...props }) {
            return <h4 {...props} />;
          },
          p({ node, className = "prose-color", ...props }) {
            return <p className={className} {...props} />;
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
          <BlogPostMetadata post={post} includeAuthor />
          <BlogPostShareButtons author={author.title} />
        </header>
        <ArticleMarkdown>{post.metadata.content}</ArticleMarkdown>
      </article>
    </main>
  );
}
