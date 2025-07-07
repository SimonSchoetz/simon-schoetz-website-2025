import { FCProps, SvgProps } from '@/types';

export const ArrowInCircle: FCProps<SvgProps> = ({ ...props }) => {
  return (
    <svg
      className={props.className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
