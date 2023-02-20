import * as i from 'types';

import { Button } from 'common/interaction';
import { Card } from 'common/layout';

export const ResourcesSandboxes = async () => {
  let resources: null | i.Resource[] = null;

  try {
    const res = await fetch('http://localhost:3000/api/notion?type=sandboxes', {
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
    <div className="flex">
      {resources &&
        resources.map((resource) => (
          <Card
            key={resource.id}
            title={resource.title}
            tags={resource.tags?.map((tag) => tag.name)}
          />
        ))}
    </div>
  );
};
