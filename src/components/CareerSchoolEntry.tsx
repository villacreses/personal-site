import { CosmicEnt, TSchoolCredential } from "@/lib/cosmic";
import { FC } from "react";

const SchoolEntry: FC<CosmicEnt<TSchoolCredential>> = ({
  title,
  metadata: { school_name, description, graduation_date },
}) => {
  const graduated = new Date(graduation_date).toLocaleString("default", {
    year: "numeric",
  });
  return (
    <>
      <dt className="text-lg font-bold tracking-wider">{title}</dt>
      <dd className="ml-0.5">
        <dl>
          <div className="flex flex-row mb-2 font-light tracking-wide text-neutral-500 dark:text-neutral-400">
            <dt className="sr-only">School</dt>
            <dd className="after-comma">{school_name}</dd>
            <dt className="sr-only">Graduation date</dt>
            <dd>
              <time dateTime={graduation_date}>{graduated}</time>
            </dd>
          </div>
          <dt className="sr-only">Description</dt>
          <dd className="text-sm prose">{description}</dd>
        </dl>
      </dd>
    </>
  );
};

export const SchoolEntries: FC<{ entries: CosmicEnt<TSchoolCredential>[] }> = ({
  entries,
}) => (
  <dl>
    {entries.map((props) => (
      <SchoolEntry key={props.title} {...props} />
    ))}
  </dl>
);
