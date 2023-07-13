'use client';

import type * as i from 'types';
import { useEffect, useRef, useState } from 'react';
import {
  animate,
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';

import { cn, isServer } from 'utils';

import { Tag } from './Tag';

// Inspired on: https://codesandbox.io/s/shiny-3d-card-nyfg0h
export const Card = ({ children, isInView, tags, title, variant }: CardProps) => {
  const [isHovered, setHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(!isServer ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(!isServer ? window.innerHeight / 2 : 0);
  const dampen = 20;

  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });

  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // sheen
  const diagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
    },
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(sheenPosition, [-250, 50, 250], [0, 0.05, 0]);
  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`;

  // mouse movement
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };

    if (typeof window === 'undefined') return;
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const classes = cn('relative min-w-full md:grid-span-1 mb-4 md:mb-0 rounded-xl shadow-md', {
    'bg-rnny-light dark:bg-rnny-dark': !variant,
    'bg-white dark:bg-rnny-dark-tint': variant === 'off',
  });

  return (
    <AnimatePresence>
      {isInView && (
        <motion.div
          ref={cardRef}
          exit={{
            rotateY: 180,
            transition: {
              duration: 3,
            },
          }}
          initial={{
            rotateY: 180,
          }}
          animate={{
            rotateY: 0,
          }}
          transition={() => ({
            duration: 2,
          })}
          className={classes}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            backgroundImage: sheenGradient,
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
          }}
        >
          <motion.div
            className="flex h-full w-full flex-col p-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
          >
            <div>
              {tags?.map((tag) => (
                <Tag
                  key={tag}
                  title={tag}
                />
              ))}
            </div>
            <h1 className="my-4 flex-[2] grow-[2] text-xl">{title}</h1>
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
