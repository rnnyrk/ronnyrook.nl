'use client';

import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

import { useUiStore } from 'store/ui';
import { cn } from 'utils';
import DarkSvg from 'vectors/dark-mode.svg';
import LightSvg from 'vectors/light-mode.svg';

const toggleVariants: Variants = {
  active: (_) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.5,
    },
  }),
  inactive: (mode) => ({
    opacity: 0,
    y: mode === 'dark' ? 4 : -4,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  }),
};

export const DarkModeToggle = () => {
  const { theme, setTheme } = useUiStore();

  useEffect(() => {
    const localTheme = localStorage?.theme;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localTheme) {
      setTheme(localTheme === 'dark' ? 'dark' : 'light');
    } else if (prefersDarkScheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const prefersDarkScheme =
      !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorage?.theme === 'dark' || prefersDarkScheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const onToggleDarkMode = () => {
    if (theme === 'dark') {
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      localStorage.theme = 'dark';
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={onToggleDarkMode}
      className={cn(
        'relative w-[40px] h-[40px] flex items-center justify-center overflow-hidden rounded-lg',
        'bg-rnny-dark-tint/20 hover:bg-rnny-light-tint/80 dark:bg-rnny-light-tint/20 dark:hover:bg-rnny-dark/50',
        'transition-colors duration-500',
      )}
    >
      <motion.div
        custom="dark"
        animate={theme === 'dark' ? 'active' : 'inactive'}
        variants={toggleVariants}
        whileHover={{
          rotateZ: 20,
          scale: 1.2,
        }}
        className="flex items-center justify-center absolute inset-0 z-10 dark:z-20"
      >
        <LightSvg
          className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] stroke-yellow-500"
          strokeWidth="3"
        />
      </motion.div>

      <motion.div
        custom="light"
        animate={theme === 'light' ? 'active' : 'inactive'}
        variants={toggleVariants}
        whileHover={{
          rotateZ: -30,
          scale: 1.1,
        }}
        className="flex items-center justify-center absolute inset-0 z-20 dark:z-10"
      >
        <DarkSvg className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] fill-[#5F59D3]" />
      </motion.div>
    </button>
  );
};
