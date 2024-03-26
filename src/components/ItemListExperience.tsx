import { FC } from 'react';
import ItemList from './ItemList';
import StatsList from './ItemListStats';
import DisplayIf from './DisplayIf';

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
      <h3 className="leading-5 mb-1 text-xl">
        <span className="font-medium tracking-wide">{role}</span>
        &nbsp;&nbsp;&#x2022;&nbsp;
        <span className="font-light tracking-tight"> {org}</span>
      </h3>
      <StatsList
        textClasses="text-xs leading-5"
        listContainerProps={{
        className: 'list-none ml-1 p-0 flex gap-x-4',
        }}
        itemContainerProps={{
          className: 'grid items-center gap-x-0.5',
        }}
        items={[
          {
            iconId: 'clock',
            text: `${formatDate(startDate)} - ${formatDate(endDate) || 'Present'}`,
            containerStyles: {
              height: '.75rem'
            }
          },
          {
            iconId: 'location',
            text: location,
            containerStyles: {
              height: '.745rem'
            }

          },
        ]}
      />
    </hgroup>
    {description && <p className="ml-1 mt-1 text-sm max-w-md leading-normal">{description}</p>}
    
    <DisplayIf condition={techUsed && techUsed.length}>
      <ul className="mt-2 flex flex-wrap">
        {techUsed?.map(keyword => (
          <li
            key={keyword}
            className="rounded-full inline-block bg-green-400/20 text-xs py-1 px-3 mr-1.5 mt-2 font-medium leading-4"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </DisplayIf>
    
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