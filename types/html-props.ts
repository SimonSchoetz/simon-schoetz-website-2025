import { JSX } from 'react';

export type SectionProps = JSX.IntrinsicElements['section'];

export type HeadingProps =
  | JSX.IntrinsicElements['h1']
  | JSX.IntrinsicElements['h2']
  | JSX.IntrinsicElements['h3'];
