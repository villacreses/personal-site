import { CosmicEnt, TSchoolCredential } from "@/lib/cosmic";
import { FC } from "react";
import { Markdown } from ".";

const SchoolEntry: FC<CosmicEnt<TSchoolCredential>> = ({
  title,
  metadata: { credential, school_name, description, graduation_date },
}) => {
  const gradDate = new Date(graduation_date!);
  const alreadyGraduated = new Date().getFullYear() > gradDate.getFullYear();

  return (
    <div>
      <dt className="text-lg font-bold tracking-wider">{credential}</dt>
      <dd className="ml-0.5">
        <dl>
          <div className="flex flex-row mb-2 font-light tracking-wide text-neutral-500 dark:text-neutral-400">
            <dt className="sr-only">School</dt>
            <dd className={alreadyGraduated ? "after-comma" : ""}>
              {school_name}
            </dd>
            {alreadyGraduated && (
              <>
                <dt className="sr-only">Graduation date</dt>
                <dd>
                  <time dateTime={graduation_date}>
                    {gradDate.toLocaleString("default", { year: "numeric" })}
                  </time>
                </dd>
              </>
            )}
          </div>
          <dt className="sr-only">Description</dt>
          <dd className="text-sm prose">
            <Markdown>{description}</Markdown>
          </dd>
        </dl>
      </dd>
    </div>
  );
};

export const SchoolEntries: FC<{ entries: CosmicEnt<TSchoolCredential>[] }> = ({
  entries,
}) => (
  <dl className="flex flex-col gap-12">
    {entries.map((props) => (
      <SchoolEntry key={props.title} {...props} />
    ))}
  </dl>
);
