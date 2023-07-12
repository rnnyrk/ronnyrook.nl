import type * as i from 'types';

export type ResourcesList = {
  articles: i.Article[] | null;
  sandboxes: i.Sandbox[] | null;
  tweets: i.Tweet[] | null;
};

export type ResourceType<T> = T extends 'tweets'
  ? i.Tweet
  : T extends 'articles'
  ? i.Article
  : T extends 'sandboxes'
  ? i.Sandbox
  : never;

export type ResourcesKeys = keyof ResourcesList;

export type Resource = {
  id: string;
  title: string;
  link: string;
  tags: i.Tag[];
};

export type Tweet = i.Resource & {
  type: Extract<i.ResourcesKeys, 'tweets'>;
};

export type Article = i.Resource & {
  type: Extract<i.ResourcesKeys, 'articles'>;
};

export type Sandbox = i.Resource & {
  type: Extract<i.ResourcesKeys, 'sandboxes'>;
};

export type Tag = {
  id: string;
  name: i.TagCategories;
  color: string;
};

export type TagCategories =
  | 'React'
  | 'React Native'
  | 'Nextjs'
  | 'Typescript'
  | 'Javascript'
  | 'Css'
  | 'Html'
  | 'Svg'
  | 'Git'
  | 'Performance'
  | 'Framer Motion'
  | 'Animations';
