import Link from 'next/link';
import { FC, PropsWithChildren, ComponentProps } from 'react';

const IconArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block w-4 pt-1 transform ease-in-out duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

type InlineLinkProps = Omit<ComponentProps<typeof Link>, 'className'>

export const InlineLink: FC<PropsWithChildren<InlineLinkProps>> = ({
  children,
  ...props
}) => (
  <Link className={'flex flex-row group'} {...props}>
    {children + ' '}
    <IconArrowUpRight />
  </Link>
);
