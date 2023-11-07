'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useCycle, useInView, Variants } from 'framer-motion';

import { cn, isServer } from 'utils';

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

  const skillClasses = (index: number) => {
    const isOdd = index % 2 !== 0;
    return cn(
      'font-sathosi font-bold text-8xl tracking-wide py-8 px-12 uppercase flex whitespace-nowrap mx-6',
      {
        'bg-rnny-primary text-rnny-dark-tint': !isOdd,
        'bg-rnny-dark-tint': isOdd,
      },
    );
  };

  const wWidth = !isServer ? window?.innerWidth : 0;
  const widthMarquee1 = 8000 - wWidth;
  const widthMarquee2 = 6000 - wWidth;

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

      <div className="absolute inset-16 z-[-1] opacity-30 flex items-center justify-center overflow-hidden blur-[10vw] saturate-150">
        <div className="absolute h-full w-full animate-orbit">
          <div className="absolute left-[25%] top-[25%] w-[50%] rounded-full bg-rnny-primary pb-[50%]"></div>
        </div>
        <div className="animate-orbit2 absolute h-1/2 w-full">
          <div className="absolute left-[25%] top-[20%] w-[40%] rounded-full bg-rnny-purple pb-[40%]"></div>
        </div>
        <div className="animate-orbit3 absolute h-full w-full">
          <div className="absolute left-[30%] top-[50%] w-[30%] rounded-full bg-rnny-primary-tint pb-[30%]"></div>
        </div>
        <div className="animate-orbit4 absolute h-full w-1/2">
          <div className="absolute left-[25%] top-[25%] w-[30%] rounded-full bg-white pb-[30%]"></div>
        </div>
      </div>
    </div>
  );
};
