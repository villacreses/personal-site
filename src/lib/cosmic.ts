import { createBucketClient } from "@cosmicjs/sdk";
import { Post } from "./types";

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? "",
  readKey: process.env.COSMIC_READ_KEY ?? "",
});

export default cosmic;

export async function getAllPosts(): Promise<Post[]> {
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
    return Promise.resolve(posts);
  } catch (error) {
    console.log("Error fetching all posts:", error);
  }
  return Promise.resolve([]);
}

export async function getPost(slug: string): Promise<Post> {
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

    return post;
  } catch (error) {
    console.log("Error in fetching post data:", error);
  }
  return Promise.resolve({} as Post);
}
