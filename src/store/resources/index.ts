import type * as i from 'types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ResourcesStore = {
  resources: i.ResourcesList;
  setResources: (payload: Partial<i.ResourcesList>) => void;
  shuffleResources: () => void;
};

const defaultResources = {
  articles: null,
  sandboxes: null,
  tweets: null,
};

export const useResourcesStore = create(
  immer<ResourcesStore>((set) => ({
    resources: defaultResources,
    setResources: (value) =>
      set((state) => {
        state.resources = {
          ...state.resources,
          ...value,
        };
      }),
    shuffleResources: () =>
      set((state) => {
        state.resources = {
          articles: state.resources.articles?.sort(() => Math.random() - 0.5) || null,
          sandboxes: state.resources.sandboxes?.sort(() => Math.random() - 0.5) || null,
          tweets: state.resources.tweets?.sort(() => Math.random() - 0.5) || null,
        };
      }),
  })),
);
