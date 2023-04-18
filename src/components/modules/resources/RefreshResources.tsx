'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

import { Button } from 'common/interaction/Button';
import { useResourcesStore } from 'store/resources';

const refreshVariants: Variants = {
  active: {
    width: 60,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  inactive: {
    width: 200,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      staggerChildren: 1,
    },
  },
};

const textVariants: Variants = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  inactive: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const RefreshResources = () => {
  const { shuffleResources } = useResourcesStore();
  const [isShufflling, setShufflling] = useState(false);

  const onShuffle = () => {
    setShufflling(true);
    shuffleResources();
  };

  useEffect(() => {
    if (isShufflling) {
      setTimeout(() => {
        setShufflling(false);
      }, 1500);
    }
  }, [isShufflling]);

  return (
    <Button
      className="fixed z-20 bottom-8 left-2/4 -translate-x-[50%] whitespace-nowrap rounded-full"
      type="button"
      onClick={onShuffle}
      initial="inactive"
      animate={isShufflling ? 'active' : 'inactive'}
      variants={refreshVariants}
    >
      {isShufflling && (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[21px] top-[12px] animate-spin w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]"
        >
          <path d="M36.584 14.2891C34.1761 14.5544 31.7967 15.1589 29.5185 16.1025C23.1799 18.7281 18.144 23.764 15.5184 30.1025C12.8929 36.4411 12.8929 43.563 15.5184 49.9015C16.9662 53.3967 19.1468 56.4958 21.8746 59.013" />
          <path d="M42.418 65.7113C44.8258 65.446 47.2053 64.8415 49.4835 63.8978C55.822 61.2723 60.858 56.2363 63.4835 49.8978C66.109 43.5593 66.109 36.4373 63.4835 30.0988C62.0358 26.6037 59.8551 23.5046 57.1273 20.9873" />
          <path d="M36.584 23.4037V6.5961C36.584 4.89999 38.6347 4.05057 39.834 5.24991L47.4627 12.8786C48.6342 14.0502 48.6342 15.9497 47.4627 17.1212L39.834 24.7499C38.6347 25.9492 36.584 25.0998 36.584 23.4037Z" />
          <path d="M42.418 56.5961V73.4037C42.418 75.0998 40.3673 75.9492 39.168 74.7499L31.5393 67.1212C30.3678 65.9497 30.3678 64.0502 31.5393 62.8786L39.168 55.2499C40.3673 54.0506 42.418 54.9 42.418 56.5961Z" />
        </svg>
      )}

      <motion.span
        initial="active"
        animate={isShufflling ? 'inactive' : 'active'}
        variants={textVariants}
      >
        Refresh resources
      </motion.span>
    </Button>
  );
};
