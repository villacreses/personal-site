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

const yearsExp = Math.ceil(yearsSince(experienceEntries[experienceEntries.length -1].startDate));

export default function Home() {
  return (
    <>
      <header className="h-screen flex flex-col justify-center px-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">Mario Villacreses</h1>
        <p className="text-2xl">Senior Software Engineer</p>
        <p></p>
        <SocialLinks items={socialLinkItems} />
      </header>
      <main className="px-6">
        <Section>
          <h2 className="section-header">About Me</h2>
          <p className="mb-3 max-w-xl mx-auto text-lg">
            I have {yearsExp} years of experience working as a full stack software
            engineer, specializing mainly on frontend engineering.
          </p>
          <p className="mb-3 max-w-xl mx-auto text-lg">
            Over the course of my career, I&apos;ve had the privilege of working
            for companies of all sizes and across multiple industries, including
            education, healthcare, social media, and e-commerce.
          </p>
          <p className="mb-3 max-w-xl mx-auto text-lg">
            Please send all inquiries to {' '}
            <Link href="mailto:MarioVillacreses@outlook.com">
              MarioVillacreses@outlook.com
            </Link>.
          </p>
        </Section>
        <Section>
          <h2 className="section-header">
            Professional Experience
          </h2>
          <ExperienceList items={experienceEntries} />
        </Section>
      </main>
    </>
  );
}
