import { FCProps, HeadingProps } from '@/types';

type Props = {
  text: string;
};

export const H1: FCProps<HeadingProps & Props> = ({ text, ...props }) => {
  return (
    <h1
      {...props}
      className={`text-[clamp(2.5rem,10vw,8rem)] leading-[1] uppercase ${props.className}`}
    >
      {text}
    </h1>
  );
};

export const H2: FCProps<HeadingProps & Props> = ({ text, ...props }) => {
  return (
    <h2 {...props} className={`text-6xl uppercase ${props.className}`}>
      {text}
    </h2>
  );
};

export const H3: FCProps<HeadingProps & Props> = ({ text, ...props }) => {
  return (
    <h3 {...props} className={`text-2xl py-4 uppercase ${props.className}`}>
      {text}
    </h3>
  );
};
