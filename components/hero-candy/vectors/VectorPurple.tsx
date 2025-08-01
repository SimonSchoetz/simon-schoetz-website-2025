'use client';

import { AnimationConfig, useFloatingAnimation } from '@/hooks';
import { FCProps, HtmlProps } from '@/types';

type Props = HtmlProps<'svg'> & { animationConfig: AnimationConfig };

export const VectorPurple: FCProps<Props> = ({ animationConfig, ...props }) => {
  const styles = useFloatingAnimation(animationConfig);

  return (
    <svg
      width='665'
      height='661'
      viewBox='0 0 665 661'
      fill='none'
      style={styles}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M279.449 233.687C286.254 210.638 302.012 185.912 325.289 178.014C353.054 168.594 392.977 210.451 412.066 188.692C441.083 155.616 384.169 65.7976 428.517 60.3451C474.576 54.6823 454.046 155.602 493.989 178.619C517.662 192.261 538.41 146.008 564.955 138.969C602.562 128.998 643.164 118.151 680.458 129.18C716.862 139.944 774.407 162.522 767.962 198.999C759.12 249.039 689.006 263.481 650.645 297.909C634.182 312.684 605.701 323.407 605.073 345.188C603.884 386.419 665.053 424.443 645.936 461.26C630.933 490.154 580.301 458.31 547.054 456.921C523.847 455.952 501.227 455.155 478.018 454.244C455.789 453.371 434.083 449.98 411.9 451.617C377.374 454.165 344.515 470.117 310.075 466.64C267.43 462.335 194.175 470.412 188.535 429.067C181.365 376.5 265.477 352.779 287.955 304.471C298.112 282.644 272.651 256.715 279.449 233.687Z'
        fill='#6A63EA'
      />
    </svg>
  );
};
