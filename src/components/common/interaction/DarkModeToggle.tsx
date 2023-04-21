'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

import DarkSvg from 'vectors/dark-mode.svg';
import LightSvg from 'vectors/light-mode.svg';

const toggleBackgroundVariants: Variants = {
  active: {
    backgroundColor: 'rgb(36, 60, 102)',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  inactive: {
    backgroundColor: 'rgb(241, 241, 240)',
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

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
  const [mode, setMode] = useState<'dark' | 'light'>();

  useEffect(() => {
    const localTheme = localStorage?.theme;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localTheme) {
      setMode(localTheme === 'dark' ? 'dark' : 'light');
    } else if (prefersDarkScheme) {
      setMode('dark');
    } else {
      setMode('light');
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
  }, [mode]);

  const onToggleDarkMode = () => {
    if (mode === 'dark') {
      localStorage.theme = 'light';
      setMode('light');
    } else {
      localStorage.theme = 'dark';
      setMode('dark');
    }
  };

  return (
    <button
      onClick={onToggleDarkMode}
      className="absolute right-6 top-12 items-center justify-center rounded-full button-dark-mode hidden md:flex"
    >
      <motion.div
        custom="dark"
        animate={mode === 'dark' ? 'active' : 'inactive'}
        variants={toggleVariants}
        whileHover={{
          rotateZ: 20,
          scale: 1.2,
        }}
        className="flex items-center justify-center absolute inset-0 z-10 dark:z-20"
      >
        <LightSvg
          className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] stroke-rnny-dark"
          strokeWidth="3"
        />
      </motion.div>

      <motion.div
        custom="light"
        animate={mode === 'light' ? 'active' : 'inactive'}
        variants={toggleVariants}
        whileHover={{
          rotateZ: -30,
          scale: 1.1,
        }}
        className="flex items-center justify-center absolute inset-0 z-20 dark:z-10"
      >
        <DarkSvg
          className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] stroke-rnny-light"
          strokeWidth="3"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 rounded-full"
        animate={mode === 'light' ? 'active' : 'inactive'}
        variants={toggleBackgroundVariants}
      />
    </button>
  );
};
