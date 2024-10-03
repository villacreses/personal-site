import { FC } from "react";

export type TSchoolEntry = {
  schoolName: string;
  credential: string;
  graduationDate: string;
  startDate?: string;
  location: string;
  description: string;
};

const SchoolEntry: FC<TSchoolEntry> = ({
  schoolName,
  credential,
  description,
}) => (
  <>
    <dt className="text-lg font-bold tracking-wider">{credential}</dt>
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

export const SchoolEntries: FC<{ entries: TSchoolEntry[] }> = ({ entries }) => (
  <dl>
    {entries.map((props) => (
      <SchoolEntry key={props.credential} {...props} />
    ))}
  </dl>
);
