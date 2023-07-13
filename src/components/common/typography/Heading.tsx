import { IBM_Plex_Serif } from 'next/font/google';

import { cn } from 'utils';

const plexSerif = IBM_Plex_Serif({ weight: ['400'], subsets: ['latin'] });

export const Heading = ({ as, className, children, color, size }: HeadingProps) => {
  const classes = cn(plexSerif.className, className, {
    [`text-${color}`]: Boolean(color),
    [`text-${size}`]: Boolean(size),
  });

  if (as === 'h4') {
    return <h4 className={`${classes} text-lg`}>{children}</h4>;
  }

  if (as === 'h3') {
    return <h3 className={`${classes} text-xl`}>{children}</h3>;
  }

  if (as === 'h2') {
    return <h2 className={`${classes} text-2xl`}>{children}</h2>;
  }

  return <h1 className={`${classes} text-4xl`}>{children}</h1>;
};

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  color?: 'black' | 'white';
  size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
};
