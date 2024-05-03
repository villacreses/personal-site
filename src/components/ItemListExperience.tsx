import { FC } from 'react';
import { BubbleList } from './BubbleList';
import { Icon } from './Icon';

export type ExperienceEntryProps = {
  org: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  location: string;
  description?: string;
  techUsed?: string[];
};

const formatDate = (dateString?: string | null) => {
  if (!dateString) return null;

  const date = new Date(dateString);

  if (isNaN(date.getFullYear())) return null;

  return [
    // date.toLocaleString('default', { month: 'long' }),
    date.getFullYear(),
  ].join(' ');
};

const formatDateRange = (startDateString: string, endDateString?: string | null) => {
  const startDate = formatDate(startDateString);

  if (endDateString === undefined) return startDate;

  return `${startDate} - ${formatDate(endDateString) || 'Present'}`;
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
  <div className="grid xs:grid-cols-8 gap-x-4">
    <header className="flex flex-col-reverse col-span-full xs:flex-col xs:col-span-2 mt-1.5">
      <h3 className="text-sm font-semibold uppercase tracking-wide">{org}</h3>
      <p className="text-sm xs:text-xs mt-1">
        {formatDateRange(startDate, endDate)}
      </p>
    </header>
    <div className="col-span-full xs:col-span-6">
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
