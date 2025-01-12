const years = 1000 * 60 * 60 * 24 * 365;

export const yearsSince = (datestring: string) =>
  (Date.now() - new Date(datestring).getTime()) / years;

export const classNames = (
  classArr: Array<string | null | false | undefined>,
) => classArr.filter((include) => include).join(" ");

export const KEY_CODES = {
  ARROW_LEFT: "ArrowLeft",
  ARROW_LEFT_IE11: "Left",
  ARROW_RIGHT: "ArrowRight",
  ARROW_RIGHT_IE11: "Right",
  ARROW_UP: "ArrowUp",
  ARROW_UP_IE11: "Up",
  ARROW_DOWN: "ArrowDown",
  ARROW_DOWN_IE11: "Down",
  ESCAPE: "Escape",
  ESCAPE_IE11: "Esc",
  TAB: "Tab",
  SPACE: " ",
  SPACE_IE11: "Spacebar",
  ENTER: "Enter",
};

export const getReadingTime = (content: string) => {
  const WORDS_PER_MINUTE = 200;
  const minutes = content.length
    ? Math.round(Number(content.match(/\w+/g)?.length) / WORDS_PER_MINUTE)
    : 0;
  return isNaN(minutes) ? "unknown" : minutes || "< 1";
};

export function formatBlogPostDate(datestring: string) {
  return new Date(datestring).toLocaleString("default", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
}
