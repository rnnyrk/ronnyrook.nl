import type * as i from 'types';

import { cn } from 'utils';
import { Skeleton } from 'common/layout/Skeleton';

export const ResourcesLoader = ({ variant }: i.VariantProps) => {
  const skeletonClasses = cn('grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md', {
    'bg-rnny-light dark:bg-rnny-dark': !variant,
    'bg-white dark:bg-rnny-dark-tint': variant === 'off',
  });

  return (
    <div className="w-full max-w-8xl mx-auto flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8 px-4 md:px-8">
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
      <Skeleton className={skeletonClasses} />
    </div>
  );
};
