'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import { cn } from 'utils';

export const Slider = ({ amountOfElements, className, children }: SliderProps) => {
  const controls = useAnimationControls();
  const motionRef = useRef<HTMLDivElement | null>(null);
  const [elementWidth, setElementWidth] = useState<number | null>(null);

  useEffect(() => {
    if (motionRef?.current && !elementWidth) {
      const width = motionRef?.current?.getBoundingClientRect().width;
      setElementWidth(width);
    }

    if (elementWidth) {
      controls.start({
        x: -elementWidth,
      });
    }
  }, [motionRef, elementWidth]);

  const duration = amountOfElements * 40;

  return (
    <div className={cn('w-screen flex overflow-x-hidden', className)}>
      <motion.div
        ref={motionRef}
        className="flex"
        animate={controls}
        transition={{ ease: 'easeOut', duration }}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.start({ x: -(elementWidth || 0) })}
      >
        {children}
      </motion.div>
    </div>
  );
};

type SliderProps = {
  amountOfElements: number;
  className?: string;
  children: React.ReactNode;
};
