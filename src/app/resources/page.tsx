import { Suspense } from 'react';

import { Heading } from 'common/typography/Heading';
import { PageHeader } from 'modules/layouts/PageHeader';
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
      <PageHeader
        title="Notion"
        className="mb-6 md:mb-10"
        summary="I use Notion as an outsource of my brain. When I want to remember something I come across,
        like an interesting (code related) tweet, an useful code example or gather new knowdledge
        through an article I save it to my Notion library."
      />

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
