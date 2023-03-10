'use client';

import { motion, Variants } from 'framer-motion';

import { List } from 'common/layout/List';

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
  return (
    <List.Container className="mt-2 mb-10">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial="hidden"
          animate="visible"
          custom={index}
          variants={skillVariants}
        >
          <List.Item>{skill}</List.Item>
        </motion.div>
      ))}
    </List.Container>
  );
};
