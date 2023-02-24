import * as i from 'types';

import { Button } from 'common/interaction/Button';
import { Card } from 'common/layout/Card';

export const ResourcesArticles = async () => {
  let resources: null | i.Resource[] = null;

  try {
    const res = await fetch('http://localhost:3000/api/notion?type=articles', {
      next: {
        revalidate: 60,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    const data = await res.json();

    // Pick 9 random resources
    const shuffleData = data.sort(() => 0.5 - Math.random());
    resources = shuffleData.slice(0, 9);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="min-h-screen min-w-full flex flex-wrap justify-center items-stretch content-start px-8">
      {resources &&
        resources.map((resource) => (
          <Card
            key={resource.id}
            title={resource.title}
            tags={resource.tags?.map((tag) => tag.name)}
          >
            <Button
              href={resource.link}
              type="link"
              variant="secondary"
            >
              Read article
            </Button>
          </Card>
        ))}
    </div>
  );
};
