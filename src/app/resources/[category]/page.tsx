import { formatCategoryParamToTag } from 'services';
import { Container } from 'common/layout/Container';
import { fetchByTag } from 'queries/fetchByTag';
import { ResourcesGrid } from 'modules/resources/ResourcesGrid';
import { ResourceCategoryHeading } from 'modules/resources/ResourceCategoryHeading';

export default async function ResourceCategory({ params }: ResourceCategoryProps) {
  const tag = params.category;
  const title = formatCategoryParamToTag(tag);

  const [tweets, articles, sandboxes] = await Promise.all([
    fetchByTag('tweets', title),
    fetchByTag('articles', title),
    fetchByTag('sandboxes', title),
  ]);

  const data = [...(tweets || []), ...(articles || []), ...(sandboxes || [])];

  return (
    <Container className="px-8 w-full min-h-screen min-w-full">
      <ResourceCategoryHeading title={title} />

      <div className="w-full max-w-8xl mx-auto flex flex-wrap justify-center items-stretch content-start px-8">
        <ResourcesGrid
          data={data || []}
          isInView={true}
        />
      </div>
    </Container>
  );
}

type ResourceCategoryProps = {
  params: {
    category: string;
  };
};
