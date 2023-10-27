'use client';

import type * as i from 'types';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion';

import { cn } from 'utils';

import { Tag } from './Tag';

// Inspiration: https://buildui.com/recipes/spotlight
export const Card = ({ children, isInView, tags, title, variant }: CardProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightStyle = useMotionTemplate`
  radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(117, 206, 247, 0.1),
    transparent 50%
  )
`;

  const classes = cn(
    'group relative min-w-full md:col-span-1 md:row-span-5 mb-4 md:mb-0 rounded-xl shadow-md',
    {
      'bg-rnny-light dark:bg-rnny-dark': !variant,
      'bg-white dark:bg-rnny-dark-tint': variant === 'off',
    },
  );

  return (
    <AnimatePresence>
      {isInView && (
        <motion.div
          onMouseMove={handleMouseMove}
          className={classes}
          exit={{ rotateY: 180 }}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
            style={{
              background: spotlightStyle,
            }}
          />

          <motion.div
            className="flex h-full w-full flex-col p-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.6,
            }}
          >
            <div>
              {tags?.map((tag, index) => (
                <Tag
                  key={`${tag}_${index}`}
                  title={tag}
                />
              ))}
            </div>
            <h1 className="my-4 flex-[2] grow-[2] text-xl text-gray">{title}</h1>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type CardProps = {
  children?: React.ReactNode;
  isInView: boolean;
  tags: i.TagCategories[];
  title: string;
  variant?: 'off';
};
