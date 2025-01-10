import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getNotionPageMarkdown = async (pageId: string) =>
  await n2m.pageToMarkdown(pageId).then(n2m.toMarkdownString);
