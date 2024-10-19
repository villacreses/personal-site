"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Icon, IconID } from ".";
import { CSSProperties, FC } from "react";

import styles from "./ShareButtons.module.css";
import { classNames } from "@/lib/utils";

const ROOT_URL = "https://mariovillacreses.com";

const commonStyles = {
  backgroundSize: 22,
  borderRadius: 3,
};

interface RootShareButtonProps extends LinkProps {
  className?: string;
  href: string;
  ariaLabel: string;
  iconId: IconID;
  color?: CSSProperties["color"];
  backgroundColor?: CSSProperties["backgroundColor"];
  containerBackgroundColor?: CSSProperties["backgroundColor"];
}

const RootShareButton: FC<RootShareButtonProps> = ({
  href,
  ariaLabel,
  iconId,
  color,
  backgroundColor,
  containerBackgroundColor = "white",
  className,
  ...linkProps
}) => {
  const linkClassNames = classNames([
    "inline-block flex justify-center items-center gap-1.5 px-3 py-2 sm:py-1 hover:opacity-80",
    className,
  ]);

  return (
    <div style={{ backgroundColor: containerBackgroundColor, ...commonStyles }}>
      <Link
        target="_blank"
        href={href}
        className={linkClassNames}
        style={{
          color,
          backgroundColor,
          ...commonStyles,
        }}
        title={ariaLabel}
        aria-label={ariaLabel}
        {...linkProps}
      >
        <Icon iconId={iconId} className="text-md" />
        <span className="sm:hidden text-xs font-normal whitespace-nowrap">
          {ariaLabel}
        </span>
      </Link>
    </div>
  );
};

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
      color="white"
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
      color="white"
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
      color="white"
    />
  );
};

export const CopyToClipboardButton = () => {
  const pathname = usePathname();

  return (
    <RootShareButton
      href="#"
      ariaLabel="Copy to Clipboard"
      iconId="link"
      backgroundColor="transparent"
      containerBackgroundColor="transparent"
      className="border border-gray-300 dark:border-white dark:border-opacity-30 sm:border-none"
      onClick={(evt) => {
        evt.preventDefault();
        navigator.clipboard.writeText(ROOT_URL + pathname).then(() => {
          console.log("Copied to clipboard!");
        });
      }}
    />
  );
};

export const BlogPostShareButtons = ({ author }: { author: string }) => (
  <ul className={styles.container}>
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
