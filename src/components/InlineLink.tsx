import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';


const InlineLink: FC<
  PropsWithChildren<Omit<LinkProps, 'className'>>
> = props => (
  <Link {...props}/>
);

export default InlineLink;
