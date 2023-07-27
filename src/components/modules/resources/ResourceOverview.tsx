'use client';

import type * as i from 'types';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import { useMasonaryGrid } from 'hooks';
import { useResourcesStore } from 'store/resources';
import { cn } from 'utils';

import { ResourcesGrid } from './ResourcesGrid';

export const ResourceOverview = ({ data, type, variant }: ResourceOverviewProps) => {
  const { resources, setResources } = useResourcesStore();
  useMasonaryGrid({ data: resources, type });

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!data) return;
    setResources({ [type]: data });
  }, [data]);

  return (
    <div
      ref={ref}
      className={cn('w-full max-w-8xl mx-auto px-4 md:px-8 flex flex-col', {
        'masonry-grid': type === 'tweets',
        'md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8': type !== 'tweets',
      })}
    >
      <ResourcesGrid
        data={(resources[type] as (i.Tweet | i.Article | i.Sandbox)[])?.slice(0, 9)}
        isInView={isInView}
        variant={variant}
      />
    </div>
  );
};

type ResourceOverviewProps = i.VariantProps & {
  data: (i.Tweet | i.Article | i.Sandbox)[];
  type: i.ResourcesKeys;
};
