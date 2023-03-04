import * as i from 'types';
import clsx from 'clsx';
import Link from 'next/link';

export const Tag = ({ title }: TagProps) => {
  const tagClass = `tag--${title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}`;
  const tag = title.toLowerCase().replaceAll(' ', '-').replaceAll('.', '');

  return (
    <Link href={`/resources/${tag}`}>
      <span
        className={clsx(
          'text-xs uppercase font-bold bg-slate-500 rounded-full px-3 py-1 mr-2 whitespace-nowrap',
          tagClass,
        )}
      >
        {title}
      </span>
    </Link>
  );
};

type TagProps = {
  title: i.TagCategories;
};
