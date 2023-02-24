import { Suspense } from 'react';

import { Container } from 'common/layout/Container';
import { ResourcesTweets } from 'modules/resources/ResourcesTweets';
import { ResourcesArticles } from 'modules/resources/ResourcesArticles';
import { ResourcesSandboxes } from 'modules/resources/ResourcesSandboxes';
import { Heading } from 'common/typography/Heading';

const Resources = () => {
  return (
    <>
      <Container className="px-8 my-64">
        <Heading>Notion</Heading>
        <p className="mb-8">
          This is my collections of saves from my Notion library. Helpful links, articles etc.
        </p>
      </Container>

      <section className="min-h-screen py-40 bg-slate-900">
        <Container className="px-8">
          <Heading className="mb-10">Tweets</Heading>
        </Container>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesTweets />
        </Suspense>
      </section>

      <section className="min-h-screen py-40">
        <Container className="px-8">
          <Heading className="mb-10">Articles</Heading>
        </Container>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesArticles />
        </Suspense>
      </section>

      <section className="min-h-screen py-40 bg-slate-900">
        <Container className="px-8">
          <Heading className="mb-10">CodePens/CodeSandboxes</Heading>
        </Container>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesSandboxes />
        </Suspense>
      </section>
    </>
  );
};

export default Resources;
