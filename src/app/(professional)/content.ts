import {
  ExperienceEntryProps,
  IconLinkProps,
  ProjectEntryProps,
  StatsListProps,
} from '@/components';

export const statsListContent: StatsListProps = {
  items: [
    {
      iconId: 'suitcase',
      text: 'Senior Software Engineer @ Godaddy.com',
      size: '.8rem'
    },
    {
      iconId: 'school',
      text: 'B.A. Applied Math @ CUNY Queens College',
      size: '.95rem'
    },
    { iconId: 'location', text: 'New York City', size: '.875rem' },
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
    org: 'GoDaddy',
    role: 'Senior Software Engineer',
    startDate: '2022-11-14T09:00-0500',
    endDate: '2024-01-30T16:00-0500',
    location: 'New York City (remote)',
    description: [
      'Spearheaded overhaul of frontend and devops architectures for legacy e-commerce platform.',
      'Reengineered the pricing fee architecture to give customers the freedom to set their own',
      'custom transaction costs for their credit card terminals.'
    ].join(' '),
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
    description: [
      'Contributed to the new universal metrics platform designed to standardize metrics lookup',
      'and integration for the entire company. Enhanced backend reliability of Metric Authoring',
      'API, resulting in a 20% reduction in latency issues and improved overall performance.',
    ].join(' '),
    techUsed: ['Javascript', 'GraphQL', 'Python', 'PHP/Hack'],
  },
  {
    org: 'doc.ai',
    role: 'Software Engineer',
    startDate: '2021-02-21T09:00-0800',
    endDate: '2021-12-18T20:00-0500',
    location: 'Boston, MA (remote)',
    description: [
      'Headed development of UI library for company\'s new flagship app.',
      'Created real-time geographic visualization of COVID-19 outbreak,',
      'increasing brand awareness by over 100%.'
    ].join(' '),
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
    description: [
      'Collaborated with cloud architect to build administrative tools to streamline customer',
      'management, recruiting, and real-time analytics.',
      'Refactored existing codebase to the latest standards and optimized for scalability.'
    ].join(' '),
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

type CareerContent = {
  heading: string;
  items: ExperienceEntryProps[];
}[];

export const careerContent: CareerContent = [
  {
    heading: 'Education',
    items: [
      {
        org: 'CUNY Queens College',
        role: 'B.A. Applied Mathematics',
        startDate: '',
        location: 'Flushing, NY',
        description: [
          'Bachelor of Arts in Applied Mathematics with a concentration in computer science',
        ].join(' ')
      },
      {
        org: 'Fullstack Academy',
        role: 'Coding Bootcamp - Web Development',
        startDate: '',
        location: 'New York, NY',
        description: [
          'Full time immersive program that teaches full-stack web development using the NERD development stack.'
        ].join(' '),
      }
    ],
  },
  {
    heading: 'Professional Experience',
    items: experienceEntries,
  },
  {
    heading: 'Hackathons',
    items: [
      {
        org: '',
        role: 'NY Sextech Hackathon 2018 - 1st Place Winner',
        startDate: '2018-08-01',
        location: 'Brooklyn, NY',
        description: [
          '1st Place Winner at NY Sextech Hackathon, featured in Vice, Forbes, and Men’s Health.',
          'Project was considered for official curriculum integration within select NYC high schools.'
        ].join(' ') 
      },
    ],
  },
];

export const projectEntries: ProjectEntryProps[] = [
  {
    title: 'Chronos',
    description: [
      'My capstone team project while attending Fullstack Academy. Chronos is a data visualization',
      'interface that allows users to create and  share high quality interactive graphics.'
    ].join(' '),
    techUsed: ['React', 'Redux', 'D3'],
    links: [
      {
        iconId: 'github',
        text: 'Github',
        href: 'https://github.com/Capstone-Chronos/chronos',
      },
      {
        iconId: 'link',
        text: 'Demo',
        href: 'https://chronos-d08ff.firebaseapp.com/',
      },
    ]
  },
  {
    title: '8-Bit Bargains',
    description: [
      'My first collaborative project while attending Fullstack Academy. 8-bit Bargains is an',
      'e-commerce platform for classic video game cartridges.'
    ].join(' '),
    techUsed: ['React', 'Redux', 'Express.js', 'Stripe'],
    links: [
      {
        iconId: 'github',
        text: 'Github',
        href: 'https://github.com/8BitBargains/8bitBargains'
      }
    ]
  }
];
