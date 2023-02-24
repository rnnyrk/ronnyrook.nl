import clsx from 'clsx';

import { IBM_Plex_Serif } from '@next/font/google';

const plexSerif = IBM_Plex_Serif({ weight: ['400'], subsets: ['latin'] });

export const Heading = ({ className, children }: HeadingProps) => {
  return <h1 className={clsx('text-4xl', plexSerif.className, className)}>{children}</h1>;
};

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};
