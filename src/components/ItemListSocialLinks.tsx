import {FC} from 'react';
import ItemList from './ItemList';
import {IconLink, IconLinkProps} from './Icon';

const SocialLinksList: FC<{ items: IconLinkProps[] }> = ({ items }) => (
  <ItemList
    items={items}
    ItemComponent={({iconProps = {}, ...props}) => (
      <IconLink 
        iconProps={{
          ...iconProps,
          containerStyles: { height: '.875rem', marginTop: '.1875rem' },
        }}
        {...props}
      />
    )}
    listContainerProps={{
      className: 'list-none ml-1 mt-16 p-0 flex gap-x-2'
    }}
    itemContainerProps={{
      className: 'grid align-center gap-x-3',
      style: { gridTemplateColumns: '20px 1fr' }
    }}
  />
);

export default SocialLinksList;
