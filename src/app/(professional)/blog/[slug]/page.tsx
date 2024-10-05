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
  p({ node, className = "mt-3 prose", ...props }) {
    return <p className={className} {...props} />;
  },
};

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPost(params.slug);
  const content = post.metadata.content;

  const date = new Date(post.metadata.published_date).toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric",
      day: "numeric",
    },
  );
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
          <div className="mt-1 mb-6">
            <time
              dateTime={post.metadata.published_date}
              className="text-sm text-neutral-400"
            >
              {date}
            </time>
          </div>
        </header>
        <Markdown className="max-w-[70ch]" components={components}>
          {content}
        </Markdown>
      </article>
    </main>
  );
}
