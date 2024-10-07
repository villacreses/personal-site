import { TImage } from "@/lib/cosmic";
import NextImage from "next/image";
import { ComponentProps } from "react";

const pickedProps = [
  "alt",
  "height",
  "width",
  "layout",
  "objectFit",
  "quality",
  "priority",
  "className",
  "style",
] as const;

export interface CosmicImageProps
  extends Pick<ComponentProps<typeof NextImage>, (typeof pickedProps)[number]> {
  src: TImage;
}

export function CosmicImage({
  src,
  quality = 60,
  style = { objectFit: "cover" },
  ...props
}: CosmicImageProps) {
  return (
    <NextImage
      src={src.imgix_url}
      quality={quality}
      style={style}
      placeholder="blur"
      blurDataURL={`${src.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
      {...props}
    />
  );
}
