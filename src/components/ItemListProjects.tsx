import { FC } from 'react';
import { BubbleList } from './BubbleList';
import { Icon, IconID } from './Icon';
import Link from 'next/link';

type IconCtaProps = {
  iconId: IconID;
  text: string;
  href: string;
}
export type ProjectEntryProps = {
  title: string;
  description: string;
  techUsed?: string[];
  links?: IconCtaProps[];
}

const IconCta: FC<IconCtaProps> = ({
  iconId,
  text,
  href
}) => (
  <Link className={`flex flex-row items-center sm:gap-x-0.25`} href={href}>
    <Icon iconId={iconId} className="mr-0.5 sm:mr-1 w-3.5 h-3.5 sm:w-3 sm:h-3" />
    <span className="text-sm sm:text-xs tracking-wide">{text}</span>
  </Link>
);

const ProjectEntry: FC<ProjectEntryProps> = ({ title, description, techUsed, links }) => (
  <>
    <h3 className="leading-5 mb-2 text-xl">
      <span className="font-medium tracking-wide">
        {title}
      </span>
    </h3>
    <p className="mt-1 text-sm max-w-md leading-normal">
      {description}
    </p>
    {links && (
      <ul className="flex flex-row ml-0.5 mt-3 gap-x-4 sm:gap-x-3">
        {links.map(link => (
          <li key={link.href}>
            <IconCta {...link} />
          </li>
        ))}
      </ul>
    )}
    <BubbleList items={techUsed} />
  </>
);

export const ProjectList: FC<{items: ProjectEntryProps[]}> = ({items}) => (
  <ul className="mt-5 flex flex-col gap-y-12">
    {items.map(item => (
      <li key={item.title}>
        <ProjectEntry {...item} />
      </li>
    ))}
  </ul>
);
