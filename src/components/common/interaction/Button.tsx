'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { cn } from 'utils';
import LoadingSvg from 'vectors/loading.svg';

export const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  size = 'default',
  ...otherProps
}: ButtonProps | ButtonLinkProps) => {
  const classes = cn(
    `flex items-center justify-center font-semibold no-underline transition-colors duration-500`,
    className,
    {
      relative: !className?.includes('absolute') && !className?.includes('fixed'),
      'border-[1px] border-rnny-gray text-black hover:text-white dark:text-white hover:bg-rnny-primary hover:border-rnny-primary':
        variant === 'primary',
      'bg-rnny-primary-tint hover:bg-rnny-primary-tint-hover text-white': variant === 'secondary',
      'bg-slate-400	cursor-not-allowed': 'disabled' in otherProps && otherProps?.disabled,
      'h-12 px-8 rounded-lg text-base min-w-[200px]': size === 'default' && !otherProps?.animate,
      'h-8 px-4 rounded-lg text-sm min-w-[100px]': size === 'small' && !otherProps?.animate,
      'h-12 px-8 rounded-full min-w-0': otherProps?.animate,
    },
  );

  if (type === 'link' && 'href' in otherProps && otherProps.href) {
    const href = otherProps.href;
    const isExternal = /^[a-zA-Z]+:\/\//.test(href);

    return (
      <Link
        href={href}
        passHref
        className={classes}
        target={isExternal ? '_blank' : '_self'}
      >
        {children}
      </Link>
    );
  } else if (
    (type === 'button' || type === 'submit') &&
    ('disabled' in otherProps || 'onClick' in otherProps)
  ) {
    const { disabled, onClick, isLoading, animate, initial, variants } = otherProps;

    if (animate && initial && variants) {
      return (
        <motion.button
          className={`button-loader ${classes}`}
          {...{ animate, initial, variants, disabled, onClick, type }}
        >
          {isLoading ? <LoadingSvg /> : children}
        </motion.button>
      );
    }

    return (
      <button
        className={`button-loader ${classes}`}
        {...{ disabled, onClick, type }}
      >
        {isLoading ? <LoadingSvg /> : children}
      </button>
    );
  }

  return null;
};

type ButtonAnimationProps = {
  initial?: string;
  animate?: string;
  variants?: Record<string, any>;
};

type ButtonBaseProps = ButtonAnimationProps & {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'small';
};

type ButtonLinkProps = ButtonBaseProps & {
  href?: string;
  type: 'link';
};

type ButtonProps = ButtonBaseProps & {
  disabled?: boolean;
  onClick?: () => void;
  type: 'button' | 'submit';
  isLoading?: boolean;
};
