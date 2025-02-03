import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLinkProps, IconPropsWithId, iconMap } from "./maps";

export const Icon: FC<IconPropsWithId> = ({
  iconId,
  containerStyles,
  size,
  style,
  className,
  ...props
}) => {
  if (!iconMap[iconId]) return null;

  const sizeStyles = size ? { height: size, width: size } : {};

  return (
    <FontAwesomeIcon
      icon={iconMap[iconId]}
      style={{ ...style, ...sizeStyles }}
      className={className}
      {...props}
    />
  );
};

export const IconLink: FC<IconLinkProps> = ({
  href,
  label,
  slug,
  iconProps,
  ...linkProps
}) => (
  <Link href={href} title={label} aria-label={label} {...linkProps}>
    <Icon iconId={slug} {...iconProps} />
  </Link>
);

export * from "./maps";
