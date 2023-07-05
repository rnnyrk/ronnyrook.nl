import * as i from 'types';

import { formatResourceByType, getApiUrl } from 'services';

export const fetchByTag = async <T extends i.ResourcesKeys>(
  type: T,
  tag: i.TagCategories,
): Promise<null | i.ResourceType<T>[]> => {
  let resources: null | i.ResourceType<T>[] = null;

  try {
    const res = await fetch(`${getApiUrl()}/resources?type=${type}&tag=${tag}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      next: {
        revalidate: 60, // In seconds
      },
    });

    const data = await res.json();
    resources = formatResourceByType({ data, type });
  } catch (error) {
    console.error(error);
  }

  return resources;
};
