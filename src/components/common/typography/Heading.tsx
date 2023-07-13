import { IBM_Plex_Serif } from 'next/font/google';

import { cn } from 'utils';

const plexSerif = IBM_Plex_Serif({ weight: ['400'], subsets: ['latin'] });

export const Heading = ({ as, className, children, color, size }: HeadingProps) => {
  const classes = (defaultTextSize: HeadingProps['size']) =>
    cn(`text-${size || defaultTextSize}`, plexSerif.className, className, {
      [`text-${color}`]: Boolean(color),
    });

  if (as === 'h4') {
    return <h4 className={classes('lg')}>{children}</h4>;
  }

  if (as === 'h3') {
    return <h3 className={classes('xl')}>{children}</h3>;
  }

  if (as === 'h2') {
    return <h2 className={classes('2xl')}>{children}</h2>;
  }

  return <h1 className={classes('4xl')}>{children}</h1>;
};

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
  color?: 'black' | 'white';
  size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
};
