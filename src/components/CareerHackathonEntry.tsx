import { FC } from "react";
import { BubbleList, Markdown } from ".";
import { TCompetitionAward } from "@/lib/cosmic";

const HackathonEntry: FC<TCompetitionAward> = ({
  event_date,
  event_name,
  award,
  description,
  tags,
}) => {
  const eventDate = new Date(event_date).toLocaleString("default", {
    year: "numeric",
  });

  return (
    <dl>
      <dt className="sr-only">Event Date</dt>
      <dd className="text-neutral-500 text-sm">
        <time dateTime={event_date}>{eventDate}</time>
      </dd>
      <div className="flex flex-col xs:flex-row text-lg xs:text-xl mb-2">
        <dt className="sr-only">Job title</dt>
        <dd className="font-bold tracking-wider">{event_name}</dd>
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
        <BubbleList items={tags.map(({ title }) => title)} />
      </dd>
    </dl>
  );
};

export const HackathonEntries: FC<{ entries: TCompetitionAward[] }> = ({
  entries,
}) => (
  <ol className="flex flex-col gap-12">
    {entries.map((props) => (
      <li key={props.event_name}>
        <HackathonEntry {...props} />
      </li>
    ))}
  </ol>
);
