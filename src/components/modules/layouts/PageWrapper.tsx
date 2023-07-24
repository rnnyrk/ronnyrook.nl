'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import { cn } from 'utils';

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 1100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  const variants: (index: number) => Variants = (index: number) => ({
    hidden: {
      scaleY: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: 'easeInOut',
      },
    },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: 'easeInOut',
      },
    },
  });

  return (
    <AnimatePresence>
      {isTransitioning ? (
        <Fragment key="route_transition_animator">
          {[...Array(4).keys()].map((index) => {
            const isOdd = index % 2 === 0;

            return (
              <motion.div
                key={`${pathname}_animation_${index}`}
                variants={variants(index)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={cn('w-[50vw] md:w-[25vw] h-[100vh] fixed bottom-0 origin-top z-50', {
                  'bg-rnny-primary': isOdd,
                  'bg-rnny-primary-tint': !isOdd,
                  'left-0': index === 0,
                  'left-[50vw] md:left-[25vw]': index === 1,
                  'left-[50vw] hidden md:block': index === 2,
                  'left-[75vw] hidden md:block': index === 3,
                })}
              />
            );
          })}
        </Fragment>
      ) : null}
      {isTransitioning ? <div className="min-w-screen min-h-screen" /> : children}
    </AnimatePresence>
  );
};

type PageWrapperProps = {
  children: React.ReactNode;
};
