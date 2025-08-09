import { FCProps, HtmlProps } from '@/types';

export const HoverBlob: FCProps<HtmlProps<'div'>> = ({
  className,
  ...props
}) => {
  const positioning = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  const baseStyles =
    'z-0 bg-bg w-full h-auto aspect-square rounded-full absolute transition-all duration-600 ease-in-out';
  const transitionStart = 'scale-0';
  const transitionEnd = 'group-hover:scale-200';
  return (
    <div
      {...props}
      className={`${baseStyles} ${positioning} ${transitionStart} ${transitionEnd} ${className}`} //
    />
  );
};
