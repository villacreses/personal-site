
import {FC} from 'react';
import ItemList, { ItemListProps } from './ItemList';
import {Icon, IconPropsWithId} from './Icon';

type StatProps = IconPropsWithId & { text: string }

export type StatsListProps = {
  items: StatProps[],
  textClasses?: string
} & Pick<ItemListProps<StatProps>, 'listContainerProps' | 'itemContainerProps'>;

const StatsList: FC<StatsListProps> = ({
  items,
  textClasses,
  listContainerProps,
  itemContainerProps
}) => (
  <ItemList
    items={items}
    ItemComponent={({ text, ...props }) => (
      <>
        <Icon {...props} />
        <span className={textClasses}>{text}</span>
      </>
    )}
    listContainerProps={listContainerProps}
    itemContainerProps={{
      className: 'grid items-center gap-x-2',
      style: { gridTemplateColumns: '1rem 1fr' },
      ...itemContainerProps
    }}
  />
);

export default StatsList;
