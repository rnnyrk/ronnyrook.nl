'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    pointerEvents: 'none',
  },
  animate: {
    opacity: 1,
    scale: 1,
    pointerEvents: 'all',
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    pointerEvents: 'none',
  },
};

const transition: HTMLMotionProps<'div'>['transition'] = {
  duration: 0.3,
  staggerChildren: 0.1,
};

export function PageAnimation(props: React.PropsWithChildren<HTMLMotionProps<'div'>>) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transition}
      style={{ transformOrigin: 'top center' }}
      {...props}
    />
  );
}

export default PageAnimation;
