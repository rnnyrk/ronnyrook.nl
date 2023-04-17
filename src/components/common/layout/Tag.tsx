'use client';

import * as i from 'types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const Tag = ({ title }: TagProps) => {
  const router = useRouter();

  const tagClass = `tag--${title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}`;
  const tag = title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '');

  return (
    <motion.button
      onClick={() => router.push(`/resources/${tag}`)}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <span
        className={clsx(
          'text-xs uppercase font-bold bg-slate-500 text-white rounded-full px-3 py-1 mr-2 whitespace-nowrap',
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
