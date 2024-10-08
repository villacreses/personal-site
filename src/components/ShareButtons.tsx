"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, IconID } from ".";
import { CSSProperties, FC } from "react";

const ROOT_URL = "https://mariovillacreses.com";

const commonStyles = {
  width: 24,
  height: 22,
  backgroundSize: 22,
  borderRadius: 3,
};

type RootShareButtonProps = {
  href: string;
  ariaLabel: string;
  iconId: IconID;
  color?: CSSProperties["color"];
  backgroundColor?: CSSProperties["backgroundColor"];
};

const RootShareButton: FC<RootShareButtonProps> = ({
  href,
  ariaLabel,
  iconId,
  color = "white",
  backgroundColor,
}) => (
  <div style={{ backgroundColor: "white", ...commonStyles }}>
    <Link
      target="_blank"
      href={href}
      className="inline-block flex justify-center items-center hover:opacity-80"
      style={{
        color,
        backgroundColor,
        ...commonStyles,
      }}
      title={ariaLabel}
      aria-label={ariaLabel}
    >
      <Icon iconId={iconId} className="text-md" />
    </Link>
  </div>
);

const useEncodedURL = () => {
  const pathname = usePathname();
  return encodeURIComponent(ROOT_URL + pathname);
};

export const ShareButtonFacebook = () => {
  const encodedUrl = useEncodedURL();

  const href = [
    "https://www.facebook.com/sharer/sharer.php?u=",
    encodedUrl,
    "&amp;src=sdkpreparse",
  ].join("");

  return (
    <RootShareButton
      href={href}
      ariaLabel="Share on Facebook"
      iconId="facebook"
      backgroundColor="rgb(8, 102, 255)"
    />
  );
};

export const ShareButtonTwitter = () => {
  const encodedUrl = useEncodedURL();

  return (
    <RootShareButton
      href={`https://twitter.com/share?url=${encodedUrl}`}
      ariaLabel="Share on X"
      iconId="twitter"
      backgroundColor="#222"
    />
  );
};

export const ShareButtonEmail = ({ author }: { author: string }) => {
  const pathname = usePathname();
  const emailFields = Object.entries({
    subject: `Check out this article by ${author}`,
    body: `I wanted you to read this article: ${ROOT_URL + pathname}`,
  })
    .map((entry) => entry.join("="))
    .join("&");

  return (
    <RootShareButton
      href={`mailto:?${emailFields}`}
      ariaLabel="Share post by email"
      iconId="envelope"
      backgroundColor="#555"
    />
  );
};

export const CopyToClipboardButton = () => {
  const pathname = usePathname();

  return (
    <a
      href="#"
      aria-label="Copy URL to Clipboard"
      title="Copy URL to Clipboard"
      onClick={(evt) => {
        evt.preventDefault();
        navigator.clipboard.writeText(ROOT_URL + pathname).then(() => {
          console.log("Copied to clipboard!");
        });
      }}
    >
      <Icon iconId="link" className="text-md [&:not(:hover)]:prose-color" />
    </a>
  );
};

export const BlogPostShareButtons = ({ author }: { author: string }) => (
  <ul className="flex flex-row gap-2">
    <li>
      <ShareButtonFacebook />
    </li>
    <li>
      <ShareButtonTwitter />
    </li>
    <li>
      <ShareButtonEmail author={author} />
    </li>
    <li>
      <CopyToClipboardButton />
    </li>
  </ul>
);
