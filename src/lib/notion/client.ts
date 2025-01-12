import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { getReadingTime } from "../utils";
import {
  CalloutBlockObjectResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ListBlockChildrenResponseResults } from "notion-to-md/build/types";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

n2m.setCustomTransformer("callout", async function (block) {
  const { callout, type, parent, ...blockData } =
    block as CalloutBlockObjectResponse;

  const fixedChildren = await getBlockChildren(block.id, 100).then((children) =>
    children.map((child) => ({ ...child, parent })),
  );

  const markdownString = await n2m
    .blocksToMarkdown([
      {
        ...blockData,
        parent,
        has_children: false,
        type: "paragraph",
        paragraph: callout,
      },
      ...fixedChildren,
    ])
    .then((markdown) => n2m.toMarkdownString(markdown).parent);

  const output = `<div className="callout" style={{ padding:"12px 16px 12px 12px"}}>
  ${markdownString}</div>`;

  return output;
});

export async function getNotionPageMarkdown(pageId: string) {
  return await n2m
    .pageToMarkdown(pageId)
    .then((blocks) => n2m.toMarkdownString(blocks))
    .then(({ parent }) => parent);
}

export async function getNotionPageReadingTime(pageId: string) {
  return await getNotionPageMarkdown(pageId).then((parent) =>
    getReadingTime(parent || ""),
  );
}

const modifyNumberedListObject = (blocks: ListBlockChildrenResponseResults) => {
  let numberedListIndex = 0;

  for (const block of blocks) {
    if ("type" in block && block.type === "numbered_list_item") {
      // add numbers
      // @ts-ignore
      block.numbered_list_item.number = ++numberedListIndex;
    } else {
      numberedListIndex = 0;
    }
  }
};

export const getBlockChildren = async (
  block_id: string,
  totalPage: number | null,
) => {
  let result: ListBlockChildrenResponseResults = [];
  let pageCount = 0;
  let start_cursor = undefined;

  do {
    const response = (await notion.blocks.children.list({
      start_cursor: start_cursor,
      block_id: block_id,
    })) as ListBlockChildrenResponse;
    result.push(...response.results);

    start_cursor = response?.next_cursor;
    pageCount += 1;
  } while (
    start_cursor != null &&
    (totalPage == null || pageCount < totalPage)
  );

  modifyNumberedListObject(result);
  return result;
};
