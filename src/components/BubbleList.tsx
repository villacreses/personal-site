const className =
  "rounded-full inline-block bg-blue-800/20 dark:bg-gray-400/20 text-xs py-0.5 px-2 mr-1.5 font-medium leading-4";

export const BubbleList = ({ items = [] }: { items?: string[] }) => {
  if (!items.length) return null;

  return (
    <ul className="flex flex-wrap">
      {items.map((keyword) => (
        <li key={keyword} className={className}>
          {keyword}
        </li>
      ))}
    </ul>
  );
};
