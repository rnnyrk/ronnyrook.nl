import { ResourcesList } from 'modules/resources';
import { Suspense } from 'react';

export const metadata = {
  title: {
    default: 'Resources',
  },
};

const Resources = async () => {
  let resources = null;

  try {
    const res = await fetch('http://localhost:3000/api/notion?type=twitter-saves', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    const data = await res.json();
    resources = data;
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1>Resources</h1>
      <Suspense fallback="loading...">
        <ResourcesList resources={resources} />
      </Suspense>
    </section>
  );
};

export default Resources;
