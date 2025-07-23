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
// 48 - 64
export const H2: FCProps<HtmlProps<'h2'> & Props> = ({
  text,
  className,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={`text-4xl lg:text-[clamp(3rem,4.5vw,4rem)] uppercase ${font} ${className}`}
    >
      {text}
    </h2>
  );
};

export const H3: FCProps<HtmlProps<'h3'> & Props> = ({
  text,
  className,
  ...props
}) => {
  return (
    <h3 {...props} className={`uppercase ${font} ${className}`}>
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
