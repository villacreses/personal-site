import { CosmicEntWithSlug, TPostWithCalcData } from "@/lib/cosmic";
import Image from "next/image";
import { ComponentProps, HTMLProps } from "react";

export function BlogPostBanner({
  post,
  height = 1200,
  width = 900,
  className,
}: {
  post: CosmicEntWithSlug<TPostWithCalcData>;
  height?: ComponentProps<typeof Image>["height"];
  width?: ComponentProps<typeof Image>["width"];
  className?: HTMLProps<HTMLElement>["className"];
}) {
  return (
    <figure className={className}>
      <Image
        className="w-full rounded-lg"
        src={post.metadata.banner.imgix_url}
        alt={post.metadata.banner_alt_text}
        width={height}
        height={width}
        placeholder="blur"
        blurDataURL={post.metadata.banner_blur.imgix_url}
      />
    </figure>
  );
}
