const years = 1000 * 60 * 60 * 24 * 365;

export const yearsSince = (datestring: string) =>
  (Date.now() - new Date(datestring).getTime()) / years;

export const classNames = (classArr: Array<string | false | undefined>) =>
  classArr.filter((include) => include).join(" ");

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