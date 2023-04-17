'use client';
import * as i from 'types';

import { Button } from 'common/interaction/Button';
import { Card } from 'common/layout/Card';

export const ResourcesGrid = ({ data, isInView, variant }: ResourcesGridProps) => {
  return (
    <>
      {data &&
        data.map((resource) => (
          <Card
            key={resource.id}
            title={resource.title}
            tags={resource.tags?.map((tag) => tag.name)}
            isInView={isInView}
            variant={variant}
          >
            <Button
              href={resource.link}
              type="link"
              variant="secondary"
            >
              {resource.type === 'sandboxes' ? 'View example' : null}
              {resource.type === 'tweets' ? 'View tweet' : null}
              {resource.type === 'articles' ? 'Read article' : null}
            </Button>
          </Card>
        ))}
    </>
  );
};

type ResourcesGridProps = {
  data: (i.Tweet | i.Article | i.Sandbox)[];
  isInView: boolean;
  variant?: 'off';
};
