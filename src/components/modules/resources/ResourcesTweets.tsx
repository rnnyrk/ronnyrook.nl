import { fetchNotion } from 'queries/fetchNotion';

import { ResourceOverview } from './ResourceOverview';

export const ResourcesTweets = async () => {
  const tweets = await fetchNotion('tweets');

  return (
    <div className="min-w-full">
      <ResourceOverview
        data={tweets || []}
        type="tweets"
      />
    </div>
  );
};
