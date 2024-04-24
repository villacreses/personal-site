import {FC} from 'react';
import {IconLink, IconLinkProps} from './Icon';
import styles from './Icon.module.css';
import { linkColor } from '@/utils';

export const SocialLinks: FC<{ items: IconLinkProps[] }> = ({ items }) => (
  <ul className="list-none ml-1 mt-7 p-0 flex gap-x-6 sm:gap-x-4">
    {items.map(props => (
      <li key={props.label}>
        <IconLink
          className={`block transition duration-300 hover:-translate-y-0.5 ${styles.socialIcon} ${linkColor}`}
          target="_blank"
          {...props}
        />
      </li>
    ))}
  </ul>
);
