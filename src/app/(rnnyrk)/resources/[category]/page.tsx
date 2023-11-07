import { Suspense } from 'react';

import { fetchByTag } from 'queries/resources/fetchByTag';
import { formatCategoryParamToTag } from 'src/utils';
import { Container } from 'common/layout/Container';
import { PageHeader } from 'modules/layouts/PageHeader';
import { ResourcesCategoryTweets } from 'modules/resources/ResourcesCategoryTweets';
import { ResourcesGrid } from 'modules/resources/ResourcesGrid';

import Loading from './loading';

async function ResourceCategory({ params }: ResourceCategoryProps) {
  const tag = params.category;
  const title = formatCategoryParamToTag(tag);

  const [tweets, articles, sandboxes] = await Promise.all([
    fetchByTag('tweets', title),
    fetchByTag('articles', title),
    fetchByTag('sandboxes', title),
  ]);

  const data = [...(articles || []), ...(sandboxes || [])];

  return (
    <Suspense fallback={<Loading />}>
      <Container className="px-0 w-full min-w-full">
        <PageHeader
          title={title}
          backUrl="/resources"
        />

        <section className="py-20 md:py-40 bg-white dark:bg-rnny-dark-tint">
          <div className="w-full max-w-8xl mx-auto flex flex-col px-4 md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8">
            <ResourcesGrid
              data={data || []}
              isInView={true}
            />
          </div>
        </section>

        <div className="min-w-full min-h-screen py-20 md:py-40">
          <ResourcesCategoryTweets data={[...(tweets || [])]} />
        </div>
      </Container>
    </Suspense>
  );
}

type ResourceCategoryProps = {
  params: {
    category: string;
  };
};

export default ResourceCategory;
