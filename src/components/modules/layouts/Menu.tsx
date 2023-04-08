'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGroup, motion } from 'framer-motion';

const items = {
  '/': 'About',
  '/resources': 'Resources',
  '/cv': 'Cv',
};

const MenuItem = ({ title, href }: MenuItemProps) => {
  const pathname = usePathname();

  let isActive = false;
  if (href === '/' && pathname === href) {
    isActive = true;
  } else if (href !== '/' && pathname?.includes(href)) {
    isActive = true;
  }

  return (
    <Link
      href={href}
      className={clsx('mx-2 transition-all hover:text-neutral-100 font-bold rounded-full', {
        'text-slate-400': !isActive,
        'text-white': isActive,
      })}
    >
      <span className="relative inline-block py-2 px-4">
        {title}
        {isActive ? (
          <motion.span
            className="absolute inset-0 bg-slate-400 rounded-full z-[-1]"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
};

type MenuItemProps = {
  href: string;
  title: string;
};

export const Menu = () => {
  return (
    <nav className="absolute left-2/4 -translate-x-2/4 top-8 bg-slate-600 rounded-full">
      <div className="relative w-full flex justify-center py-4 px-2">
        <LayoutGroup>
          {Object.entries(items).map(([path, label]) => {
            return (
              <MenuItem
                key={path}
                href={path}
                title={label}
              />
            );
          })}
        </LayoutGroup>
      </div>
    </nav>
  );
};
