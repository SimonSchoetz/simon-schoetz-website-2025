import { FCProps, HtmlProps } from '@/types';

type Props = {
  text: string;
};

const font = 'font-thunder';

export const H1: FCProps<HtmlProps<'h1'> & Props> = ({
  text,
  className,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={`text-[clamp(6.5rem,20vw,8rem)] md:text-[clamp(8rem,12vw,10.5rem)] leading-[1] uppercase ${font} ${className}`}
    >
      {text}
    </h1>
  );
};

export const H2: FCProps<HtmlProps<'h2'> & Props> = ({ text, ...props }) => {
  return (
    <h2 {...props} className={`text-6xl uppercase ${font} ${props.className}`}>
      {text}
    </h2>
  );
};

export const H3: FCProps<HtmlProps<'h3'> & Props> = ({ text, ...props }) => {
  return (
    <h3 {...props} className={`text-4xl uppercase ${font} ${props.className}`}>
      {text}
    </h3>
  );
};

export const H4: FCProps<HtmlProps<'h4'> & Props> = ({ text, ...props }) => {
  return (
    <h4 {...props} className={`font-bold inline ${props.className}`}>
      {text}
    </h4>
  );
};
