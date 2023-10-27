import { Suspense } from 'react';

import { Heading } from 'common/typography/Heading';
import { PageHeader } from 'modules/layouts/PageHeader';
import { RefreshResources } from 'modules/resources/RefreshResources';
import { ResourceHeading } from 'modules/resources/ResourceHeading';
import { ResourcesArticles } from 'modules/resources/ResourcesArticles';
import { ResourcesSandboxes } from 'modules/resources/ResourcesSandboxes';
import { ResourcesTweets } from 'modules/resources/ResourcesTweets';

import Loading from './loading';

export const metadata = {
  title: 'Resources',
  description:
    'A collection of useful resources. From tweets about React, Expo, ThreeJS or any other Javascript/coding related topic, to articles and code examples.',
};

async function Resources() {
  return (
    <Suspense fallback={<Loading />}>
      <RefreshResources />
      <PageHeader
        title="Resources"
        className="mb-6 md:mb-10"
        summary="I like to gather resources from all over the internet. This page is a collection of useful resources so I can easily find them again myself. From tweets about React, Expo, ThreeJS or any other Javascript/coding related topic, to articles and code examples."
      />

      <section className="py-40 bg-white dark:bg-rnny-dark-tint">
        <ResourceHeading
          icon="read"
          text="Varying from case studies to tutorials and in depth knowledge."
        >
          <Heading className="text-black dark:text-white">Articles</Heading>
        </ResourceHeading>
        <ResourcesArticles />
      </section>

      <section className="py-40">
        <ResourceHeading
          icon="twitter"
          text="When you're in search for useful tips and tricks, tech Twitter is a perfect source."
        >
          <Heading className="text-black dark:text-white">Tweets</Heading>
        </ResourceHeading>
        <ResourcesTweets />
      </section>

      <section className="py-40 bg-white dark:bg-rnny-dark-tint">
        <ResourceHeading
          icon="codepen"
          text="People on the internet build the most incredible things."
        >
          <Heading className="text-black dark:text-white break-all">CodePens/CodeSandboxes</Heading>
        </ResourceHeading>
        <ResourcesSandboxes />
      </section>
    </Suspense>
  );
}

export default Resources;
