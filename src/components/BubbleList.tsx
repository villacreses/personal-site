export const BubbleList = ({items = []}: {items?: string[]}) => {
  if (!items.length) return null;

  return (
    <ul className="mt-2 flex flex-wrap">
      {items.map(keyword => (
        <li
          key={keyword}
          className="rounded-full inline-block bg-gray-400/20 text-xs py-1 px-3 mr-1.5 mt-2 font-medium leading-4"
        >
          {keyword}
        </li>
      ))}
    </ul>
  );
};
