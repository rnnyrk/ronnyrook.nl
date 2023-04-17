'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

import { List } from 'common/layout/List';
import { Container } from 'common/layout/Container';

import { Waves } from './Waves';

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
      className="w-screen relative py-40 mt-80 mb-10 bg-white"
      ref={ref}
    >
      <Waves />
      <Container className="flex items-center">
        <div className="min-w-[260px] mr-14">
          <h2 className="mt-2 text-xl font-semibold">Creating the web using</h2>
          <p className="mt-4">
            I love building for the web. From simple pages, to native applications, all the way to
            large Next.js applications. <strong>The web and Javascript are incredible</strong>. It
            gives everyone the freedom to just start creating.
          </p>
        </div>
        <List.Container className="mt-2 mb-10">
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
