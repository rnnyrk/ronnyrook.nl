'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

import { cn } from 'utils';

const skillsOne = [
  'React',
  'React Query',
  'NextJS',
  'React Native',
  'React Navigation',
  'Reanimated',
  'Framer Motion',
  'React Testing Library',
  'Three.JS (React Three Fiber)',
];

const skillsTwo = [
  'Typescript',
  'Serverless',
  'AWS',
  'Shopify',
  'PostgreSQL',
  'SupaBase',
  'Firebase',
  'Tailwind',
  'Styled Components',
  'Contentful',
];

const skillVariants: Variants = {
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: index * 0.15,
      ease: 'easeInOut',
    },
  }),
  hidden: (index) => ({
    opacity: 0,
    y: -10,
    transition: {
      duration: 1,
      delay: index * 0.1,
      ease: 'easeInOut',
    },
  }),
};

export const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  const skillClasses = (index: number) =>
    cn(
      'font-sathosi font-bold text-8xl tracking-wide py-8 px-12 uppercase flex whitespace-nowrap',
      {
        'bg-rnny-primary text-white': index % 2 === 0,
        'bg-rnny-dark': index % 2 !== 0,
      },
    );

  return (
    <div
      className="w-screen h-[calc(100vh-104px)] fixed z-10 inset-0 flex flex-wrap items-center content-center overflow-hidden"
      ref={ref}
    >
      <div className="flex">
        {skillsOne.map((skill, index) => (
          <motion.span
            key={skill}
            custom={index}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={skillVariants}
            className={skillClasses(index)}
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <div className="flex">
        {skillsTwo.map((skill, index) => (
          <motion.span
            key={skill}
            custom={index}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={skillVariants}
            className={skillClasses(index)}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
