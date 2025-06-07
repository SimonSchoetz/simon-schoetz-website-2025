import { PropsWithChildren } from 'react';
import { FCProps, SectionProps } from '@/types';

export const Section: FCProps<PropsWithChildren<SectionProps>> = ({
  children,
  ...props
}) => {
  return <section {...props}>{children}</section>;
};
