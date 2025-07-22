import { FCProps, HtmlProps } from '@/types';

export const NavArrow: FCProps<HtmlProps<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      className={className}
      {...props}
      width='14'
      height='7'
      viewBox='0 0 14 7'
    >
      <path d='M7.378 6.936L8.596 4.304L0.714 5.228V2.372L8.596 3.296L7.378 0.663999L13.398 3.8L7.378 6.936Z' />
    </svg>
  );
};
