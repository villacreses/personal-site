import {FC} from 'react';
import ItemList from './ItemList';
import {IconLink, IconLinkProps} from './Icon';
import styles from './Icon.module.css';

const SocialLinksList: FC<{ items: IconLinkProps[] }> = ({ items }) => (
  <ItemList
    items={items}
    ItemComponent={(props) => (
      <IconLink
        className={`block transition duration-300 hover:-translate-y-0.5 ${styles.socialIcon}`}
        target="_blank"
        {...props}
      />
    )}
    listContainerProps={{
      className: 'list-none ml-1 mt-16 p-0 flex justify-center sm:justify-start gap-x-6 sm:gap-x-4'
    }}
  />
);

export default SocialLinksList;
