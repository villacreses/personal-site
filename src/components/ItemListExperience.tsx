import {FC} from 'react';
import ItemList from './ItemList';
import StatsList from './ItemListStats';

type ExperienceEntryProps = {
  org: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return null;

  const date = new Date(dateString);

  if (isNaN(date.getFullYear())) return null;

  return [
    date.toLocaleString('default', { month: 'long' }),
    date.getFullYear()
  ].join(' ');
} 
;

const ExperienceEntry: FC<ExperienceEntryProps> = ({
  org,
  role,
  startDate,
  endDate,
  location
}) => (
  <>
    <hgroup className="mb-2">
      <h3 className="leading-5 mb-2">
        <span className="font-medium tracking-wider">{role}</span>
        &nbsp;&nbsp;&#x2022;&nbsp;
        <span className="font-light"> {org}</span>
      </h3>
      <StatsList
        textClasses="text-xs leading-5 tracking-wider"
        listContainerProps={{
          className: 'list-none ml-1 p-0 flex flex-col gap-y-1'
        }}
        items={[
          { iconId: 'clock', text: `${formatDate(startDate)} - ${formatDate(endDate) || 'Present'}`},
          { iconId: 'location', text: location }
        ]}
      />
    </hgroup>
    <p className="ml-1 mt-3">Description</p>
  </>
);

const ExperienceList: FC<{items: ExperienceEntryProps[]}> = ({ items }) => (
  <ItemList 
    items={items}
    ItemComponent={ExperienceEntry}
    listContainerProps={{
      className: 'flex flex-col gap-y-8 mt-5'
    }}
  />
);

export default ExperienceList;
