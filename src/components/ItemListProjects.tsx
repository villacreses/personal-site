import { FC } from 'react';
import ItemList from './ItemList';
import { BubbleList } from './BubbleList';
import { Icon, IconID, IconLink } from './Icon';
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
  <Link className="grid text-center gap-x-0.25" style={{ gridTemplateColumns: '20px 1fr' }} href={href}>
    <Icon
      iconId={iconId}
      containerStyles={{ height: '.875rem', marginTop: '.0875rem' }}
    />
    <span className="text-xs tracking-wide">{text}</span>
  </Link>
);

const ProjectEntry: FC<ProjectEntryProps> = ({ title, description, techUsed, links }) => (
  <>
    <h3 className="leading-5 mb-2 text-xl">
      <span className="font-medium tracking-wide">
        {title}
      </span>
    </h3>
    <p className="mt-1 text-sm max-w-md leading-normal text-justify">
      {description}
    </p>
    {links && (
      <ItemList
        items={links}
        ItemComponent={IconCta}
        listContainerProps={{
          className: 'flex flex-row ml-1 mt-2 gap-x-3'
        }}
      />
    )}
    <BubbleList items={techUsed} />
  </>
);

export const ProjectList: FC<{items: ProjectEntryProps[]}> = ({items}) => (
  <ItemList 
    items={items}
    ItemComponent={ProjectEntry}
    listContainerProps={{
    className: 'mt-5 flex flex-col gap-y-12'
    }}
  />
);
