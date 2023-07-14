'use client';

import Link from 'next/link';

import { cn } from 'utils';
import ArrowLeftSvg from 'vectors/arrow-left.svg';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const PageHeader = ({ backUrl, className, title, summary }: PageHeaderProps) => {
  return (
    <Container className={cn('p-8', className)}>
      <div className="flex flex-col">
        {backUrl && (
          <Link
            href={backUrl}
            className="flex items-center mb-2 hover:translate-x-2 transition-transform"
          >
            <ArrowLeftSvg className="fill-rnny-dark dark:fill-rnny-light w-6 h-6 mr-2" />
            <span className="text-rnny-dark dark:text-rnny-light">Back to overview</span>
          </Link>
        )}
        <Heading>{title}</Heading>
        {summary && <p className="mt-6 text-lg">{summary}</p>}
      </div>
    </Container>
  );
};

type PageHeaderProps = {
  backUrl?: '/resources' | '/blog';
  className?: string;
  title: string;
  summary?: string;
};
