import { cn } from 'utils';

type ListType = {
  className?: string;
  children: React.ReactNode;
};

const ListContainer = ({ className, children }: ListType) => (
  <ul className={cn(`flex flex-wrap md:justify-end list-none p-0`, className)}>{children}</ul>
);

const ListItem = ({ className, children }: ListType) => {
  return (
    <li
      className={cn(
        `p-2 md:p-4 m-2 rounded-md font-bold text-white bg-rnny-primary-tint`,
        className,
      )}
    >
      {children}
    </li>
  );
};

export const List = {
  Container: ListContainer,
  Item: ListItem,
};
