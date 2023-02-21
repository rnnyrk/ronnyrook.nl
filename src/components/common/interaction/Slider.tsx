'use client';

import { motion } from 'framer-motion';

export const Slider = ({ children }: SliderProps) => {
  return (
    <div className="w-screen flex overflow-x-hidden">
      <motion.div
        className="flex"
        animate={{ x: -1200 }}
        transition={{ ease: 'easeOut', duration: 50 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

type SliderProps = {
  children: React.ReactNode;
};
