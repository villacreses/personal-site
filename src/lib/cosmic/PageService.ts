import { CosmicClient, CosmicEnt } from ".";
import { Metadata } from "next";

type TPageData = {
  header_description?: string;
  seo_description?: string;
};

export class PageService {
  private static async getPageContent<T extends TPageData>(
    slug: string,
    props: string | string[],
  ): Promise<CosmicEnt<T> | undefined> {
    try {
      const { object }: { object: CosmicEnt<T> } = await Promise.resolve(
        CosmicClient.objects
          .findOne({
            type: "page-data",
            slug,
          })
          .props(props)
          .depth(1),
      );

      return object;
    } catch (err) {
      console.log("Error fetching page content:", err);
      return undefined;
    }
  }

  static async getPageMetadata(slug: string) {
    const res = await PageService.getPageContent<{
      seo_description: string;
    }>(slug, ["title", "metadata.seo_description"]);

    const title = res && `${res.title} | Mario Villacreses`;
    const metadata: Metadata = {
      title,
      description: res?.metadata.seo_description,
      openGraph: res && {
        type: "website",
        url: `https://mariovillacreses.com/${slug}`,
        title,
        description: res.metadata.seo_description,
      },
    };

    return metadata;
  }

  static async getPageHeadingContent(slug: string) {
    const res = await PageService.getPageContent<{
      header_description: string;
    }>(slug, ["slug", "title", "metadata.header_description"]);

    return {
      title: res?.title,
      description: res?.metadata.header_description,
    };
  }
}
