import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { getReadingTime } from "../utils";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getNotionPageMarkdown(pageId: string) {
  return await n2m
    .pageToMarkdown(pageId)
    .then((blocks) => n2m.toMarkdownString(blocks));
}

export async function getNotionPageReadingTime(pageId: string) {
  return await getNotionPageMarkdown(pageId).then(({ parent }) =>
    getReadingTime(parent || ""),
  );
}
