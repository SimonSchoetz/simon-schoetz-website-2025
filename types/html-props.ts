import { JSX } from 'react';

export type HtmlProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];

/**
 * @deprecated Use HtmlProps instead.
 */
export type SectionProps = HtmlProps<'section'>;
