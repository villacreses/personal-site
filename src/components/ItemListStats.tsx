
import {FC} from 'react';
import {Icon, IconPropsWithId} from './Icon';

type StatProps = IconPropsWithId & { text: string }

export type StatsListProps = {
  items: StatProps[],
  textClasses?: string
};

export const StatsList: FC<StatsListProps> = ({
  items,
}) => (
  <ul className="list-none ml-1 mt-3 p-0 flex flex-col gap-y-">
    {items.map(({text, ...props}) => (
      <li
        key={text}
        className="grid items-center gap-x-2"
        style={{ gridTemplateColumns: '1rem 1fr' }}
      >
        <Icon {...props} />
        <span className="text-xs sm:text-sm leading-5 tracking-wider">
          {text}
        </span>
      </li>
    ))}
  </ul>
);

export default StatsList;
