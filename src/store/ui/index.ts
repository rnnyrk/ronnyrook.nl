import type * as i from 'types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UiStore = {
  theme: i.Theme;
  setTheme: (payload: i.Theme) => void;
};

export const useUiStore = create(
  immer<UiStore>((set) => ({
    theme: 'light',
    setTheme: (value) =>
      set((state) => {
        state.theme = value;
      }),
  })),
);
