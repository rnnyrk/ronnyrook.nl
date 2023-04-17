'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'common/layout/Container';

// SVGs from: https://glyphs.fyi
const toggleVariants = {
  off: {
    stroke: 'rnny-secondary',
    opacity: 0,
    pathLength: 0,
    pathOffset: 0,
    transition: {
      duration: 2,
      ease: 'circOut',
    },
  },

  on: {
    stroke: 'rnny-secondary',
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
  strokeWidth: '5',
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
                viewBox="0 0 80 80"
              >
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M19 20C19 19.4477 19.4477 19 20 19H53C53.5523 19 54 19.4477 54 20V66.0681C54 66.9066 53.0301 67.3727 52.3753 66.8489L37.1247 54.6484C36.7595 54.3563 36.2405 54.3563 35.8753 54.6484L20.6247 66.8489C19.9699 67.3727 19 66.9066 19 66.0681V20Z"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M26 19V13C26 12.4477 26.4477 12 27 12H60C60.5523 12 61 12.4477 61 13V59.0681C61 59.9066 60.0301 60.3727 59.3753 59.8489L54 55.5487"
                />
              </svg>
            ) : null}

            {icon === 'read' ? (
              <svg
                {...svgProps}
                viewBox="0 0 80 80"
              >
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M8 59.3827V16.0987C9.41773 15.8072 10.8507 15.5842 12.2934 15.4316C18.5544 14.7692 24.9012 15.4385 30.8945 17.3987C34.0819 18.4412 37.1351 19.836 40 21.5516V64.8356C37.1351 63.12 34.0819 61.7252 30.8945 60.6827C24.9012 58.7225 18.5544 58.0532 12.2934 58.7156C10.8507 58.8682 9.41773 59.0912 8 59.3827Z"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M40 21.5516C42.8649 19.836 45.9181 18.4412 49.1055 17.3987C55.0988 15.4385 61.4456 14.7692 67.7066 15.4316C69.1493 15.5842 70.5823 15.8072 72 16.0987V59.3827C70.5823 59.0912 69.1493 58.8682 67.7066 58.7156C61.4456 58.0532 55.0988 58.7225 49.1055 60.6827C45.9181 61.7252 42.8649 63.12 40 64.8356"
                />
              </svg>
            ) : null}

            {icon === 'codepen' ? (
              <svg
                {...svgProps}
                viewBox="0 0 80 80"
              >
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M30 64.1641L50 16.1641"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M23 24.1641L5.84089 39.4167C5.39337 39.8144 5.39337 40.5137 5.84088 40.9115L23 56.1641"
                />
                <motion.path
                  variants={toggleVariants}
                  animate={inView ? 'on' : 'off'}
                  d="M57 24.1641L74.1592 39.4167C74.6067 39.8144 74.6067 40.5137 74.1592 40.9115L57 56.1641"
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
  icon?: 'twitter' | 'github' | 'codepen' | 'read';
  text?: string;
};
