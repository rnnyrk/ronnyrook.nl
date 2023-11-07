'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useCycle, useInView, Variants } from 'framer-motion';

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
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(wrapperRef, { once: true });
  let timeout: NodeJS.Timeout;

  const skillClasses = (index: number) =>
    cn(
      'font-sathosi font-bold text-8xl tracking-wide py-8 px-12 uppercase flex whitespace-nowrap mx-6',
      {
        'bg-rnny-primary text-rnny-dark': index % 2 === 0,
        'bg-rnny-dark-tint': index % 2 !== 0,
      },
    );

  const widthMarquee1 = 8000 - (window?.innerWidth || 0);
  const widthMarquee2 = 6000 - (window?.innerWidth || 0);

  const [currentCycle, setCurrentCycle] = useState(1);
  const [xCycle, onCycleX] = useCycle(0, -widthMarquee1);
  const [xReverseCycle, onReverseCycleX] = useCycle(0, widthMarquee2);

  const durationInSeconds = 60;
  const timeoutDuration = durationInSeconds * 1000;

  useEffect(() => {
    if (!marqueeRef.current) return;
    onCycleX(currentCycle);
    onReverseCycleX(currentCycle);
  }, [marqueeRef?.current]);

  useEffect(() => {
    if (timeout) clearTimeout(timeout);

    let newCycle = currentCycle === 1 ? 0 : 1;

    timeout = setTimeout(() => {
      setCurrentCycle(newCycle);

      onCycleX(newCycle);
      onReverseCycleX(newCycle);
    }, timeoutDuration);
  }, [currentCycle]);

  return (
    <div
      className="w-screen h-[calc(100vh-104px)] fixed z-10 inset-0 -left-20 flex flex-wrap items-center content-center -rotate-12 origin-center"
      ref={wrapperRef}
    >
      <motion.div
        ref={marqueeRef}
        className="flex mb-12"
        animate={{ x: xCycle }}
        transition={{
          duration: durationInSeconds,
          ease: 'linear',
        }}
      >
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
      </motion.div>
      <div style={{ marginLeft: -widthMarquee2 }}>
        <motion.div
          className="flex"
          animate={{ x: xReverseCycle }}
          transition={{
            duration: durationInSeconds,
            ease: 'linear',
          }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};
