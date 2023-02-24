import * as i from 'types';

export type Resource = {
  id: string;
  title: string;
  link: string;
  tags: i.Tag[];
};

export type Tag = {
  id: string;
  name: i.TagCategories;
  color: string;
};

export type TagCategories =
  | 'React'
  | 'React Native'
  | 'Next.js'
  | 'TypeScript'
  | 'JavaScript'
  | 'CSS'
  | 'HTML'
  | 'Git'
  | 'Performance'
  | 'Framer Motion'
  | 'Animations';
