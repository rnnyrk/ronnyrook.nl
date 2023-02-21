import clsx from 'clsx';

export const Container = ({ children, className }: ContainerProps) => {
  return <section className={clsx('max-w-4xl mx-auto', className)}>{children}</section>;
};

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};
