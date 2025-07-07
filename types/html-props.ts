import { JSX } from 'react';

export type HtmlProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];

/**
 * @deprecated Use HtmlProps instead.
 */
export type SectionProps = HtmlProps<'section'>;
/**
 * @deprecated Use HtmlProps instead.
 */
export type DivProps = HtmlProps<'div'>;
/**
 * @deprecated Use HtmlProps instead.
 */
export type HeadingProps = HtmlProps<'h1'> | HtmlProps<'h2'> | HtmlProps<'h3'>;
/**
 * @deprecated Use HtmlProps instead.
 */
export type SvgProps = HtmlProps<'svg'>;
/**
 * @deprecated Use HtmlProps instead.
 */
export type ButtonProps = HtmlProps<'button'>;
