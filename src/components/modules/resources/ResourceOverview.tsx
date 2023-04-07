'use client';
import * as i from 'types';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import { useResourcesStore } from 'store/resources';
import { ResourcesGrid } from './ResourcesGrid';

export const ResourceOverview = ({ data, type }: ResourceOverviewProps) => {
  const { resources, setResources } = useResourcesStore();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!data) return;

    setResources({
      [type]: data,
    });
  }, [data]);

  return (
    <div
      ref={ref}
      className="w-full max-w-8xl mx-auto flex flex-wrap justify-center items-stretch content-start px-8"
    >
      <ResourcesGrid
        data={(resources[type] as (i.Tweet | i.Article | i.Sandbox)[])?.slice(0, 9)}
        isInView={isInView}
      />
    </div>
  );
};

type ResourceOverviewProps = {
  data: (i.Tweet | i.Article | i.Sandbox)[];
  type: i.ResourcesKeys;
};
