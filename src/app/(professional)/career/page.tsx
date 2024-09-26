import { FC } from "react";
import Markdown from "react-markdown";
import { BubbleList } from "@/components";
import {
  TSchoolEntry,
  TWorkEntry,
  educationEntries,
  workEntries,
  headerContent,
} from "./content";

const DateRange: FC<Pick<TWorkEntry, "startDate" | "endDate">> = ({
  startDate,
  endDate,
}) => {
  const start = new Date(startDate).getFullYear();
  const end = endDate ? new Date(endDate).getFullYear() : "Present";

  return <p className="text-neutral-500 text-sm">{`${start} - ${end}`}</p>;
};

const WorkEntry: FC<TWorkEntry> = ({
  role,
  description,
  techUsed,
  org,
  startDate,
  endDate,
}) => (
  <dl>
    <dt className="sr-only">Dates worked</dt>
    <dd>
      <DateRange startDate={startDate} endDate={endDate} />
    </dd>
    <div className="flex flex-col xs:flex-row text-lg xs:text-xl mb-2">
      <dt className="sr-only">Job title</dt>
      <dd className="font-bold tracking-wider">{role}</dd>
      <span aria-hidden="true" className="mx-1.5 hidden xs:inline-block">
        &#x2022;
      </span>
      <dt className="sr-only">Company</dt>
      <dd className="font-extralight">{org}</dd>
    </div>
    <dt className="sr-only">Accomplishments at role</dt>
    <dd className="text-sm mb-2 prose">
      <Markdown>{description}</Markdown>
    </dd>
    <dt className="sr-only">Technologies used</dt>
    <dd>
      <BubbleList items={techUsed} />
    </dd>
  </dl>
);

const SchoolEntry: FC<TSchoolEntry> = ({
  schoolName,
  credential,
  description,
}) => (
  <>
    <dt className="text-xl font-bold tracking-wider">{credential}</dt>
    <dd className="ml-0.5">
      <dl>
        <div className="flex flex-row mb-2 font-light tracking-wide text-neutral-400">
          <dt className="sr-only">School</dt>
          <dd className="after-comma">{schoolName}</dd>
          <dt className="sr-only">Graduated</dt>
          <dd>2016</dd>
        </div>
        <dt className="sr-only">Description</dt>
        <dd className="text-sm prose">{description}</dd>
      </dl>
    </dd>
  </>
);

const bottomBorderStyles =
  "after:content-[' '] after:block after:border-b after:opacity-25 after:border-neutral-700 after:-mx-3 after:pb-8";

export default function CareerHistory() {
  return (
    <main className="max-w-[70ch] mx-auto">
      <header className={`mb-20 ${bottomBorderStyles}`}>
        <h1 className="text-4xl font-extrabold mb-5 text-center">{`Mario's Career History`}</h1>
        <Markdown>{headerContent}</Markdown>
      </header>
      <section className="page-section">
        <h2 className="section-header">Education</h2>
        <dl>
          {educationEntries.map((props) => (
            <SchoolEntry key={props.credential} {...props} />
          ))}
        </dl>
      </section>
      <section className="page-section">
        <h2 className="section-header">Professional Experience</h2>
        <ol className="flex flex-col gap-12">
          {workEntries.map((props) => (
            <li key={`${props.role}${props.org}`}>
              <WorkEntry {...props} />
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
