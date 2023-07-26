'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { useUiStore } from 'store/ui';
import { cn } from 'utils';
import SparkSvg from 'vectors/spark.svg';

export const FancyToggle = () => {
  const { fancy, setFancy } = useUiStore();

  useEffect(() => {
    const localState = localStorage?.fancy;

    if (localState) {
      setFancy(localState === 'off' ? 'off' : 'on');
    } else {
      setFancy('off');
    }
  }, []);

  const onToggleFancy = () => {
    if (fancy === 'on') {
      localStorage.fancy = 'off';
      setFancy('off');
    } else {
      localStorage.fancy = 'on';
      setFancy('on');
    }
  };

  return (
    <button
      onClick={onToggleFancy}
      className="flex items-center justify-center button-dark-mode relative"
    >
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        className="flex items-center justify-center absolute inset-0 z-10 dark:z-20 group"
      >
        <SparkSvg
          className={cn('w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] group-hover:stroke-rnny-primary', {
            'stroke-rnny-primary scale-[1.2]': fancy === 'on',
            'stroke-rnny-gray opacity-70': fancy === 'off',
          })}
          strokeWidth="3"
        />
      </motion.div>
    </button>
  );
};
