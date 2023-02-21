import * as i from 'types';

import { Slider } from '../../common/interaction/Slider';
import { Button } from '../../common/interaction/Button';
import { Card } from '../../common/layout/Card';

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
    <Slider>
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
            >
              Open on Twitter
            </Button>
          </Card>
        ))}
    </Slider>
  );
};
