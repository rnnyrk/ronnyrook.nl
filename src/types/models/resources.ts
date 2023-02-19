import * as i from 'types';

export type Resource = {
  id: string;
  title: string;
  link: string;
  tags: i.Tag[];
};

export type Tag = {
  id: string;
  name: string;
  color: string;
};
