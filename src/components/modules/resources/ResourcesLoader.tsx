import { Skeleton } from 'common/layout/Skeleton';

export const ResourcesLoader = () => {
  return (
    <div className="w-full max-w-8xl mx-auto flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8 px-4 md:px-8">
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
      <Skeleton className="grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md" />
    </div>
  );
};
