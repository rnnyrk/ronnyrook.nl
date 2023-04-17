'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'common/layout/Container';

const toggleVariants = {
  off: {
    stroke: 'black',
    opacity: 0,
    pathLength: 0,
    pathOffset: 0,
    transition: {
      duration: 2,
      ease: 'circOut',
    },
  },

  on: {
    stroke: '#FFFFFF',
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 2,
      delay: 1,
      ease: 'circOut',
    },
  },
};

const svgProps: React.SVGAttributes<SVGElement> = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  className: 'h-10 w-10 mr-4',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const ResourceHeading = ({ children, icon, text }: ResourceHeadingProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  return (
    <Container className="px-8">
      <div
        className="flex items-center mb-8"
        ref={ref}
      >
        {icon && (
          <>
            {icon === 'twitter' ? (
              <svg
                {...svgProps}
                viewBox="0 0 24 24"
              >
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"
                />
              </svg>
            ) : null}

            {icon === 'codepen' ? (
              <svg
                {...svgProps}
                viewBox="0 0 24 24"
              >
                <motion.polygon
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                />
                <motion.line
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  x1="12"
                  y1="22"
                  x2="12"
                  y2="15.5"
                />
                <motion.polyline
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  points="22 8.5 12 15.5 2 8.5"
                />
                <motion.polyline
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  points="2 15.5 12 8.5 22 15.5"
                />
                <motion.line
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="8.5"
                />
              </svg>
            ) : null}

            {icon === 'brain' ? (
              <svg
                {...svgProps}
                viewBox="0 0 24 24"
              >
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M14 19L22 19"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M10 19L2 19"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M12 21C12 19.8954 12.8954 19 14 19"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M12 21C12 19.8954 11.1046 19 10 19"
                />
              </svg>
            ) : null}
          </>
        )}
        {children}
      </div>
      {text && <p className="mb-16 text-lg">{text}</p>}
    </Container>
  );
};

type ResourceHeadingProps = {
  children: React.ReactNode;
  icon?: 'twitter' | 'github' | 'codepen' | 'brain';
  text?: string;
};
