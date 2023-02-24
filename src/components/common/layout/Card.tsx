'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

// Source: https://codesandbox.io/s/shiny-3d-card-nyfg0h
export const Card = ({ children, tags, title }: CardProps) => {
  const [isHovered, setHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  const dampen = 40;

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

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };

    if (typeof window === 'undefined') return;

    // recalculate grid on resize
    window.addEventListener('mousemove', handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="motion-card relative min-w-[425px] max-w-[425px] flex flex-col p-8 mb-4 mr-4 rounded-lg shadow-lg bg-slate-800"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: sheenGradient,
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
    >
      <div className="relative z-10">
        <div>
          {tags?.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-slate-500 rounded-full px-2 py-1 mr-2 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="grow-[2] text-xl my-4 flex-1">{title}</h1>
        {children}
      </div>
    </motion.div>
  );
};

type CardProps = {
  children?: React.ReactNode;
  tags: string[];
  title: string;
};
