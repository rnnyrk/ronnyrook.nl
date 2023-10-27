import { fetchNotion } from 'queries/resources/fetchNotion';

import { ResourceOverview } from './ResourceOverview';

export const ResourcesTweets = async () => {
  const tweets = await fetchNotion('tweets');

  return (
    <div className="min-w-full min-h-screen">
      <ResourceOverview
        data={tweets || []}
        type="tweets"
        variant="off"
      />
    </div>
  );
};
