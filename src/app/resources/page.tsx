import { ResourcesArticles, ResourcesTweets, ResourcesSandboxes } from 'modules/resources';
import { Suspense } from 'react';

// import LoadingSvg from 'vectors/loading.svg';

export const metadata = {
  title: {
    default: 'Resources',
  },
};

const Resources = () => {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold">Notion</h1>
      <p className="mb-8">
        This is my collections of saves from my Notion library. Helpful links, articles etc.
      </p>

      <h2 className="mb-2 text-lg font-bold">Tweets</h2>
      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <ResourcesTweets />
      </Suspense>

      <h2 className="mt-4 mb-2 text-lg font-bold">Articles</h2>
      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <ResourcesArticles />
      </Suspense>

      <h2 className="mt-4 mb-2 text-lg font-bold">CodePens/CodeSandboxes</h2>
      <Suspense fallback="loading...">
        {/* @ts-expect-error Server Component */}
        <ResourcesSandboxes />
      </Suspense>
    </section>
  );
};

export default Resources;
