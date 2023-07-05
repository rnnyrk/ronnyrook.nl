import * as i from 'types';

import { formatResourceByType, getApiUrl } from 'src/utils';

export const fetchNotion = async <T extends i.ResourcesKeys>(
  type: T,
): Promise<null | i.ResourceType<T>[]> => {
  let resources: null | i.ResourceType<T>[] = null;

  try {
    const res = await fetch(`${getApiUrl()}/resources?type=${type}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      next: {
        revalidate: 60, // In seconds
        tags: ['notion'],
      },
    });

    const data = await res.json();
    resources = formatResourceByType({ data, type });
  } catch (error) {
    console.error(error);
  }

  return resources;
};
