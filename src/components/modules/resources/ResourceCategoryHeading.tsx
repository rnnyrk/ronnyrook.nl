'use client';

import Link from 'next/link';

import ArrowLeftSvg from 'vectors/arrow-left.svg';
import { Heading } from 'common/typography/Heading';

import { ResourceHeading } from './ResourceHeading';

export const ResourceCategoryHeading = ({ title }: ResourceCategoryHeadingProps) => {
  return (
    <ResourceHeading>
      <div className="flex flex-col">
        <Link
          href="/resources"
          className="flex items-center mb-2 hover:translate-x-2 transition-transform"
        >
          <ArrowLeftSvg className="fill-slate-300 w-6 h-6 mr-2" />
          <span className="text-slate-300">Back to overview</span>
        </Link>
        <Heading>{title}</Heading>
      </div>
    </ResourceHeading>
  );
};

type ResourceCategoryHeadingProps = {
  title: string;
};
