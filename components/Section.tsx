import { PropsWithChildren } from 'react';
import { FCProps, HtmlProps } from '@/types';

export const Section: FCProps<PropsWithChildren<HtmlProps<'section'>>> = ({
  children,
  ...props
}) => {
  return <section {...props}>{children}</section>;
};
