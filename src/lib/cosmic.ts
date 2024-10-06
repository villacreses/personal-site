import { createBucketClient } from "@cosmicjs/sdk";
import { Post, PostWithCalcData } from "./types";
import { getReadingTime } from "./utils";

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.COSMIC_READ_KEY ?? "",
});

export default cosmic;

export class PostService {
  private static withCalcData = (post: Post): PostWithCalcData => ({
    ...post,
    date: new Date(post.metadata.published_date).toLocaleString("default", {
      month: "long",
      year: "numeric",
      day: "numeric",
    }),
    readingTime: getReadingTime(post.metadata.content),
  });

  static async getAll(): Promise<PostWithCalcData[]> {
    try {
      const { objects: posts }: { objects: Post[] } = await Promise.resolve(
        cosmic.objects
          .find({
            type: "posts",
          })
          .props("id,type,slug,title,metadata,created_at")
          .depth(1),
      );

      return posts.map(PostService.withCalcData);
    } catch (error) {
      console.log("Error fetching all posts:", error);
      return Promise.resolve([]);
    }
  }

  static async getOne(slug: string): Promise<PostWithCalcData> {
    try {
      const { object: post }: { object: Post } = await Promise.resolve(
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
      return Promise.resolve({} as PostWithCalcData);
    }
  }
}
