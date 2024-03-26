import {ComponentProps, FC} from 'react';
import Link, {LinkProps} from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faHackerrank,
  faLinkedinIn,
  faMedium,
  faStackOverflow,
  faDev,
  faCodepen,
  faHackerNews,
} from '@fortawesome/free-brands-svg-icons';

import {
  faFolder, faHourglass, faEnvelope, faClock
} from '@fortawesome/free-regular-svg-icons';

import {
  faBars,
  faExternalLinkAlt,
  faGraduationCap,
  faSuitcase,
  faCaretUp,
  faCaretDown,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

export enum ExperienceCategory {
  JOBS = 'JOBS',
  HACKATHON = 'HACKATHON',
  EDUCATION = 'EDUCATION',
}

export const iconMap = {
  github: faGithub,
  linkedin: faLinkedinIn,
  stackoverflow: faStackOverflow,
  medium: faMedium,
  hackerrank: faHackerrank,
  folder: faFolder,
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
  [ExperienceCategory.JOBS]: faSuitcase,
  [ExperienceCategory.HACKATHON]: faHourglass,
  [ExperienceCategory.EDUCATION]: faGraduationCap,
} as const;

export type IconID = keyof typeof iconMap;

type IconIdProps = { iconId: IconID };
type FAProps = Omit<ComponentProps<typeof FontAwesomeIcon>, 'icon'>

export interface IconProps extends FAProps {
  containerStyles?: IconProps['style'];
}

export type IconPropsWithId = IconProps & IconIdProps;

export interface IconLinkProps extends LinkProps {
  label: string;
  slug: IconID;
  iconProps?: IconProps;
  newWindow?: boolean
};

export const Icon: FC<IconPropsWithId> = ({ iconId, size, style, containerStyles, ...props }) => (
  <div className="flex justify-center" style={containerStyles}>
    <FontAwesomeIcon
      icon={iconMap[iconId]}
      className="leading-4 block"
      {...props}
    />
  </div>
);

export const IconLink: FC<IconLinkProps> = ({ href, label, slug, iconProps, newWindow, ...linkProps }) => (
  <Link
    href={href}
    title={label}
    aria-label={label}
    className="transition duration-300 hover:-translate-y-0.5"
    target={newWindow ? '_blank' : undefined}
    {...linkProps}
  >
    <Icon iconId={slug} {...iconProps} />
  </Link>
);