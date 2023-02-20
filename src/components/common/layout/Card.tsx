export const Card = ({ children, tags, title }: CardProps) => {
  return (
    <div className="min-w-[425px] flex flex-col justify-items-stretch p-8 mb-4 mr-4 bg-slate-700 rounded-lg shadow-lg">
      <div>
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-sm bg-slate-500 rounded-full px-2 py-1 mr-2 whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="grow-[2] text-xl my-4">{title}</h1>
      {children}
    </div>
  );
};

type CardProps = {
  children?: React.ReactNode;
  tags: string[];
  title: string;
};
