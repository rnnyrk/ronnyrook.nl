'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

import { List } from 'common/layout/List';
import { Container } from 'common/layout/Container';

import { Waves } from './Waves';
import { Heading } from 'common/typography/Heading';

const skills = [
  'React',
  'React Query',
  'Styled Components',
  'NextJS',
  'React Native',
  'React Navigation',
  'Reanimated',
  'React Testing Library',
  'Typescript',
  'Serverless',
  'AWS',
  'SupaBase',
  'Tailwind',
  'Three.JS (React Three Fiber)',
];

const skillVariants: Variants = {
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: index * 0.15,
      ease: 'easeInOut',
    },
  }),
  hidden: (index) => ({
    opacity: 0,
    x: -10,
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

  return (
    <div
      className="w-screen relative px-4 py-20 mt-40 md:py-40 md:mt-80 bg-white"
      ref={ref}
    >
      <Waves />
      <Container className="flex flex-col items-center md:flex-row">
        <div className="min-w-[260px] mr-14">
          <Heading className="mt-2 text-2xl">Creating the web using</Heading>
          <p className="mt-4">
            I love building for the web. From simple pages, to native applications, all the way to
            large Next.js applications. <strong>The web and Javascript are incredible</strong>. It
            gives everyone the freedom to just start creating.
          </p>
        </div>
        <List.Container className="mt-2 mb-10 -ml-2 md:ml-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={index}
              variants={skillVariants}
            >
              <List.Item>{skill}</List.Item>
            </motion.div>
          ))}
        </List.Container>
      </Container>
    </div>
  );
};
