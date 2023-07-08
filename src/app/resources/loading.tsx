import type * as i from 'types';

import { ResourcesLoader } from 'modules/resources/ResourcesLoader';

export default function Loading({ variant }: i.VariantProps) {
  return <ResourcesLoader variant={variant} />;
}
