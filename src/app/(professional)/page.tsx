import {
  ExperienceList,
  InlineLink,
  ProjectList,
  SocialLinks,
  StatsList,
} from '@/components';
import { FC, PropsWithChildren } from 'react';
import { experienceEntries, projectEntries, socialLinkItems, statsListContent } from './content';
import { yearsSince } from '@/utils';
import Link from 'next/link';

const Section: FC<PropsWithChildren<{}>> = ({ children }) => (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    {children}
  </section>
);

const SectionHeader: FC<PropsWithChildren<{}>> = ({ children }) => (
  <h2 className="text-sm font-bold uppercase tracking-widest mb-6">
    {children}
  </h2>
);

const yearsExp = Math.ceil(yearsSince(experienceEntries[experienceEntries.length -1].startDate));

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 pt-20 pb-12 sm:pt-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-around lg:py-24">
        <hgroup>
          <h1 className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest">
              Hi, my name is&nbsp;
            </span>
            <strong className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mario Villacreses
            </strong>
          </h1>
          <StatsList {...statsListContent} />
          <p className="sm:text-lg mt-4 max-w-md leading-normal">
            I&apos;m a software engineer with {yearsExp} years of experience. 
          </p>
        </hgroup>
        <div>
          <SocialLinks items={socialLinkItems} />
          {/* <p className="text-xs mt-10 sm:mt-4  tracking-tight text-opacity-5 text-white cursor-default">
            <small>
              Still using Netscape? Check out&nbsp;
              <Link href="/90s" className="underline cursor-default">
                my optimized site
              </Link>
              .
            </small>
          </p> */}
        </div>
      </header>
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <Section>
          <SectionHeader>About me</SectionHeader>
          <p className="mb-3 max-w-lg">
            Over the course of my career, I&apos;ve had the privilege of working
            for companies of all sizes and across multiple industries, including
            education, healthcare, social media, and e-commerce.
          </p>
          <p className="mb-3 max-w-lg">
            When I&apos;m not at the computer, I&apos;m usually reading,
            brushing up on my math skills, or biking around New York City.
          </p>
        </Section>
        <Section>
          <SectionHeader>Experience</SectionHeader>
          <ExperienceList items={experienceEntries} />
          <p className="sm:text-sm mt-12 sm:mt-3 ml-1">
            <InlineLink href="/docs/resume.pdf">View my latest resume</InlineLink>
          </p>
        </Section>
        <Section>
          <SectionHeader>Projects</SectionHeader>
          <ProjectList items={projectEntries} />
        </Section>
      </main>
    </div>
  );
}
