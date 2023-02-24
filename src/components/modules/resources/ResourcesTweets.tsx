import * as i from 'types';

import { fetchNotion } from 'queries/fetchNotion';

import { ResourcesGrid } from './ResourcesGrid';

export const ResourcesTweets = async () => {
  const resources: null | i.Resource[] = await fetchNotion('tweets');

  return (
    <div className="min-h-screen min-w-full">
      <ResourcesGrid
        data={resources || []}
        buttonText="Open on Twitter"
        type="tweets"
      />
    </div>
  );
};
