import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type ValueOf<T> = T[keyof T];
type ExtractTypes<T> = T extends { type: infer U } ? U : never;

type NotionPropertyUnion = ValueOf<PageObjectResponse["properties"]>;

export type NotionPagePropType<T extends ExtractTypes<NotionPropertyUnion>> =
  Extract<NotionPropertyUnion, { type: T }>;

export interface NotionPageObject<P extends PageObjectResponse["properties"]>
  extends PageObjectResponse {
  properties: P;
}
