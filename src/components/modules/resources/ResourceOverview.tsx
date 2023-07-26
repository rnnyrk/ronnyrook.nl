'use client';

import type * as i from 'types';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import { useResourcesStore } from 'store/resources';
import { cn } from 'utils';

import { ResourcesGrid } from './ResourcesGrid';

// Masonry inspiration: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
export const ResourceOverview = ({ data, type, variant }: ResourceOverviewProps) => {
  const { resources, setResources } = useResourcesStore();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!data) return;

    setResources({
      [type]: data,
    });
  }, [data]);

  function resizeGridItem(item: HTMLDivElement) {
    if (!item) return;

    const grid = document.getElementsByClassName('masonry-grid')[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil(
      (item.querySelector('.content')!.getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap),
    );
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  function resizeAllGridItems() {
    const allItems = document.getElementsByClassName(
      'tweet-card',
    ) as HTMLCollectionOf<HTMLDivElement>;
    for (let x = 0; x < allItems.length; x++) {
      resizeGridItem(allItems[x]);
    }
  }

  useEffect(() => {
    if (type !== 'tweets') return;

    window.addEventListener('resize', resizeAllGridItems);
    return () => {
      window.removeEventListener('resize', resizeAllGridItems);
    };
  }, []);

  useEffect(() => {
    if (type !== 'tweets') return;
    setTimeout(() => {
      resizeAllGridItems();
    }, 500);
  }, [resources]);

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
