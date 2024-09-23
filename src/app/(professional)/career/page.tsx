import { FC } from "react";
import { BubbleList } from "@/components";
import {
  TSchoolEntry,
  TWorkEntry,
  educationEntries,
  experienceEntries,
} from "../content";
import Markdown from "react-markdown";

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
  <>
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
      <dd className="text-sm mb-2">
        <Markdown>{description}</Markdown>
      </dd>
      <dt className="sr-only">Technologies used</dt>
      <dd>
        <BubbleList items={techUsed} />
      </dd>
    </dl>
  </>
);

const SchoolEntry: FC<TSchoolEntry> = ({
  schoolName,
  credential,
  description,
}) => (
  <div className="max-w-[70ch] mx-auto">
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
        <dd className="text-sm">{description}</dd>
      </dl>
    </dd>
  </div>
);

export default function Experience() {
  return (
    <main>
      <article>
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
            {experienceEntries.map((props) => (
              <li
                key={`${props.role}${props.org}`}
                className="max-w-[70ch] mx-auto"
              >
                <WorkEntry {...props} />
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}
