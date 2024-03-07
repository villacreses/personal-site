import {
  ExperienceList,
  InlineLink,
  SocialLinks,
  StatsList,
} from '@/components';
import { FC, PropsWithChildren } from 'react';

const Section: FC<PropsWithChildren<{}>> = ({ children }) => (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    {children}
  </section>
);

const SectionHeader: FC<PropsWithChildren<{}>> = ({ children }) => (
  <h2 className="text-sm font-bold uppercase tracking-widest mb-3">
    {children}
  </h2>
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
            textClasses="text-xs sm:text-sm leading-5 tracking-wider"
            listContainerProps={{
              className: 'list-none ml-1 mt-2 p-0 flex flex-col gap-y-1'
            }}
            items={[
              {
                iconId: 'suitcase',
                text: 'Senior Software Engineer @ Godaddy.com',
              },
              {
                iconId: 'school',
                text: 'B.A. Applied Math @ CUNY Queens College',
              },
              { iconId: 'location', text: 'New York City' },
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
          <SocialLinks
            items={[
              {
                slug: 'envelope',
                label: 'MarioVillacreses@outlook.com',
                href: 'mailto:MarioVillacreses@outlook.com',
              },
              { slug: 'github', label: 'My GitHub profile', href: 'https://github.com/villacreses' },
              { slug: 'linkedin', label: 'My LinkedIn profile', href: 'https://www.linkedin.com/in/villacreses' },
              { slug: 'codepen', label: 'CodePen', href: 'https://codepen.io/villacreses' },
            ]}
          />
          <p className="text-xs pt-2 tracking-tight text-opacity-10 text-white cursor-default">
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
                startDate: '2022-11-14T09:00-0500',
                location: 'New York City (remote)'
              },
              {
                org: 'Meta (Facebook)',
                role: 'Software Engineer',
                startDate: '2021-08-26T09:00-0800',
                endDate: '2022-08-26T17:00-0800',
                location: 'Menlo Park, CA (hybrid)'
              },
              {
                org: 'doc.ai',
                role: 'Software Engineer',
                startDate: '2021-02-21T09:00-0800',
                endDate: '2021-12-18T20:00-0500',
                location: 'Boston, MA (remote)'
              }
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