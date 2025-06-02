import { PropsWithChildren } from 'react';
import { FCProps, SectionProps } from '@/types';

export const Section: FCProps<PropsWithChildren<SectionProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={`px-36 py-12 ${className}`} {...props}>
      {children}
    </section>
  );
};
