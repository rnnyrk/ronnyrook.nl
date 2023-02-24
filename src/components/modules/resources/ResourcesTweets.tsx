import * as i from 'types';

import { ResourcesGrid } from './ResourcesGrid';

export const ResourcesTweets = async () => {
  let resources: null | i.Resource[] = null;

  try {
    const res = await fetch('http://localhost:3000/api/notion?type=twitter-saves', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    const data = await res.json();
    resources = data;
  } catch (error) {
    console.error(error);
  }

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
