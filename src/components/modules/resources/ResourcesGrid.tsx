'use client';
import * as i from 'types';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import { Button } from 'common/interaction/Button';
import { Card } from 'common/layout/Card';
import { useResourcesStore } from 'store/resources';

export const ResourcesGrid = ({ buttonText, data, type }: ResourcesGridProps) => {
  const { resources, setResources } = useResourcesStore();

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!data) return;

    setResources({
      [type]: data,
    });
  }, [data]);

  return (
    <div
      ref={ref}
      className="w-full max-w-8xl mx-auto flex flex-wrap justify-center items-stretch content-start px-8"
    >
      {resources &&
        resources[type]?.slice(0, 9).map((resource) => (
          <Card
            key={resource.id}
            title={resource.title}
            tags={resource.tags?.map((tag) => tag.name)}
            isInView={isInView}
          >
            <Button
              href={resource.link}
              type="link"
              variant="secondary"
            >
              {buttonText}
            </Button>
          </Card>
        ))}
    </div>
  );
};

type ResourcesGridProps = {
  buttonText: string;
  data: i.Resource[];
  type: i.ResourcesKeys;
};
