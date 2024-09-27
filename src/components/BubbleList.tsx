const className = 'rounded-full inline-block bg-gray-400/20 text-xs py-0.5 px-2 xs:py-1 xs:px-3 mr-1.5 mt-2 font-medium leading-4';

export const BubbleList = ({items = []}: {items?: string[]}) => {
  if (!items.length) return null;

  return (
    <ul className="mt-2 flex flex-wrap">
      {items.map(keyword => (
        <li key={keyword} className={className}>
          {keyword}
        </li>
      ))}
    </ul>
  );
};
