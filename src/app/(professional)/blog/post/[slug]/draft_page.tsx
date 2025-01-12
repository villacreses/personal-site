import Link from "next/link";
import { BlogPostTOC, Markdown } from "@/components";
import { BlogPostMetadata } from "@/components";

import styles from "@/components/Markdown.module.css";
import { getBlog, getNotionPageMarkdown } from "@/lib/notion";
import { Metadata } from "next";

type BlogPostParams = {
  params: Promise<Awaited<ReturnType<typeof generateStaticParams>>[number]>;
};

const getPost = async (params: BlogPostParams["params"]) =>
  await Promise.all([params, getBlog()]).then(
    ([{ slug }, blog]) =>
      blog.filter(({ slug: testSlug }) => testSlug === slug)[0],
  );

export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  const post = await getPost(params);
  const tags = post.tags || [];

  return {
    title: `${post.title} | Mario Villacreses`,
    keywords: ["blog", "software engineer"].concat(tags),
    description: post.description,
    openGraph: {
      type: "website",
      url: `https://mariovillacreses.com/blog/post/${post.slug}`,
      title: post.title,
      siteName: "Mario Villacreses",
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  return await getBlog().then((blog) =>
    blog.map(({ slug }) => ({
      slug,
    })),
  );
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
  const post = await getPost(params);
  const markdown = await getNotionPageMarkdown(post.id);

  return (
    <main className="max-w-7xl">
      <article id="blog-post">
        <header className="mb-7 lg:mb-2">
          <p className="text-sm mb-1">
            <Link href="/blog">{"Mario's Blog"}</Link>
            <span className="px-1.5">/</span>
          </p>
          <h1 className="text-5xl font-extrabold tracking-wide">
            {post.title}
          </h1>
          <BlogPostMetadata post={post} includeAuthor />
        </header>
        <ArticleMarkdown>{markdown}</ArticleMarkdown>
      </article>
    </main>
  );
}
