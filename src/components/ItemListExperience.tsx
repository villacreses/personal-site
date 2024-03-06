import {FC} from 'react';
import ItemList from './ItemList';

type ExperienceEntryProps = {
  key: string;
  org: string;
  role: string;
  startDate: string;
  endDate?: string;
}

const ExperienceEntry: FC<ExperienceEntryProps> = ({
  org,
  role,
  startDate,
  endDate
}) => (
  <div>
    <hgroup>
      <h3>{org}</h3>
      <p>{role}</p>
    </hgroup>
  </div>
);

const ExperienceList: FC<{items: ExperienceEntryProps[]}> = ({ items }) => (
  <ItemList 
    items={items}
    ItemComponent={ExperienceEntry}
  />
);

export default ExperienceList;
