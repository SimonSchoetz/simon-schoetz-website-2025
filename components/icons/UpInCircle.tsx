import { FCProps, HtmlProps } from '@/types';

export const UpInCircle: FCProps<HtmlProps<'svg'>> = ({
  className = '',
  ...props
}) => {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='0.75'
        y='23.25'
        width='22.5'
        height='22.5'
        rx='11.25'
        transform='rotate(-90 0.75 23.25)'
        strokeWidth='1.5'
      />
      <path
        d='M17.25 13.5L12.1431 8.85688L7.03624 13.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
