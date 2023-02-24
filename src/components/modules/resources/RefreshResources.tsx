'use client';

import { Button } from 'common/interaction/Button';
import { useResourcesStore } from 'store/resources';

export const RefreshResources = () => {
  const { shuffleResources } = useResourcesStore();

  return (
    <Button
      className="fixed z-20 bottom-8 left-2/4 -translate-x-[50%] whitespace-nowrap rounded-full"
      type="button"
      onClick={shuffleResources}
    >
      Refresh resources
    </Button>
  );
};
