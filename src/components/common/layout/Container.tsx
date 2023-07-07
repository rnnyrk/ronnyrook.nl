import { cn } from 'utils';

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn('max-w-4xl mx-auto px-4 md:px-0', className)}>{children}</div>;
};

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};
