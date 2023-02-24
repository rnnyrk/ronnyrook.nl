import * as i from 'types';

import { fetchNotion } from 'queries/fetchNotion';

import { ResourcesGrid } from './ResourcesGrid';

export const ResourcesArticles = async () => {
  const resources: null | i.Resource[] = await fetchNotion('articles');

  return (
    <div className="min-h-screen min-w-full">
      <ResourcesGrid
        data={resources || []}
        buttonText="Read article"
        type="articles"
      />
    </div>
  );
};
