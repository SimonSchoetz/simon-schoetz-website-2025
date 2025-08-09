import { FCProps, HtmlProps } from '@/types';

type Props = HtmlProps<'div'> & {
  hovered?: boolean;
};

export const HoverBlob: FCProps<Props> = ({ className, hovered, ...props }) => {
  const positioning = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const baseStyles =
    'z-0 pointer-events-none bg-bg w-full h-auto aspect-square rounded-full absolute transition-all duration-600 ease-in-out';
  const transitionStart = 'scale-0';
  const transitionEnd = hovered ? 'scale-105' : 'scale-0';
  return (
    <div
      {...props}
      className={`${baseStyles} ${positioning} ${transitionStart} ${transitionEnd} ${className}`} //
    />
  );
};
