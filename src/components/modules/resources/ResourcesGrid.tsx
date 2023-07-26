'use client';

import type * as i from 'types';
import { Tweet } from 'react-tweet';

import { useUiStore } from 'store/ui';
import { Button } from 'common/interaction/Button';
import { Card } from 'common/layout/Card';

export const ResourcesGrid = ({ data, isInView, variant, type }: ResourcesGridProps) => {
  const { theme } = useUiStore();

  return (
    <>
      {data &&
        data.map((resource) => {
          if (type === 'tweets') {
            const tweetId = resource.link.split('/').pop();
            return (
              <div className={theme}>
                <Tweet id={tweetId!} />
              </div>
            );
          }

          return (
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
              >
                {resource.type === 'sandboxes' ? 'View example' : null}
                {resource.type === 'tweets' ? 'View tweet' : null}
                {resource.type === 'articles' ? 'Read article' : null}
              </Button>
            </Card>
          );
        })}
    </>
  );
};

type ResourcesGridProps = {
  data: (i.Tweet | i.Article | i.Sandbox)[];
  isInView: boolean;
  variant?: 'off';
  type: i.ResourcesKeys;
};
