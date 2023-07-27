'use client';

import type * as i from 'types';

import { useMasonaryGrid } from 'hooks';

import { ResourcesGrid } from './ResourcesGrid';

export const ResourcesCategoryTweets = ({ data }: ResourcesCategoryTweetsProps) => {
  useMasonaryGrid({ data, type: 'tweets' });

  return (
    <div className="w-full min-h-screen max-w-8xl mx-auto flex flex-col px-4 masonry-grid">
      <ResourcesGrid
        data={data || []}
        isInView={true}
      />
    </div>
  );
};

type ResourcesCategoryTweetsProps = {
  data: (i.Tweet | i.Article | i.Sandbox)[];
};
