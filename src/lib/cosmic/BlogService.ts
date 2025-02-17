import {
  Author,
  CosmicClient,
  CosmicEntWithSlug,
  TPost,
  TPostWithCalcData,
} from ".";
import { getReadingTime } from "../utils";

const props = `{
  slug
  title
  published_at
  metadata {
    banner
    banner_caption
    banner_alt_text
    content
    teaser
    author {
      slug
      title
      metadata {
        image
      }
    }
    published_date
    tags {
      slug
      title
    }
    category {
      slug
      title
    }
  }
}`;

const authorProps = `{
  slug
  title
  metadata {
    image
  }
}`;

export class BlogService {
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

  static async getAllPosts(): Promise<CosmicEntWithSlug<TPostWithCalcData>[]> {
    try {
      const { objects: posts }: { objects: CosmicEntWithSlug<TPost>[] } =
        await Promise.resolve(
          CosmicClient.objects.find({ type: "posts" }).props(props).depth(1),
        );

      return posts.map((post) => BlogService.withCalcData(post));
    } catch (error) {
      console.log("Error fetching all posts:", error);
      return Promise.resolve([]);
    }
  }

  static async getPost(
    slug: string,
  ): Promise<CosmicEntWithSlug<TPostWithCalcData>> {
    try {
      const { object: post }: { object: CosmicEntWithSlug<TPost> } =
        await Promise.resolve(
          CosmicClient.objects
            .findOne({
              type: "posts",
              slug,
            })
            .props(props)
            .depth(1),
        );

      return BlogService.withCalcData(post);
    } catch (error) {
      console.log("Error in fetching post data:", error);
      return Promise.resolve({} as CosmicEntWithSlug<TPostWithCalcData>);
    }
  }

  static async getAuthor(title: string) {
    try {
      const { object: author }: { object: CosmicEntWithSlug<Author> } =
        await Promise.resolve(
          CosmicClient.objects
            .findOne({
              type: "authors",
              title,
            })
            .props(authorProps)
            .depth(1),
        );

      return { name: author.title, image: author.metadata.image } as const;
    } catch (error) {
      console.log("Error in fetching author data:", error);
      return Promise.resolve({ name: "Mario Villacreses", image: undefined });
    }
  }
}
