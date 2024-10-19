import { CareerService } from "@/lib/cosmic";
import { Icon } from ".";

export async function Credentials() {
  const entries = await CareerService.getHomepageCredentials();

  return (
    <ul className={`text-sm text-gray-600 dark:text-gray-300 mb-6`}>
      {entries.map(({ type, value }) => (
        <li
          key={value}
          className="mb-2 grid grid-cols-2 grid-cols-[1em_1fr] xxs:items-center gap-x-4 text-left"
        >
          <Icon
            iconId={type}
            height={"1em"}
            className="justify-self-center mt-[0.241rem] xxs:mt-0"
          />
          <span className="justify-self-start">{value}</span>
        </li>
      ))}
    </ul>
  );
}
