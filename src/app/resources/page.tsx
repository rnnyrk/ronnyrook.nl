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
        <p className="my-8 text-lg">
          I use Notion basically as my second brain. When I come across an interesting (code
          related) tweet, see an useful code example or gather new knowdledge through an article I
          save it to my Notion library.{' '}
          <strong>
            <em>A small insight into what's on my mind.</em>
          </strong>
        </p>
      </Container>

      <section className="min-h-screen py-40 bg-slate-900">
        <Container className="px-8">
          <Heading>Tweets</Heading>
          <p className="mt-8 mb-16 text-lg">
            When you're in search for useful tips and tricks, tech Twitter is a perfect source.
          </p>
        </Container>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesTweets />
        </Suspense>
      </section>

      <section className="min-h-screen py-40">
        <Container className="px-8">
          <Heading>Articles</Heading>
          <p className="mt-8 mb-16 text-lg">
            Varying from case studies to tutorials and in depth knowledge.
          </p>
        </Container>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesArticles />
        </Suspense>
      </section>

      <section className="min-h-screen py-40 bg-slate-900">
        <Container className="px-8">
          <Heading>CodePens/CodeSandboxes</Heading>
          <p className="mt-8 mb-16 text-lg">
            People on the internet build the most incredible things.
          </p>
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
