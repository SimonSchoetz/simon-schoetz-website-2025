import { FCProps, HtmlProps } from '@/types';

export const CloseX: FCProps<HtmlProps<'svg'>> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      stroke='currentColor'
      {...props}
    >
      <line
        x1='1.06066'
        y1='1'
        x2='9'
        y2='8.93934'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <line
        x1='1'
        y1='8.93934'
        x2='8.93934'
        y2='1'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};
