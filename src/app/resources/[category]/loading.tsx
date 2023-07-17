import type * as i from 'types';

import { cn } from 'utils';
import { Container } from 'common/layout/Container';
import { Skeleton } from 'common/layout/Skeleton';

export default function Loading({ variant }: i.VariantProps) {
  const variantHeadingClasses = {
    'bg-rnny-light-tint dark:bg-rnny-dark-tint': !variant,
    'bg-white dark:bg-rnny-dark-tint': variant === 'off',
  };

  const variantDefaultClasses = {
    'bg-rnny-light dark:bg-rnny-dark': !variant,
    'bg-white dark:bg-rnny-dark-tint': variant === 'off',
  };

  const skeletonCardClasses = cn(
    'grid-col-1 h-[224px] mb-4 md:mb-0 rounded-xl shadow-md',
    variantDefaultClasses,
  );

  return (
    <>
      <Container className="px-8 w-full min-w-full">
        <div className="flex flex-col">
          <Container className="w-full px-8">
            <Skeleton className={cn('h-6 w-[200px] mb-2', variantHeadingClasses)} />
            <Skeleton className={cn('h-12 w-[200px] mb-8', variantHeadingClasses)} />
          </Container>
        </div>
      </Container>
      <section className="py-40 bg-white dark:bg-rnny-dark-tint">
        <div className="w-full max-w-8xl mx-auto flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8 px-4 md:px-8">
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
          <Skeleton className={skeletonCardClasses} />
        </div>
      </section>
    </>
  );
}
