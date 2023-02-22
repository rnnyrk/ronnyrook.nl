'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const getRelativeCoordinates = (event, refElement) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: refElement.offsetLeft,
    top: refElement.offsetTop,
  };

  let reference = refElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
};

export const Card = ({ children, tags, title }: CardProps) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const boxRef = useRef<HTMLDivElement | null>(null);

  const onMoveMove = (event) => {
    setMousePosition(getRelativeCoordinates(event, boxRef.current));
  };

  console.log(mousePosition.x, mousePosition.y);

  return (
    <div
      ref={boxRef}
      className="min-w-[425px] max-w-[425px] flex flex-col justify-items-stretch p-8 mb-4 mr-4 bg-slate-700 rounded-lg shadow-lg relative"
      onMouseMove={onMoveMove}
    >
      <motion.div
        className="motion-card"
        animate={{
          opacity: 1,
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 255, 255) 0%, rgba(255, 255, 255) 100%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 255, 255) 0%, rgba(0, 0, 0) 100%)`,
        }}
        transition={{
          duration: 0.0,
        }}
      />
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
        <h1 className="grow-[2] text-xl my-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};

type CardProps = {
  children?: React.ReactNode;
  tags: string[];
  title: string;
};
