import { createBucketClient } from "@cosmicjs/sdk";
import { CosmicEntWithSlug, TPost, TPostWithCalcData } from "./types";
import { getReadingTime } from "../utils";

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.COSMIC_READ_KEY ?? "",
});

export default cosmic;

export class PostService {
  private static withCalcData = (
    post: CosmicEntWithSlug<TPost>,
  ): CosmicEntWithSlug<TPostWithCalcData> => ({
    ...post,
    metadata: {
      ...post.metadata,
      date: new Date(post.metadata.published_date).toLocaleString("default", {
        month: "long",
        year: "numeric",
        day: "numeric",
      }),
      readingTime: getReadingTime(post.metadata.content),
    },
  });

  static async getAll(): Promise<CosmicEntWithSlug<TPostWithCalcData>[]> {
    try {
      const { objects: posts }: { objects: CosmicEntWithSlug<TPost>[] } =
        await Promise.resolve(
          cosmic.objects
            .find({
              type: "posts",
            })
            .props("id,type,slug,title,metadata,created_at")
            .depth(1),
        );

      return posts.map((post) => PostService.withCalcData(post));
    } catch (error) {
      console.log("Error fetching all posts:", error);
      return Promise.resolve([]);
    }
  }

  static async getOne(
    slug: string,
  ): Promise<CosmicEntWithSlug<TPostWithCalcData>> {
    try {
      const { object: post }: { object: CosmicEntWithSlug<TPost> } =
        await Promise.resolve(
          cosmic.objects
            .findOne({
              type: "posts",
              slug,
            })
            .props(["id", "type", "slug", "title", "metadata", "created_at"])
            .depth(1),
        );

      return PostService.withCalcData(post);
    } catch (error) {
      console.log("Error in fetching post data:", error);
      return Promise.resolve({} as CosmicEntWithSlug<TPostWithCalcData>);
    }
  }
}
