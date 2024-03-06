import {HTMLProps, ComponentType} from 'react';

type ItemListProps<T extends {}> = {
  items: Array<T>;
  ItemComponent: ComponentType<T>,
  listContainerProps?: Omit<HTMLProps<HTMLUListElement>, 'children'>,
  itemContainerProps?: Omit<HTMLProps<HTMLLIElement>, 'children'>
}

// Index as keys is fine here, as we expect constant arrays to be used
const ItemList = <T extends {}>({
  items,
  ItemComponent,
  listContainerProps,
  itemContainerProps,
}: ItemListProps<T>) => (
  <ul {...listContainerProps}>
    {items.map((props, idx) => (
      <li key={idx} {...itemContainerProps}>
        <ItemComponent {...props} />
      </li>
    ))}
  </ul>
);

export default ItemList;
