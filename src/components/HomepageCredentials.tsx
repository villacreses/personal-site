import { Icon, IconID } from ".";

type TCredential = {
  iconId: IconID;
  text: string;
  size?: string;
};

const credentials: TCredential[] = [
  {
    iconId: "suitcase",
    text: "Senior Software Engineer @ Godaddy.com",
    size: ".8rem",
  },
  {
    iconId: "school",
    text: "B.A. Applied Math @ CUNY Queens College",
    size: ".95rem",
  },
  { iconId: "location", text: "New York City", size: ".875rem" },
];

export const Credentials = () => (
  <ul className={`text-sm text-gray-600 dark:text-gray-300 mb-6`}>
    {credentials.map(({ iconId, text }) => (
      <li
        key={text}
        className="mb-2 grid grid-cols-2 grid-cols-[1em_1fr] xxs:items-center gap-x-4 text-left"
      >
        <Icon
          iconId={iconId}
          height={"1em"}
          className="justify-self-center mt-[0.241rem] xxs:mt-0"
        />
        <span className="justify-self-start">{text}</span>
      </li>
    ))}
  </ul>
);
