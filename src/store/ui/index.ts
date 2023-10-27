import type * as i from 'types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UiStore = {
  theme: i.Theme;
  setTheme: (payload: i.Theme) => void;
  fancy: i.Fancy;
  setFancy: (payload: i.Fancy) => void;
};

export const useUiStore = create(
  immer<UiStore>((set) => ({
    theme: 'light',
    setTheme: (value) =>
      set((state) => {
        state.theme = value;
      }),

    fancy: 'off',
    setFancy: (value) =>
      set((state) => {
        state.fancy = value;
      }),
  })),
);
