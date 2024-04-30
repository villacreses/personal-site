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
      <main>
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
          <p className="text-lg mx-auto max-w-xl mt-10 font-semibold">
            <InlineLink href="/docs/resume.pdf" target="_blank">
              Download latest resume
            </InlineLink>
          </p>
        </Section>
        <Section>
          <h2 className="section-header">
            Professional Experience
          </h2>
          <ExperienceList items={experienceEntries} />
          <p className="text-lg mx-auto max-w-xl mt-10 font-semibold">
            <InlineLink href="/career-history">
              View full Career History
            </InlineLink>
          </p>
        </Section>
        <Section>
          <h2 className="section-header">
            Contact
          </h2>
          <p className="mb-3 max-w-xl mx-auto text-lg">
            I&apos;m currently open to full-time and contract roles for fullstack or frontend
            engineering. Whether you have a question, a job offer, or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
          <p className="mt-8 mb-3 max-w-xl mx-auto text-lg text-center">
            <a
              href="mailto:MarioVillacreses@outlook.com"
              className="rounded px-4 py-2 border-2 border-green-700"
            >
              Send me an Email
            </a>
          </p>
        </Section>
      </main>
    </>
  );
}
