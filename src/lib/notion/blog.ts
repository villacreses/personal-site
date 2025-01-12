import { cache } from "react";
import { getNotionPageReadingTime, notion } from "./client";
import { NotionPagePropType, NotionPageObject } from "./types";

type BlogEntryListing = NotionPageObject<{
  Name: NotionPagePropType<"title">;
  "Last edited time": NotionPagePropType<"date">;
  Tags: NotionPagePropType<"multi_select">;
  "Published Date": NotionPagePropType<"date">;
  Description: NotionPagePropType<"rich_text">;
}>;

// See here for inspiration:
// https://github.com/samuelkraft/notion-blog-nextjs/blob/master/lib/notion.js

export const getBlog = cache(
  async () =>
    await notion.databases
      .query({
        database_id: process.env.NOTION_DBID_BLOG as string,
      })
      .then(({ results }) =>
        Promise.all(
          (results as BlogEntryListing[]).map(formatBlogpostMetadata),
        ),
      ),
);

async function formatBlogpostMetadata(blogEntry: BlogEntryListing) {
  const publishedDatestring =
    blogEntry.properties["Published Date"].date?.start;

  const readingTime = await getNotionPageReadingTime(blogEntry.id);

  return {
    id: blogEntry.id,
    lastEdited: blogEntry.last_edited_time,
    datePublished: publishedDatestring,
    title: blogEntry.properties.Name.title[0].plain_text,
    tags: blogEntry.properties.Tags.multi_select.map(({ name }) => name),
    description: blogEntry.properties.Description.rich_text[0].plain_text,
    slug: blogEntry.url.slice(blogEntry.url.lastIndexOf("/") + 1),
    readingTime,
  } as const;
}

export type BlogPostListing = Awaited<
  ReturnType<typeof formatBlogpostMetadata>
>;
