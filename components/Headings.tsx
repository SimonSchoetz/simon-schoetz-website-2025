import { FCProps, HtmlProps } from '@/types';

type Props = {
  text: string;
};

export const H1: FCProps<HtmlProps<'h1'> & Props> = ({ text, ...props }) => {
  return (
    <h1
      {...props}
      className={`text-[clamp(2.5rem,10vw,8rem)] leading-[1] uppercase ${props.className}`}
    >
      {text}
    </h1>
  );
};

export const H2: FCProps<HtmlProps<'h2'> & Props> = ({ text, ...props }) => {
  return (
    <h2 {...props} className={`text-6xl uppercase ${props.className}`}>
      {text}
    </h2>
  );
};

export const H3: FCProps<HtmlProps<'h3'> & Props> = ({ text, ...props }) => {
  return (
    <h3 {...props} className={`text-2xl py-4 uppercase ${props.className}`}>
      {text}
    </h3>
  );
};
