'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGroup, motion } from 'framer-motion';

import { cn } from 'utils';
import { DarkModeToggle } from 'common/interaction/DarkModeToggle';

const items = {
  '/': 'About',
  '/resources': 'Resources',
  '/work': 'Work',
};

const MenuItem = ({ title, href }: MenuItemProps) => {
  const pathname = usePathname();

  let isActive = false;
  if ((href === '/' && pathname === href) || (href === '/' && pathname === '/cv')) {
    isActive = true;
  } else if (href !== '/' && pathname?.includes(href)) {
    isActive = true;
  }

  return (
    <Link
      href={href}
      className={cn(
        'mx-2 transition-all tracking-wide hover:text-neutral-100 font-bold rounded-full text-white font-sathosi',
        {
          'text-slate-400': !isActive,
          'text-white': isActive,
        },
      )}
    >
      <span className="relative inline-block py-2 px-4">
        <span className="relative">{title}</span>
        {isActive ? (
          <motion.span
            className="absolute inset-0 rounded-full shadow-lg z-[-1] bg-rnny-primary"
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
    <>
      <nav className="absolute left-2/4 -translate-x-2/4 z-[100] top-8 rounded-full bg-rnny-primary-tint shadow-lg">
        <div className="relative w-full flex justify-center py-4 px-2">
          <LayoutGroup>
            {Object.entries(items).map(([path, label], index) => {
              return (
                <MenuItem
                  key={`${path}_${index}`}
                  href={path}
                  title={label}
                />
              );
            })}
          </LayoutGroup>
        </div>
      </nav>
      <div className="hidden md:flex absolute z-20 right-6 top-12">
        <DarkModeToggle />
      </div>
    </>
  );
};
