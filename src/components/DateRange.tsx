import { FC } from "react";

export type DateRangeProps = {
  startDate: string;
  startDateLabel?: string;
  endDate?: string | null;
  endDateLabel?: string;
  omitEndDate?: boolean;
  options?: Intl.DateTimeFormatOptions;
};

const defaultOptions: Intl.DateTimeFormatOptions = { year: "numeric" };

export const DateRange: FC<DateRangeProps> = ({
  startDate,
  startDateLabel = "Start date",
  endDate,
  endDateLabel = "End date",
  omitEndDate,
  options = defaultOptions,
}) => {
  const start = new Date(startDate).toLocaleString("default", options);
  const end = endDate
    ? new Date(endDate).toLocaleString("default", options)
    : omitEndDate
      ? ""
      : "Present";

  return (
    <dl className="text-neutral-500 text-sm flex flex-row">
      <dt className="sr-only">{startDateLabel}</dt>
      <dd>{start}</dd>
      {end && (
        <>
          <span aria-hidden="true" className="mx-1">
            &ndash;
          </span>
          <dt className="sr-only">{endDateLabel}</dt>
        </>
      )}
      {end && endDate ? (
        <dd>
          <time dateTime={endDate}>{end}</time>
        </dd>
      ) : (
        <dd>
          <span className="sr-only">Not applicable. Ongoing until</span>
          Present
        </dd>
      )}
    </dl>
  );
};
