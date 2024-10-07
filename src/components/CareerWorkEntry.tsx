import { FC } from "react";
import { BubbleList, DateRange, Markdown } from ".";
import { TWorkEntry } from "@/lib/cosmic";

const WorkEntry: FC<TWorkEntry> = ({
  company,
  job_title,
  description,
  tech_used,
  start_date,
  end_date,
}) => (
  <dl>
    <dt className="sr-only">Dates worked</dt>
    <dd>
      <DateRange startDate={start_date} endDate={end_date} />
    </dd>
    <div className="flex flex-col xxs:flex-row text-lg xxs:text-xl mb-2">
      <dt className="sr-only">Job title</dt>
      <dd className="font-bold tracking-wider">{job_title}</dd>
      <span aria-hidden="true" className="mx-1.5 hidden xxs:inline-block">
        &#x2022;
      </span>
      <dt className="sr-only">Company</dt>
      <dd className="font-extralight">{company}</dd>
    </div>
    <dt className="sr-only">Accomplishments at role</dt>
    <dd className="text-sm mb-2 prose">
      <Markdown>{description}</Markdown>
    </dd>
    <dt className="sr-only">Technologies used</dt>
    <dd>
      <BubbleList items={tech_used?.map(({ title }) => title)} />
    </dd>
  </dl>
);

export const WorkEntries: FC<{ entries: TWorkEntry[] }> = ({ entries }) => (
  <ol className="flex flex-col gap-12">
    {entries.map((props) => (
      <li key={props.company + props.start_date}>
        <WorkEntry {...props} />
      </li>
    ))}
  </ol>
);
