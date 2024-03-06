
import {FC} from 'react';
import ItemList from './ItemList';
import {Icon, IconPropsWithId} from './Icon';

type StatProps = IconPropsWithId & { text: string }

const StatsList: FC<{items: StatProps[]}> = ({
  items
}) => (
  <ItemList
    items={items}
    ItemComponent={({ text, width, ...props }) => (
      <>
        <Icon
          style={{ width }}
          containerStyles={{ height: '.875rem', marginTop: '.1875rem' }}
          {...props}
        />
        <span>{text}</span>
      </>
    )}
    listContainerProps={{
      className: 'list-none ml-1 mt-2 p-0 text-xs sm:text-sm flex flex-col gap-y-1'
    }}
    itemContainerProps={{
      className: 'grid align-center gap-x-3',
      style: { gridTemplateColumns: '20px 1fr' },

    }}
  />
);

export default StatsList;
