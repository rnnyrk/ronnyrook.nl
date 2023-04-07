import * as i from 'types';

import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import { fetchByTag } from 'queries/fetchByTag';
import { ResourcesGrid } from 'modules/resources/ResourcesGrid';
import { ResourceHeading } from 'modules/resources/ResourceHeading';

export default async function ResourceCategory({
  params,
}: {
  params: { category: i.TagCategories };
}) {
  const tag = params.category;
  const title = (tag.charAt(0).toUpperCase() + tag.slice(1)) as i.TagCategories;

  const tweets = await fetchByTag('tweets', title);
  const articles = await fetchByTag('articles', title);
  const sandboxes = await fetchByTag('sandboxes', title);

  const data = [...(tweets || []), ...(articles || []), ...(sandboxes || [])];

  return (
    <Container className="px-8 w-full min-h-screen min-w-full">
      <ResourceHeading>
        <Heading>{title}</Heading>
      </ResourceHeading>

      <div className="w-full max-w-8xl mx-auto flex flex-wrap justify-center items-stretch content-start px-8">
        <ResourcesGrid
          data={data || []}
          isInView={true}
        />
      </div>
    </Container>
  );
}
