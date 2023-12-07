'use client';

import Link from 'next/link';

import { cn } from 'utils';
import ArrowLeftSvg from 'vectors/arrow-left.svg';
import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';

export const PageHeader = ({ backUrl, className, title, summary }: PageHeaderProps) => {
  return (
    <Container className={cn('p-8 pt-60', className)}>
      <div className="flex flex-col">
        {backUrl && (
          <Link
            href={backUrl}
            className="flex items-center mb-2 no-underline hover:translate-x-2 transition-transform"
          >
            <ArrowLeftSvg className="fill-rnny-dark dark:fill-rnny-light w-6 h-6 mr-2" />
            <span className="text-rnny-dark dark:text-rnny-light font-sathosi">
              Back to overview
            </span>
          </Link>
        )}
        <Heading className="text-black dark:text-white mt-4">{title}</Heading>
        {summary && (
          <>
            <p
              className="mt-6 text-xl leading-8 font-sathosi tracking-wide"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
            {title === 'Work' && (
              <p className="text-xl leading-8 font-sathosi tracking-wide">
                If you're looking for all the work I've done, check out{' '}
                <Link href="/cv">my resume</Link>. Want to read more about my interests? See{' '}
                <Link href="/blog">my blog</Link>.
              </p>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

type PageHeaderProps = {
  backUrl?: '/resources' | '/work';
  className?: string;
  title: string;
  summary?: string;
};
