import Image from "next/image";
import Link from "next/link";
import { Markdown, MarkdownComponents } from "@/components";
import { PostService } from "@/lib/cosmic";

import styles from "./blogpost.module.css";
import { classNames } from "@/lib/utils";
import { BlogPostMetadata } from "@/components";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostParams) {
  const post = await PostService.getOne(params.slug);

  return {
    title: `${post.title} | Mario Villacreses`,
  };
}

const components: MarkdownComponents = {
  h2({ node, className = "text-2xl font-bold mt-7", ...props }) {
    return <h2 className={className} {...props} />;
  },
  h3({ node, className = "text-xl font-semibold mt-5 -mb-3", ...props }) {
    return <h3 className={className} {...props} />;
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
};

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await PostService.getOne(params.slug);
  const content = post.metadata.content;

  return (
    <main className="max-w-7xl">
      <article>
        <header className="mb-10">
          <p className="text-sm mb-2">
            <Link href="/blog">{"Mario's Blog"}</Link>
            <span className="px-1.5">/</span>
          </p>
          <h1 className="text-4xl font-extrabold">{post.title}</h1>
          <div className="flex flex-row mt-3 mb-6 items-center">
            <Image
              alt="A picture of Mario Villacreses"
              src="/images/mario_small.jpg"
              placeholder="blur"
              blurDataURL="/images/mario_blur.jpg"
              height={36}
              width={36}
              className="mr-3 rounded-full h-9 w-9 medium-zoom-image"
            />
            <dl className="flex flex-col flex-grow">
              <dt className="sr-only">Author</dt>
              <dd className="prose-color">{post.metadata.author?.title}</dd>
              <BlogPostMetadata post={post} />
            </dl>
          </div>
          <ul>{/* TODO: Share buttons */}</ul>
        </header>
        <Markdown className="max-w-[70ch]" components={components}>
          {content}
        </Markdown>
      </article>
    </main>
  );
}
