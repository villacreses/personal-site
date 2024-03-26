import {
  ExperienceEntryProps,
  IconLinkProps,
  StatsListProps,
} from '@/components';

export const statsListContent: StatsListProps = {
  textClasses: 'text-xs sm:text-sm leading-5 tracking-wider',
  listContainerProps: {
    className: 'list-none ml-1 mt-2 p-0 flex flex-col gap-y-1',
  },
  items: [
    {
      iconId: 'suitcase',
      text: 'Senior Software Engineer @ Godaddy.com',
    },
    {
      iconId: 'school',
      text: 'B.A. Applied Math @ CUNY Queens College',
    },
    { iconId: 'location', text: 'New York City' },
  ],
};

export const socialLinkItems: IconLinkProps[] = [
  {
    slug: 'envelope',
    label: 'MarioVillacreses@outlook.com',
    href: 'mailto:MarioVillacreses@outlook.com',
  },
  {
    slug: 'github',
    label: 'My GitHub profile',
    href: 'https://github.com/villacreses',
  },
  {
    slug: 'linkedin',
    label: 'My LinkedIn profile',
    href: 'https://www.linkedin.com/in/villacreses',
  },
  {
    slug: 'codepen',
    label: 'CodePen',
    href: 'https://codepen.io/villacreses',
  },
];

export const experienceEntries: ExperienceEntryProps[] = [
  {
    org: 'GoDaddy.com',
    role: 'Senior Software Engineer',
    startDate: '2022-11-14T09:00-0500',
    // endDate: '2024-01-30T16:00-0500',
    location: 'New York City (remote)',
    description:
      'Spearheaded overhaul of frontend and devops architectures for legacy ' +
      'e-commerce platform.',
    techUsed: [
      'Javascript',
      'Ember.js',
      'Typescript',
      'MySQL',
      'AWS ECS',
      'Github Actions',
      'Docker',
      'Express.js',
      'Next.js',
      'React',
      'Tailwind',
    ],
  },
  {
    org: 'Meta (Facebook)',
    role: 'Software Engineer',
    startDate: '2021-08-26T09:00-0800',
    endDate: '2022-08-26T17:00-0800',
    location: 'Menlo Park, CA (hybrid)',
    description:
      'Contributed to the new universal metrics platform designed to ' +
      'standardize metrics lookup and integration for the entire company.',

    techUsed: ['Javascript', 'GraphQL', 'Python', 'PHP/Hack'],
  },
  {
    org: 'doc.ai',
    role: 'Software Engineer',
    startDate: '2021-02-21T09:00-0800',
    endDate: '2021-12-18T20:00-0500',
    location: 'Boston, MA (remote)',
    description: 'Headed development of UI library for new flagship app.',
    techUsed: [
      'React Native',
      'Typescript',
      'Redux',
      'hapi.js',
      'Express.js',
      'styled components',
    ],
  },
  {
    org: 'Knovva Academy',
    role: 'Full Stack Developer',
    startDate: '2018-11-05T09:00-0500',
    endDate: '2020-01-07T17:00-0500',
    location: 'Boston, MA',
    description: '',
    techUsed: [
      'Javascript',
      'React',
      'Redux',
      'MongoDB',
      'GraphQL',
      'Express.js',
      'Sass',
      'AWS S3',
    ],
  },
];