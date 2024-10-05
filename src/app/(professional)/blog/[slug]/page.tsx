import { Markdown, MarkdownComponents } from "@/components";
import { getPost } from "@/lib/cosmic";
import Link from "next/link";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostParams) {
  const post = await getPost(params.slug);

  return {
    title: `${post.title} | Mario Villacreses`,
  };
}

const components: MarkdownComponents = {
  h2({ node, className = "text-2xl font-bold mt-7", ...props }) {
    return <h2 className={className} {...props} />;
  },
  h3({ node, className = "text-xl font-semibold mt-5 -mb-2", ...props }) {
    return <h3 className={className} {...props} />;
  },
  p({ node, className = "mt-5 prose", ...props }) {
    return <p className={className} {...props} />;
  },
};

const getReadingTime = (content: string) => {
  const WORDS_PER_MINUTE = 200;
  const minutes = Math.round(
    Number(content.match(/\w+/g)?.length) / WORDS_PER_MINUTE,
  );
  return isNaN(minutes) ? "unknown" : minutes || "< 1";
};

const getPostData = async (slug: string) => {
  const post = await getPost(slug);

  return {
    ...post,
    date: new Date(post.metadata.published_date).toLocaleString("default", {
      month: "long",
      year: "numeric",
      day: "numeric",
    }),
    readingTime: getReadingTime(post.metadata.content),
  };
};

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPostData(params.slug);
  const content = post.metadata.content;

  return (
    <main className="max-w-7xl">
      <article>
        <header>
          <p className="text-sm mb-1">
            <Link href="/blog">{"Mario's Blog"}</Link>
            <span className="px-1.5">/</span>
          </p>
          <h1 className="text-4xl font-extrabold">{post.title}</h1>
          {/* Metadata container */}
          <dl className="mt-3 mb-6 flex flex-col">
            <dt className="sr-only">Author</dt>
            <dd className="prose-color">{post.metadata.author?.title}</dd>
            <div className="flex flex-row text-sm text-neutral-500 dark:text-neutral-400">
              <dt className="sr-only">Publish date</dt>
              <dd>
                <time dateTime={post.metadata.published_date}>{post.date}</time>
              </dd>
              <dt className="sr-only"></dt>
              <dd>
                <span aria-hidden="true" className="mx-1.5">
                  &#x2022;
                </span>
              </dd>
              <span>{post.readingTime} minute read</span>
            </div>
          </dl>
          <ul>{/* TODO: Share buttons */}</ul>
        </header>
        <Markdown className="max-w-[70ch]" components={components}>
          {content}
        </Markdown>
      </article>
    </main>
  );
}
