import { Suspense } from 'react';

import { Container } from 'common/layout/Container';
import { ResourcesTweets } from 'modules/resources/ResourcesTweets';
import { ResourcesArticles } from 'modules/resources/ResourcesArticles';
import { ResourcesSandboxes } from 'modules/resources/ResourcesSandboxes';

const Resources = () => {
  return (
    <>
      <Container className="px-8">
        <h1 className="mb-2 text-2xl font-bold">Notion</h1>
        <p className="mb-8">
          This is my collections of saves from my Notion library. Helpful links, articles etc.
        </p>

        <h2 className="mb-2 text-lg font-bold">Tweets</h2>
      </Container>
      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <ResourcesTweets />
      </Suspense>

      <Container className="px-8">
        <h2 className="mt-4 mb-2 text-lg font-bold">Articles</h2>
      </Container>
      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <ResourcesArticles />
      </Suspense>

      <Container className="px-8">
        <h2 className="mt-4 mb-2 text-lg font-bold">CodePens/CodeSandboxes</h2>
      </Container>
      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <ResourcesSandboxes />
      </Suspense>
    </>
  );
};

export default Resources;
