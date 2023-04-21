import { Suspense } from 'react';

import { Container } from 'common/layout/Container';
import { ResourcesTweets } from 'modules/resources/ResourcesTweets';
import { ResourcesArticles } from 'modules/resources/ResourcesArticles';
import { ResourcesSandboxes } from 'modules/resources/ResourcesSandboxes';
import { Heading } from 'common/typography/Heading';
import { RefreshResources } from 'modules/resources/RefreshResources';
import { ResourceHeading } from 'modules/resources/ResourceHeading';

const Resources = () => {
  return (
    <>
      <RefreshResources />
      <Container className="px-8 py-20 mb-20">
        <Heading>Notion</Heading>
        <p className="my-8 text-lg">
          I use Notion basically as my second brain. When I come across an interesting (code
          related) tweet, see an useful code example or gather new knowdledge through an article I
          save it to my Notion library.{' '}
          <strong className="md:block">
            <em>A small insight into what's on my mind.</em>
          </strong>
        </p>
      </Container>

      <section className="min-h-screen py-40 bg-white dark:bg-rnny-dark-tint">
        <ResourceHeading
          icon="twitter"
          text="When you're in search for useful tips and tricks, tech Twitter is a perfect source."
        >
          <Heading>Tweets</Heading>
        </ResourceHeading>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesTweets />
        </Suspense>
      </section>

      <section className="min-h-screen py-40">
        <ResourceHeading
          icon="read"
          text="Varying from case studies to tutorials and in depth knowledge."
        >
          <Heading>Articles</Heading>
        </ResourceHeading>

        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesArticles />
        </Suspense>
      </section>

      <section className="min-h-screen py-40 bg-white dark:bg-rnny-dark-tint">
        <ResourceHeading
          icon="codepen"
          text="People on the internet build the most incredible things."
        >
          <Heading className="break-all">CodePens/CodeSandboxes</Heading>
        </ResourceHeading>
        <Suspense fallback="loading...">
          {/* @ts-expect-error Server Component */}
          <ResourcesSandboxes />
        </Suspense>
      </section>
    </>
  );
};

export default Resources;
