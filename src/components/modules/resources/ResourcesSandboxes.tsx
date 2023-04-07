import { fetchNotion } from 'queries/fetchNotion';

import { ResourceOverview } from './ResourceOverview';

export const ResourcesSandboxes = async () => {
  const sandboxes = await fetchNotion('sandboxes');

  return (
    <div className="min-h-screen min-w-full">
      <ResourceOverview
        data={sandboxes || []}
        type="sandboxes"
      />
    </div>
  );
};
