import { Suspense } from 'react';

import { fetchByTag } from 'queries/resources/fetchByTag';
import { formatCategoryParamToTag } from 'src/utils';
import { Container } from 'common/layout/Container';
import { PageHeader } from 'modules/layouts/PageHeader';
import { ResourcesGrid } from 'modules/resources/ResourcesGrid';

import Loading from './loading';

const ResourceCategory = async ({ params }: ResourceCategoryProps) => {
  const tag = params.category;
  const title = formatCategoryParamToTag(tag);

  const [tweets, articles, sandboxes] = await Promise.all([
    fetchByTag('tweets', title),
    fetchByTag('articles', title),
    fetchByTag('sandboxes', title),
  ]);

  const data = [...(tweets || []), ...(articles || []), ...(sandboxes || [])];

  return (
    <Suspense fallback={<Loading />}>
      <Container className="px-8 w-full min-w-full">
        <PageHeader
          title={title}
          backUrl="/resources"
        />

        <section className="py-40 bg-white dark:bg-rnny-dark-tint">
          <div className="w-full max-w-8xl mx-auto flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8 px-4">
            <ResourcesGrid
              data={data || []}
              isInView={true}
            />
          </div>
        </section>
      </Container>
    </Suspense>
  );
};

type ResourceCategoryProps = {
  params: {
    category: string;
  };
};

export default ResourceCategory;
