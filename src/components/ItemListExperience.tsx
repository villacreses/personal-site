import { FC } from 'react';
import ItemList from './ItemList';
import StatsList from './ItemListStats';
import DisplayIf from './DisplayIf';
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
    <hgroup className="mb-2">
      <h3 className="leading-5 mb-1 flex flex-col sm:flex-row">
        <span className="font-medium tracking-wide text-xl">{role}</span>
        <span className="hidden sm:inline text-xl">&nbsp;&nbsp;&#x2022;&nbsp;&nbsp;</span>
        <span className="font-light tracking-wide ml-1 sm:ml-0 text-md sm:text-xl sm:tracking-tight"> {org}</span>
      </h3>
      <ul className="no-list flex ml-1 gap-x-4">
        <li className="flex items-center gap-x-1">
          <Icon iconId="clock" className="w-3 h-3" />
          <span className="text-xs leading-5">
            {`${formatDate(startDate)} - ${formatDate(endDate) || 'Present'}`}
          </span>
        </li>
        <li className="flex items-center gap-x-0.5">
          <Icon iconId="location" className="w-3 h-3 mr-0.5" />
          <span className="text-xs leading-5">
            {location}
          </span>
        </li>
      </ul>
    </hgroup>
    {description && <p className="ml-1 mt-1 text-sm max-w-md leading-normal">{description}</p>}
    <BubbleList items={techUsed} />
  </>
);

const ExperienceList: FC<{ items: ExperienceEntryProps[] }> = ({ items }) => (
  <ItemList
    items={items}
    ItemComponent={ExperienceEntry}
    listContainerProps={{
      className: 'flex flex-col gap-y-12 mt-5 max-w-lg ',
    }}
  />
);

export default ExperienceList;