import type * as i from 'types';

export type Post = {
  title: string;
  date: string;
  tags: i.TagCategories[];
  summary: string;
  slug: string;
  content: string;
};

export type OverviewPost = Omit<i.Post, 'content'>;
