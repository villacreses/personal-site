const years = 1000 * 60 * 60 * 24 * 365;

export const yearsSince = (datestring: string) =>
  (Date.now() - new Date(datestring).getTime()) / years;

export const classNames = (classArr: Array<string | false | undefined>) =>
  classArr.filter((include) => include).join(" ");

