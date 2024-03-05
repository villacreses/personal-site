import {InlineLink} from '@/components';
import { FC, PropsWithChildren } from 'react';

const Section: FC<PropsWithChildren<{}>> = ({children}) => (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">{children}</section>
);

const SectionHeader: FC<PropsWithChildren<{}>> = ({children}) => (
  <section className="text-sm font-bold uppercase tracking-widest">{children}</section>
);

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-center lg:py-24">
        <h1 className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest">Hi, my name is </span>
          <strong className="text-4xl font-bold tracking-tight sm:text-5xl">Mario Villacreses</strong>
        </h1>
        <p className="mt-4 max-w-md leading-normal">I&apos;m a software engineer with 6 years of experience.</p>
        <p>
          <InlineLink href="#">My latest resume</InlineLink>
        </p>
      </header>
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <Section>
          <SectionHeader>About me</SectionHeader>
          <p>Filler.</p>
        </Section>
        <Section>
          <SectionHeader>Experience</SectionHeader>
          <p>Filler.</p>
        </Section>
        <Section>
          <SectionHeader>Projects</SectionHeader>
          <p>Filler.</p>
        </Section>
      </main>
    </div>
  );
}
