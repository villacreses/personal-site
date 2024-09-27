import { ComponentProps, CSSProperties, FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHackerrank,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faDev,
  faCodepen,
  faHackerNews,
} from "@fortawesome/free-brands-svg-icons";

import {
  faFolder,
  faHourglass,
  faEnvelope,
  faClock,
} from "@fortawesome/free-regular-svg-icons";

import {
  faBars,
  faExternalLinkAlt,
  faGraduationCap,
  faSuitcase,
  faCaretUp,
  faCaretDown,
  faLocationDot,
  faLink,
  faArrowRightLong,
  faScrewdriverWrench,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export enum ExperienceCategory {
  JOBS = "JOBS",
  HACKATHON = "HACKATHON",
  EDUCATION = "EDUCATION",
}

export const iconMap = {
  github: faGithub,
  linkedin: faLinkedin,
  stackoverflow: faStackOverflow,
  medium: faMedium,
  hackerrank: faHackerrank,
  folder: faFolder,
  link: faLink,
  external: faExternalLinkAlt,
  burger: faBars,
  devto: faDev,
  codepen: faCodepen,
  hackernews: faHackerNews,
  suitcase: faSuitcase,
  school: faGraduationCap,
  hourglass: faHourglass,
  caretUp: faCaretUp,
  caretDown: faCaretDown,
  location: faLocationDot,
  envelope: faEnvelope,
  clock: faClock,
  rightArrow: faArrowRightLong,
  tools: faScrewdriverWrench,
  book: faBookOpen,
  [ExperienceCategory.JOBS]: faSuitcase,
  [ExperienceCategory.HACKATHON]: faHourglass,
  [ExperienceCategory.EDUCATION]: faGraduationCap,
} as const;

export type IconID = keyof typeof iconMap;

type IconIdProps = { iconId: IconID };
type FAProps = Omit<ComponentProps<typeof FontAwesomeIcon>, "icon">;

export interface IconProps extends Omit<FAProps, "size"> {
  containerStyles?: IconProps["style"];
  size?: CSSProperties["height"];
}

export type IconPropsWithId = IconProps & IconIdProps;

export interface IconLinkProps extends ComponentProps<typeof Link> {
  label: string;
  slug: IconID;
  iconProps?: IconProps;
}

export const Icon: FC<IconPropsWithId> = ({
  iconId,
  containerStyles,
  size,
  style,
  className,
  ...props
}) => {
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
