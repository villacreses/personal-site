import {FC} from 'react';
import {IconLink, IconLinkProps} from './Icon';

export const SocialLinks: FC<{ items: IconLinkProps[] }> = ({ items }) => (
  <ul className="list-none ml-1 mt-7 p-0 flex gap-x-6 sm:gap-x-4 justify-center">
    {items.map(props => (
      <li key={props.label}>
        <IconLink
          className={'block transition-default hover:-translate-y-0.5 h-[30px] w-[30px]'}
          target="_blank"
          {...props}
        />
      </li>
    ))}
  </ul>
);
