import { fetchNotion } from 'queries/resources/fetchNotion';

import { ResourceOverview } from './ResourceOverview';

export const ResourcesArticles = async () => {
  const articles = await fetchNotion('articles');

  return (
    <div className="min-w-full">
      <ResourceOverview
        data={articles || []}
        type="articles"
        variant="off"
      />
    </div>
  );
};
