import { fetchNotion } from 'queries/fetchNotion';

import { ResourceOverview } from './ResourceOverview';

export const ResourcesArticles = async () => {
  const articles = await fetchNotion('articles');

  return (
    <div className="min-h-screen min-w-full">
      <ResourceOverview
        data={articles || []}
        type="articles"
        variant="off"
      />
    </div>
  );
};
