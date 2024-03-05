import {
  Icon,
  IconID,
  IconLink,
  IconLinkProps,
  InlineLink,
} from '@/components';
import { FC, PropsWithChildren } from 'react';

const Section: FC<PropsWithChildren<{}>> = ({ children }) => (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    {children}
  </section>
);

const SectionHeader: FC<PropsWithChildren<{}>> = ({ children }) => (
  <section className="text-sm font-bold uppercase tracking-widest mb-3">
    {children}
  </section>
);

type StatsListProps = {
  items: {
    icon: IconID;
    text: string;
    slug: string;
    width?: string;
  }[];
};

const StatsList: FC<StatsListProps> = ({ items }) => (
  <ul className="list-none ml-1 mt-2 p-0 text-xs sm:text-sm flex flex-col gap-y-1">
    {items.map(({ icon, text, slug, width }) => (
      <li
        key={slug}
        className="grid align-center gap-x-3"
        style={{ gridTemplateColumns: '20px 1fr' }}
      >
        <Icon
          iconId={icon}
          style={{ width }}
          containerStyles={{ height: '.875rem', marginTop: '.1875rem' }}
        />
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

const LinksList: FC<{ items: IconLinkProps[] }> = ({ items }) => (
  <ul className="list-none ml-1 mt-16 p-0 flex gap-x-2">
    {items.map((props) => (
      <li
        key={props.slug}
        className="grid align-center gap-x-3"
        style={{ gridTemplateColumns: '20px 1fr' }}
      >
        <IconLink
          iconProps={{
            containerStyles: { height: '.875rem', marginTop: '.1875rem' },
          }}
          {...props}
        />
      </li>
    ))}
  </ul>
);

type ExperienceEntryProps = {
  org: string;
  role: string;
  startDate: string;
  endDate?: string;
}

const ExperienceList: FC<{items: ExperienceEntryProps[]}> = ({items}) => (
  <ul>
    {items.map(({org, role}) => (
      <li key={org}>
        <div>
          <hgroup>
            <h3>{org}</h3>
            <p>{role}</p>
          </hgroup>
        </div>
      </li>
    ))}
  </ul>
);

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-around lg:py-24">
        <div>
          <h1 className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest">
              Hi, my name is&nbsp;
            </span>
            <strong className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mario Villacreses
            </strong>
          </h1>
          <StatsList
            items={[
              {
                icon: 'suitcase',
                slug: 'job',
                text: 'Senior Software Engineer @ Godaddy.com',
              },
              {
                icon: 'school',
                slug: 'school',
                text: 'B.A. Applied Math @ CUNY Queens College',
              },
              { icon: 'location', slug: 'nyc', text: 'New York City' },
            ]}
          />
          <p className="sm:text-lg mt-6 max-w-md leading-normal">
            I&apos;m a software engineer with 6 years of experience.
          </p>
          <p className="text-sm mt-3 ml-1">
            <InlineLink href="#">View my latest resume</InlineLink>
          </p>
        </div>
        <div>
          <LinksList
            items={[
              { slug: 'envelope', label: 'MarioVillacreses@outlook.com', href: '#' },
              { slug: 'github', label: 'My GitHub profile', href: '#' },
              { slug: 'linkedin', label: 'My LinkedIn profile', href: '#' },
              { slug: 'codepen', label: 'CodePen', href: '#' },
            ]}
          />
          <p className="text-xs pt-2 tracking-tight text-opacity-5 text-white cursor-default">
            <small>
              Still using Netscape? Check out&nbsp;
              <a href="#" className="underline cursor-default">
                my optimized site
              </a>
              .
            </small>
          </p>
        </div>
      </header>
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <Section>
          <SectionHeader>About me</SectionHeader>
          <p className="mb-3">
            Over the course of my career, I&apos;ve had the privilege of working
            for companies of all sizes and across multiple industries, including
            education, healthcare, social media, and e-commerce.
          </p>
          <p>
            When I&apos;m not at the computer, I&apos;m usually reading,
            brushing up on my math skills, or biking around New York City.
          </p>
        </Section>
        <Section>
          <SectionHeader>Experience</SectionHeader>
          <ExperienceList 
            items={[
              {
                org: 'GoDaddy.com',
                role: 'Senior Software Engineer',
                startDate: '',
                endDate: '',
              },
              {
                org: 'Meta (Facebook)',
                role: 'Software Engineer',
                startDate: '',
                endDate: '',
              },
            ]}
          />
          <p className="mt-8 text-sm">
            <InlineLink href="#">View full career timeline</InlineLink>
          </p>
        </Section>
        <Section>
          <SectionHeader>Projects</SectionHeader>
          <p>Filler.</p>
        </Section>
      </main>
    </div>
  );
}
