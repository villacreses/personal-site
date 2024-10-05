import { createBucketClient } from "@cosmicjs/sdk";
import { Post, PostWithCalcData } from "./types";
import { getReadingTime } from "./utils";

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.COSMIC_READ_KEY ?? "",
});

export default cosmic;

export const withCalcData = (post: Post): PostWithCalcData => ({
  ...post,
  date: new Date(post.metadata.published_date).toLocaleString("default", {
    month: "long",
    year: "numeric",
    day: "numeric",
  }),
  readingTime: getReadingTime(post.metadata.content),
});

export async function getAllPosts(): Promise<PostWithCalcData[]> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: "posts",
        })
        .props("id,type,slug,title,metadata,created_at")
        .depth(1),
    );
    const posts: Post[] = await data.objects;
    return Promise.resolve(posts).then((resolvedPosts) =>
      resolvedPosts.map(withCalcData),
    );
  } catch (error) {
    console.log("Error fetching all posts:", error);
  }
  return Promise.resolve([]);
}

export async function getPost(slug: string): Promise<PostWithCalcData> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: "posts",
          slug,
        })
        .props(["id", "type", "slug", "title", "metadata", "created_at"])
        .depth(1),
    );

    const post = await data.object;

    return withCalcData(post);
  } catch (error) {
    console.log("Error in fetching post data:", error);
  }
  return Promise.resolve({} as PostWithCalcData);
}
