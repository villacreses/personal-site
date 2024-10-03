import { FC } from "react";
import Markdown from "react-markdown";
import { BubbleList, DateRange } from ".";

export type THackathonEntry = {
  event: string;
  award: string;
  location?: string;
  description?: string;
  techUsed?: string[];
  date: string;
};

const HackathonEntry: FC<THackathonEntry> = ({
  event,
  award,
  date,
  description,
  techUsed,
}) => (
  <dl>
    <dt className="sr-only">Event Date</dt>
    <dd>
      <DateRange startDate={date} omitEndDate />
    </dd>
    <div className="flex flex-col xs:flex-row text-lg xs:text-xl mb-2">
      <dt className="sr-only">Job title</dt>
      <dd className="font-bold tracking-wider">{event}</dd>
      <span aria-hidden="true" className="mx-1.5 hidden xs:inline-block">
        &#x2022;
      </span>
      <dt className="sr-only">Award</dt>
      <dd className="font-extralight">{award}</dd>
    </div>
    <dt className="sr-only">Description of my experience at event</dt>
    <dd className="text-sm mb-2 prose">
      <Markdown>{description}</Markdown>
    </dd>
    <dt className="sr-only">Technologies used</dt>
    <dd>
      <BubbleList items={techUsed} />
    </dd>
  </dl>
);

export const HackathonEntries: FC<{ entries: THackathonEntry[] }> = ({
  entries,
}) => (
  <ol className="flex flex-col gap-12">
    {entries.map((props) => (
      <li key={props.event + props.date}>
        <HackathonEntry {...props} />
      </li>
    ))}
  </ol>
);
