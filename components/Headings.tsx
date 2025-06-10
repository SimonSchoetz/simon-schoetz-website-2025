import { FCProps, HeadingProps } from '@/types';

type Props = {
  text: string;
};

export const H1: FCProps<HeadingProps & Props> = ({ text, ...props }) => {
  return (
    <h1
      className={`text-[clamp(2.5rem,10vw,8rem)] leading-[1] uppercase ${props.className}`}
      {...props}
    >
      {text}
    </h1>
  );
};

export const H2: FCProps<HeadingProps & Props> = ({ text, ...props }) => {
  return (
    <h2 className={`text-6xl uppercase ${props.className}`} {...props}>
      {text}
    </h2>
  );
};

export const H3: FCProps<HeadingProps & Props> = ({ text, ...props }) => {
  return (
    <h3 className={`text-2xl py-4 uppercase ${props.className}`} {...props}>
      {text}
    </h3>
  );
};
