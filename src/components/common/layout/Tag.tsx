'use client';

import type * as i from 'types';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { cn } from 'utils';

export const Tag = ({ title }: TagProps) => {
  const router = useRouter();

  const tagClass = `tag--${title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}`;
  const tag = title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '');

  return (
    <motion.button
      className="mb-2 md:mb-0 mr-2 font-sathosi"
      onClick={() => router.push(`/resources/${tag}`)}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <span
        className={cn(
          'text-xs uppercase font-bold bg-slate-500 text-white rounded-full px-3 py-1 whitespace-nowrap',
          tagClass,
        )}
      >
        {title}
      </span>
    </motion.button>
  );
};

type TagProps = {
  title: i.TagCategories;
};
