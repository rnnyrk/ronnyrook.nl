import clsx from 'clsx';

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx('max-w-4xl mx-auto', className)}>{children}</div>;
};

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};
