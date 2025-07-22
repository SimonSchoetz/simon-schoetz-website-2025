import { FCProps, HtmlProps } from '@/types';

export const ArrowInCircle: FCProps<HtmlProps<'svg'>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      stroke='currentColor'
      {...props}
    >
      <rect x='1' y='1' width='30' height='30' rx='15' strokeWidth='2' />
      <path
        d='M11 11L21 21M21 21H11.3704M21 21V11.3704'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
