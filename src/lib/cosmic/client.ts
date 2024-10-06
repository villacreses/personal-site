import { createBucketClient } from "@cosmicjs/sdk";
import { CosmicEntWithSlug, TNowEntry } from "./types";

export const CosmicClient = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.COSMIC_READ_KEY ?? "",
});

export async function getNowContent() {
  try {
    const { objects: entries }: { objects: CosmicEntWithSlug<TNowEntry>[] } =
      await Promise.resolve(
        CosmicClient.objects
          .find({ type: "now-entries" })
          .props("slug,title,metadata,modified_at")
          .depth(1),
      );

    return {
      entries,
      last_modified: entries
        .map(({ modified_at }) => new Date(modified_at!))
        .sort()[0],
    } as const;
  } catch (error) {
    console.log("Error fetching Now entries:", error);
    throw error;
  }
}
