import { FC } from 'react';
import { BubbleList } from './BubbleList';
import { Icon } from './Icon';

export type ExperienceEntryProps = {
  org: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  description?: string;
  techUsed?: string[];
};

const formatDate = (dateString?: string) => {
  if (!dateString) return null;

  const date = new Date(dateString);

  if (isNaN(date.getFullYear())) return null;

  return [
    // date.toLocaleString('default', { month: 'long' }),
    date.getFullYear(),
  ].join(' ');
};

const ExperienceEntry: FC<ExperienceEntryProps> = ({
  org,
  role,
  startDate,
  endDate,
  location,
  description,
  techUsed
}) => (
  <>
    <div className="grid grid-cols-8 gap-x-4">
      <header className="col-span-2 mt-1.5">
        <h3 className="text-sm font-semibold uppercase tracking-wide">{org}</h3>
        <p className="text-xs mt-1">
          {`${formatDate(startDate)} - ${formatDate(endDate) || 'Present'}`}
        </p>
      </header>
      <div className="col-span-6">
        <h4 className="font-medium tracking-wide text-lg">{role}</h4>
        <div className="flex items-center gap-x-0.5 ml-1">
          <Icon iconId="location" className="w-3 h-3 mr-0.5" />
          <span className="text-xs leading-5">
            {location}
          </span>
        </div>
        {description && (
          <p className="ml-1 mt-1 text-sm max-w-md leading-normal">{description}</p>
        )}
        <BubbleList items={techUsed} />
      </div>
    </div>
  </>
);

export const ExperienceList: FC<{ items: ExperienceEntryProps[] }> = ({ items }) => (
  <ul className="flex flex-col gap-y-12 mt-5 max-w-xl mx-auto">
    {items.map(item => (
      <li key={`${item.org}_${item.startDate}`}>
        <ExperienceEntry {...item} />
      </li>
    ))}
  </ul>
);
