import { ResourcesList } from 'modules/resources';
import { Suspense } from 'react';

import LoadingSvg from 'vectors/loading.svg';

export const metadata = {
  title: {
    default: 'Resources',
  },
};

const Resources = () => {
  return (
    <section>
      <Suspense fallback={<LoadingSvg className="fill-white w-10" />}>
        {/* @ts-expect-error Server Component */}
        <ResourcesList />
      </Suspense>
    </section>
  );
};

export default Resources;
