'use client';

import { AnimationConfig, useFloatingAnimation } from '@/hooks';
import { FCProps, HtmlProps } from '@/types';

type Props = HtmlProps<'svg'> & { animationConfig: AnimationConfig };

export const VectorPink: FCProps<Props> = ({ animationConfig, ...props }) => {
  const styles = useFloatingAnimation(animationConfig);

  return (
    <svg
      width='840'
      height='757'
      viewBox='0 0 840 757'
      fill='none'
      style={styles}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M343.229 161.62C354.802 122.42 381.601 80.368 421.188 66.9366C468.409 50.9149 536.305 122.101 568.769 85.0958C618.118 28.8434 521.326 -123.91 596.748 -133.183C675.08 -142.814 640.165 28.8193 708.096 67.9658C748.356 91.1662 783.642 12.5029 828.788 0.533103C892.745 -16.4245 961.797 -34.8719 1025.22 -16.1165C1087.13 2.19084 1185 40.5893 1174.04 102.626C1159 187.727 1039.76 212.29 974.52 270.841C946.522 295.969 898.084 314.205 897.016 351.248C894.995 421.37 999.024 486.038 966.512 548.651C940.996 597.791 854.887 543.635 798.344 541.273C758.876 539.624 720.406 538.268 680.934 536.719C643.129 535.235 606.214 529.467 568.487 532.252C509.77 536.586 453.886 563.714 395.314 557.801C322.787 550.479 198.203 564.217 188.612 493.902C176.418 404.5 319.466 364.159 357.695 282C374.968 244.88 331.667 200.783 343.229 161.62Z'
        fill='#E963C4'
      />
    </svg>
  );
};
