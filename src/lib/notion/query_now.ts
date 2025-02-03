import { cache } from "react";
import { getNotionPageMarkdown, notion } from "./client";
import {
  NotionPagePropType,
  NotionPageObject,
  pageProp,
  pageType,
} from "./types";
import { IconID } from "@/components";

type TNowEntry = NotionPageObject<{
  Name: NotionPagePropType<"title">;
  "FA Icon": NotionPagePropType<"select">;
}>;

export const getNowEntries = cache(
  async () =>
    await notion.databases
      .query({
        database_id: process.env.NOTION_DBID_BLOG as string,
        filter: {
          and: [
            {
              property: pageProp.PAGE_TYPE,
              select: {
                equals: pageType.NOW,
              },
            },
          ],
        },
        sorts: [
          {
            property: pageProp.SORT_ORDER,
            direction: "ascending",
          },
        ],
      })
      .then(({ results }) =>
        Promise.all((results as TNowEntry[]).map(formatNowEntries)),
      ),
);

async function formatNowEntries(entry: TNowEntry) {
  const markdown = await getNotionPageMarkdown(entry.id);

  return {
    heading: entry.properties.Name.title[0].plain_text,
    iconId: entry.properties["FA Icon"].select?.name as IconID,
    lastEdited: entry.last_edited_time,
    markdown: markdown,
  } as const;
}
