import { FC } from "react";
import Markdown from "react-markdown";
import { BubbleList, DateRange, DateRangeProps } from ".";

export type TWorkEntry = {
  org: string;
  role: string;
  location?: string;
  description?: string;
  techUsed?: string[];
} & DateRangeProps;

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

export const WorkEntries: FC<{ entries: TWorkEntry[] }> = ({ entries }) => (
  <ol className="flex flex-col gap-12">
    {entries.map((props) => (
      <li key={`${props.role}${props.org}`}>
        <WorkEntry {...props} />
      </li>
    ))}
  </ol>
);
