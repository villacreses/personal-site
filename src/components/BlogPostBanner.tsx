import { CosmicEntWithSlug, TPostWithCalcData } from "@/lib/cosmic";
import { CosmicImage, CosmicImageProps } from "./CosmicImage";

export function BlogPostBanner({
  post,
  height = 1200,
  width = 900,
  className,
}: {
  post: CosmicEntWithSlug<TPostWithCalcData>;
  height?: CosmicImageProps["height"];
  width?: CosmicImageProps["width"];
  className?: CosmicImageProps["className"];
}) {
  return (
    <figure className={className}>
      <CosmicImage
        className="w-full rounded-lg"
        src={post.metadata.banner}
        alt={post.metadata.banner_alt_text}
        width={width}
        height={height}
        priority
      />
      {post.metadata.banner_caption && (
        <figcaption className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 mx-0.5">
          {post.metadata.banner_caption}
        </figcaption>
      )}
    </figure>
  );
}
