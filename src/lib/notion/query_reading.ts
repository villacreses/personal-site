import { cache } from "react";
import { getNotionPageMarkdown, notion } from "./client";
import {
  NotionPagePropType,
  NotionPageObject,
  pageProp,
  pageType,
} from "./types";

type TReadingEntry = NotionPageObject<{
  Name: NotionPagePropType<"title">;
}>;

export const getReadingEntries = cache(
  async () =>
    await notion.databases
      .query({
        database_id: process.env.NOTION_DBID_BLOG as string,
        filter: {
          and: [
            {
              property: pageProp.PAGE_TYPE,
              select: {
                equals: pageType.READING,
              },
            },
          ],
        },
        sorts: [
          {
            property: pageProp.SORT_ORDER,
            direction: "ascending",
          },
          {
            property: pageProp.TITLE,
            direction: "descending",
          },
        ],
      })
      .then(({ results }) =>
        Promise.all((results as TReadingEntry[]).map(formatNowEntries)),
      ),
);

async function formatNowEntries(entry: TReadingEntry) {
  const markdown = await getNotionPageMarkdown(entry.id);

  return {
    heading: entry.properties.Name.title[0].plain_text,
    lastEdited: entry.last_edited_time,
    markdown: markdown,
  } as const;
}
