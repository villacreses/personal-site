import { FC } from "react";

export type DateRangeProps = {
  startDate: string;
  endDate?: string | null;
  omitEndDate?: boolean;
  options?: Intl.DateTimeFormatOptions;
};

const defaultOptions: Intl.DateTimeFormatOptions = { year: "numeric" };

export const DateRange: FC<DateRangeProps> = ({
  startDate,
  endDate,
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
    <p className="text-neutral-500 text-sm">
      {[start, end].filter((exists) => exists).join(" - ")}
    </p>
  );
};
