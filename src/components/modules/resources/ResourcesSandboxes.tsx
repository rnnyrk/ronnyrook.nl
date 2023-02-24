import * as i from 'types';

import { fetchNotion } from 'queries/fetchNotion';

import { ResourcesGrid } from './ResourcesGrid';

export const ResourcesSandboxes = async () => {
  const resources: null | i.Resource[] = await fetchNotion('sandboxes');

  return (
    <div className="min-h-screen min-w-full">
      <ResourcesGrid
        data={resources || []}
        buttonText="View example"
        type="sandboxes"
      />
    </div>
  );
};
