import * as i from 'types';

export const formatResourceByType = <T extends i.ResourcesKeys>({
  data,
  type,
}: FormatResourceType<T>): null | i.ResourceType<T>[] => {
  const formattedData = data.map((resource) => {
    return {
      ...resource,
      type,
    } as i.ResourceType<T>;
  });

  return formattedData;
};

type FormatResourceType<T> = {
  data: i.Resource[];
  type: T;
};
