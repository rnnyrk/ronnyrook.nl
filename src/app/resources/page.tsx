import { Suspense } from 'react';

import { Container } from 'common/layout/Container';
import { Heading } from 'common/typography/Heading';
import { RefreshResources } from 'modules/resources/RefreshResources';
import { ResourceHeading } from 'modules/resources/ResourceHeading';
import { ResourcesArticles } from 'modules/resources/ResourcesArticles';
import { ResourcesSandboxes } from 'modules/resources/ResourcesSandboxes';
import { ResourcesTweets } from 'modules/resources/ResourcesTweets';

import Loading from './loading';

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

      <section className="py-40 bg-white dark:bg-rnny-dark-tint">
        <ResourceHeading
          icon="twitter"
          text="When you're in search for useful tips and tricks, tech Twitter is a perfect source."
        >
          <Heading>Tweets</Heading>
        </ResourceHeading>
        <Suspense fallback={<Loading />}>
          <ResourcesTweets />
        </Suspense>
      </section>

      <section className="py-40">
        <ResourceHeading
          icon="read"
          text="Varying from case studies to tutorials and in depth knowledge."
        >
          <Heading>Articles</Heading>
        </ResourceHeading>

        <Suspense fallback={<Loading variant="off" />}>
          <ResourcesArticles />
        </Suspense>
      </section>

      <section className="py-40 bg-white dark:bg-rnny-dark-tint">
        <ResourceHeading
          icon="codepen"
          text="People on the internet build the most incredible things."
        >
          <Heading className="break-all">CodePens/CodeSandboxes</Heading>
        </ResourceHeading>
        <Suspense fallback={<Loading />}>
          <ResourcesSandboxes />
        </Suspense>
      </section>
    </>
  );
};

export default Resources;
