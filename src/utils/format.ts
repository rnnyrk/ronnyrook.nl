import type * as i from 'types';

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

export const formatCategoryParamToTag = (tag: string): i.TagCategories => {
  let title = tag;
  title = title.replace(/-/g, ' ');
  title = title.replace(/_/g, ' ');

  const words = title.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(' ') as i.TagCategories;
};
